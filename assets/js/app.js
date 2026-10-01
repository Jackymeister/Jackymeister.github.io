(function () {
  'use strict';

  var data = window.SITE_DATA;
  var root = document.documentElement;
  var query = new URLSearchParams(window.location.search);
  var requestedLanguage = query.get('lang');
  var requestedTheme = query.get('theme');
  // Temporary rollout setting: keep the language button visible while serving English only.
  var ENGLISH_ONLY = true;
  var language = ENGLISH_ONLY ? 'en' : ((requestedLanguage === 'zh' || requestedLanguage === 'en') ? requestedLanguage : (getStored('faculty-homepage-language') || 'en'));
  if (requestedTheme === 'dark' || requestedTheme === 'light') root.dataset.theme = requestedTheme;
  root.classList.add('js');

  function getStored(key) {
    try { return localStorage.getItem(key); } catch (error) { return null; }
  }

  function setStored(key, value) {
    try { localStorage.setItem(key, value); } catch (error) {}
  }

  function localized(value) {
    if (value && typeof value === 'object' && (value.en !== undefined || value.zh !== undefined)) {
      return value[language] || value.en || value.zh || '';
    }
    return value || '';
  }

  // Current News intentionally stays English while the rest of the page switches language.
  function english(value) {
    if (value && typeof value === 'object' && value.en !== undefined) return value.en;
    return value || '';
  }

  function isPlaceholder(value) {
    if (typeof value !== 'string') return false;
    var text = value.trim();
    var lower = text.toLowerCase();
    return text.indexOf('【') !== -1 || lower.indexOf('todo') !== -1 ||
      /your(?:[-_. ]|$)/i.test(text) || lower.indexOf('.example') !== -1 ||
      /^https?:\/\/(?:www\.)?(?:dblp\.org|orcid\.org)\/?$/i.test(text) ||
      /^mailto:your\.email@/i.test(text);
  }

  function setText(element, value) {
    if (!element) return;
    var text = localized(value);
    element.textContent = text;
    element.classList.toggle('placeholder', isPlaceholder(text));
  }

  function makeText(value, className) {
    var element = document.createElement('span');
    if (className) element.className = className;
    setText(element, value);
    return element;
  }

  function renderRichText(element, value) {
    if (!element) return;
    element.replaceChildren();
    var parts = localized(value);
    if (!Array.isArray(parts)) parts = [{ text: parts }];
    parts.forEach(function (part) {
      if (typeof part === 'string') {
        element.appendChild(document.createTextNode(part));
        return;
      }
      var text = localized(part.text);
      var child;
      var href = part.href === '$cv' ? data.profile.cv : part.href;
      if (href && !isPlaceholder(href)) {
        child = makeLink(text, href, 'inline-link');
      } else {
        child = document.createElement(part.strong ? 'strong' : 'span');
        child.textContent = text;
      }
      if (part.strong && child.tagName.toLowerCase() !== 'strong') {
        var strong = document.createElement('strong');
        strong.appendChild(child);
        child = strong;
      }
      element.appendChild(child);
    });
    element.classList.toggle('placeholder', isPlaceholder(element.textContent));
  }

  function makeLink(label, href, className) {
    var link = document.createElement('a');
    link.className = className || '';
    link.href = href || '#';
    link.textContent = label;
    if (href && href.charAt(0) !== '#') {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    return link;
  }

  function addLocalizedAttributes() {
    document.querySelectorAll('[data-en][data-zh]').forEach(function (element) {
      element.textContent = element.getAttribute('data-' + language);
    });
  }

  function renderNav() {
    var nav = document.getElementById('site-nav');
    nav.replaceChildren();
    data.nav.forEach(function (item) {
      var link = document.createElement('a');
      link.href = '#' + item.id;
      link.textContent = item.id === 'news' ? english(item) : item[language];
      link.dataset.section = item.id;
      nav.appendChild(link);
    });
  }

  function renderProfile() {
    var profile = data.profile;
    document.getElementById('brand-mark').textContent = profile.initials;
    setText(document.getElementById('brand-name'), profile.name);
    var primaryName = document.getElementById('profile-name-primary');
    var secondaryName = document.getElementById('profile-name-secondary');
    setText(primaryName, ENGLISH_ONLY ? profile.name.en : profile.name.zh);
    setText(secondaryName, ENGLISH_ONLY ? profile.name.zh : profile.name.en);
    secondaryName.hidden = false;
    setText(document.getElementById('hero-location'), profile.location);
    setText(document.getElementById('hero-role'), {
      en: profile.role.en + ' · ' + profile.university.en,
      zh: profile.role.zh + ' · ' + profile.university.zh
    });
    setText(document.getElementById('hero-headline'), profile.headline);
    renderRichText(document.getElementById('hero-summary'), profile.summary);

    var image = document.getElementById('profile-image');
    image.src = profile.photo;
    image.alt = localized(profile.name) + ' portrait';

    var profileLinks = document.getElementById('profile-links');
    profileLinks.replaceChildren();
    var icons = {
      scholar: '<path d="M2 9.2 16 2l14 7.2-14 7.2L2 9.2Z"/><path d="M7 13.1v6.2c4.8 3.5 13.2 3.5 18 0v-6.2l-9 4.6-9-4.6Z"/><path d="M29 10v10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="29" cy="22" r="1.8"/>',
      github: '<path d="M12 .75C5.65.75.5 5.9.5 12.25c0 5.08 3.3 9.38 7.88 10.9.58.1.79-.25.79-.56v-2.13c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.46.12-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.59.24 2.75.12 3.05.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.55a11.5 11.5 0 0 0 7.86-10.9C23.5 5.9 18.35.75 12 .75Z" transform="translate(3 3) scale(.88)"/>',
      email: '<rect x="2" y="5" width="28" height="22" rx="3"/><path d="m3 8 13 10L29 8" fill="none" stroke="var(--paper)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
      linkedin: '<rect x="2" y="2" width="28" height="28" rx="2"/><path d="M8 13v10M8 8.5v.1M14 23v-6c0-2.1 4.5-3.2 4.5.1V23M14 13v10" fill="none" stroke="var(--paper)" stroke-width="3" stroke-linecap="round"/>',
      dblp: '<rect x="2" y="2" width="28" height="28" rx="3"/><text x="16" y="20.4" text-anchor="middle" font-size="8.5" font-family="Arial, sans-serif" font-weight="700" fill="var(--paper)">dblp</text>',
      orcid: '<circle cx="16" cy="16" r="14"/><text x="16" y="20.6" text-anchor="middle" font-size="10" font-family="Arial, sans-serif" font-weight="700" fill="var(--paper)">iD</text>'
    };
    var links = [
      { label: 'Email', kind: 'email', href: profile.email && profile.email.indexOf('@') > 0 && !isPlaceholder(profile.email) ? 'mailto:' + profile.email : '' },
      { label: 'Google Scholar', kind: 'scholar', href: profile.scholar },
      { label: 'LinkedIn', kind: 'linkedin', href: profile.linkedin },
      { label: 'GitHub', kind: 'github', href: profile.github },
      { label: 'DBLP', kind: 'dblp', href: profile.dblp },
      { label: 'ORCID', kind: 'orcid', href: profile.orcid }
    ];

    links.forEach(function (item) {
      var available = item.href && !isPlaceholder(item.href);
      var link = document.createElement(available ? 'a' : 'span');
      link.className = 'profile-icon-link' + (available ? '' : ' is-unavailable');
      link.setAttribute('aria-label', item.label);
      link.setAttribute('title', available ? item.label : item.label + ' URL not set');
      if (available) {
        link.href = item.href;
        if (item.href.indexOf('mailto:') !== 0) {
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
        }
      } else {
        link.setAttribute('aria-disabled', 'true');
      }
      var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('viewBox', '0 0 32 32');
      icon.setAttribute('aria-hidden', 'true');
      icon.innerHTML = icons[item.kind];
      link.appendChild(icon);
      profileLinks.appendChild(link);
    });

    var index = document.getElementById('hero-index');
    index.replaceChildren();
    data.research.items.slice(0, 3).forEach(function (item, position) {
      var row = document.createElement('div');
      row.appendChild(makeText(String(position + 1).padStart(2, '0')));
      row.firstChild.className = 'index-number';
      row.appendChild(makeText(item[language].title));
      index.appendChild(row);
    });
  }

  function renderAbout() {
    setText(document.getElementById('about-title'), data.about.title);
    var copy = document.getElementById('about-copy');
    copy.replaceChildren();
    data.about.paragraphs.forEach(function (paragraph) {
      var element = makeText(paragraph, 'about-paragraph');
      copy.appendChild(element);
    });
  }

  function renderResearch() {
    setText(document.getElementById('research-title'), data.research.title);
    setText(document.getElementById('research-intro'), data.research.intro);
    var grid = document.getElementById('research-grid');
    grid.replaceChildren();
    data.research.items.forEach(function (item, position) {
      var card = document.createElement('article');
      card.className = 'research-card reveal';
      card.appendChild(makeText(String(position + 1).padStart(2, '0'), 'card-number'));
      card.appendChild(makeText(item[language].title, 'card-title'));
      card.appendChild(makeText(item[language].text, 'card-text'));
      grid.appendChild(card);
    });
  }

  function renderPublications() {
    setText(document.getElementById('publications-title'), data.publications.title);
    setText(document.getElementById('publications-intro'), data.publications.intro);
    var list = document.getElementById('publication-list');
    list.replaceChildren();
    data.publications.items.forEach(function (item) {
      var row = document.createElement('li');
      row.className = 'publication-item reveal';
      row.appendChild(makeText(item.year, 'pub-year'));
      var teaser = document.createElement('figure');
      teaser.className = 'pub-teaser';
      if (item.image) {
        var image = document.createElement('img');
        image.src = item.image;
        image.alt = localized(item.title) + ' thumbnail';
        image.loading = 'lazy';
        teaser.appendChild(image);
      } else {
        var placeholder = document.createElement('span');
        placeholder.className = 'pub-teaser-placeholder';
        placeholder.textContent = 'IMAGE';
        teaser.appendChild(placeholder);
      }
      var venueBadge = document.createElement('figcaption');
      venueBadge.className = 'pub-venue-badge';
      venueBadge.textContent = localized(item.venueLabel || item.venue);
      teaser.appendChild(venueBadge);
      row.appendChild(teaser);
      var body = document.createElement('div');
      body.appendChild(makeText(item.title, 'pub-title'));
      body.appendChild(makeText(item.authors, 'pub-authors'));
      body.appendChild(makeText(item.venue, 'venue'));
      body.appendChild(makeText(item.summary, 'pub-summary'));
      row.appendChild(body);
      var links = document.createElement('div');
      links.className = 'pub-links';
      (item.links || []).forEach(function (itemLink) {
        links.appendChild(makeLink(itemLink.label + ' ↗', itemLink.href));
      });
      row.appendChild(links);
      list.appendChild(row);
    });
    var all = document.getElementById('all-publications-link');
    all.href = data.profile.scholar;
    setText(all, data.publications.allLinkLabel);
  }

  function renderProjects() {
    setText(document.getElementById('projects-title'), data.projects.title);
    setText(document.getElementById('projects-intro'), data.projects.intro);
    var grid = document.getElementById('project-grid');
    grid.replaceChildren();
    data.projects.items.forEach(function (item) {
      var card = document.createElement('a');
      card.className = 'project-card reveal';
      card.href = item.href || '#';
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.appendChild(makeText(item.number, 'card-number'));
      card.appendChild(makeText(item.title, 'project-title'));
      card.appendChild(makeText(item.text, 'project-text'));
      var arrow = document.createElement('span');
      arrow.className = 'project-arrow';
      arrow.textContent = '↗';
      card.appendChild(arrow);
      grid.appendChild(card);
    });
  }

  function renderTimeline(items, id) {
    var list = document.getElementById(id);
    list.replaceChildren();
    items.forEach(function (item) {
      var row = document.createElement('div');
      row.className = 'timeline-item reveal';
      row.appendChild(makeText(item.year));
      var body = document.createElement('div');
      if (item.href && !isPlaceholder(item.href)) {
        body.appendChild(makeLink(localized(item.title) + ' ↗', item.href, 'timeline-title timeline-title-link'));
      } else {
        body.appendChild(makeText(item.title, 'timeline-title'));
      }
      body.appendChild(makeText(item.text, 'timeline-text'));
      row.appendChild(body);
      list.appendChild(row);
    });
  }

  function renderTeaching() {
    setText(document.getElementById('teaching-title'), data.teaching.title);
    setText(document.getElementById('teaching-intro'), data.teaching.intro);
    renderTimeline(data.teaching.items, 'teaching-list');
  }

  function renderService() {
    setText(document.getElementById('service-title'), data.service.title);
    var intro = document.getElementById('service-intro');
    setText(intro, data.service.intro);
    var heading = document.querySelector('.service-section .section-heading');
    intro.hidden = !intro.textContent.trim();
    heading.classList.toggle('without-intro', intro.hidden);
    var groups = document.getElementById('service-groups');
    groups.replaceChildren();
    (data.service.groups || []).forEach(function (group) {
      var section = document.createElement('section');
      section.className = 'service-group reveal';

      var heading = document.createElement('h3');
      heading.className = 'service-group-title';
      heading.textContent = localized(group.title);
      section.appendChild(heading);

      var list = document.createElement('ul');
      list.className = 'service-list';
      (group.items || []).forEach(function (item) {
        var row = document.createElement('li');
        row.className = 'service-item';
        var name = localized(item.name);
        if (item.href && !isPlaceholder(item.href)) {
          row.appendChild(makeLink(name, item.href, 'service-name'));
        } else {
          var nameElement = document.createElement('span');
          nameElement.className = 'service-name';
          nameElement.textContent = name;
          nameElement.classList.toggle('placeholder', isPlaceholder(name));
          row.appendChild(nameElement);
        }

        if (item.period) {
          var period = document.createElement('span');
          period.className = 'service-period';
          period.textContent = ' · ' + localized(item.period);
          row.appendChild(period);
        }
        if (item.note) {
          var note = document.createElement('span');
          note.className = 'service-note';
          note.textContent = localized(item.note);
          row.appendChild(note);
        }
        list.appendChild(row);
      });
      section.appendChild(list);
      groups.appendChild(section);
    });
  }

  function renderNews() {
    var title = document.getElementById('news-title');
    var intro = document.getElementById('news-intro');
    title.textContent = english(data.news.title);
    intro.textContent = english(data.news.intro);
    title.classList.toggle('placeholder', isPlaceholder(title.textContent));
    intro.classList.toggle('placeholder', isPlaceholder(intro.textContent));
    var list = document.getElementById('news-list');
    list.replaceChildren();
    data.news.items.forEach(function (item) {
      var row = document.createElement('li');
      row.className = 'news-item reveal';

      var date = document.createElement('strong');
      date.className = 'news-date';
      date.textContent = '[' + english(item.date) + ']';
      row.appendChild(date);

      var content = document.createElement('span');
      content.className = 'news-content';
      var parts = english(item.content);
      if (!Array.isArray(parts)) parts = [{ text: parts }];
      parts.forEach(function (part) {
        if (typeof part === 'string') {
          content.appendChild(document.createTextNode(part));
          return;
        }
        var text = english(part.text);
        var element;
        if (part.href && !isPlaceholder(part.href)) {
          element = makeLink(text, part.href, 'news-link');
        } else {
          element = document.createElement(part.strong ? 'strong' : 'span');
          element.textContent = text;
        }
        if (part.strong && element.tagName.toLowerCase() !== 'strong') {
          var strong = document.createElement('strong');
          strong.appendChild(element);
          element = strong;
        }
        content.appendChild(element);
      });
      row.appendChild(content);
      list.appendChild(row);
    });
  }

  function renderContact() {
    setText(document.getElementById('contact-title'), data.contact.title);
    var email = document.getElementById('contact-email');
    email.href = 'mailto:' + data.profile.email;
    email.replaceChildren();
    email.appendChild(makeText(data.profile.email));
    setText(document.getElementById('contact-note'), data.contact.note);
    var links = document.getElementById('contact-links');
    links.replaceChildren();
    [
      { label: 'Google Scholar', href: data.profile.scholar },
      { label: 'GitHub', href: data.profile.github },
      { label: 'DBLP', href: data.profile.dblp },
      { label: 'ORCID', href: data.profile.orcid }
    ].forEach(function (item) {
      if (item.href && !isPlaceholder(item.href)) links.appendChild(makeLink(item.label + ' ↗', item.href));
    });
  }

  function renderFooter() {
    setText(document.getElementById('footer-name'), data.profile.name);
    setText(document.getElementById('footer-note'), data.footer.note);
  }

  function render() {
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = localized(data.meta.title);
    var description = document.querySelector('meta[name="description"]');
    if (description) description.content = localized(data.meta.description);
    renderNav();
    renderProfile();
    renderAbout();
    renderNews();
    renderResearch();
    renderPublications();
    renderProjects();
    renderTeaching();
    renderService();
    renderContact();
    renderFooter();
    addLocalizedAttributes();
    var languageToggle = document.getElementById('lang-toggle');
    languageToggle.textContent = '中文';
    languageToggle.setAttribute('aria-label', ENGLISH_ONLY ? 'Chinese version temporarily unavailable' : (language === 'en' ? 'Switch to Chinese' : 'Switch to English'));
    document.getElementById('theme-toggle').setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    observeReveals();
  }

  function observeReveals() {
    var elements = document.querySelectorAll('.reveal:not(.visible)');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (element) { element.classList.add('visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach(function (element) { observer.observe(element); });
  }

  function bindEvents() {
    document.getElementById('lang-toggle').addEventListener('click', function () {
      if (ENGLISH_ONLY) return;
      language = language === 'en' ? 'zh' : 'en';
      setStored('faculty-homepage-language', language);
      render();
    });
    document.getElementById('theme-toggle').addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setStored('faculty-homepage-theme', root.dataset.theme);
      render();
    });
    var menu = document.getElementById('menu-toggle');
    var nav = document.getElementById('site-nav');
    menu.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (event) {
      if (event.target.matches('a')) {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      }
    });
    window.addEventListener('scroll', function () {
      document.getElementById('site-header').classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  bindEvents();
  render();
}());
