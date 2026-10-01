/*
 * ========================== EDIT THIS FILE ==========================
 * This is the only content file you need to edit for normal maintenance.
 * Search for “【” or “TODO” to find every field that still needs your information.
 * Keep both `en` and `zh` values so the language switch remains complete.
 */
window.SITE_DATA = {
  meta: {
    title: {
      en: '甘洋镭',
      zh: 'Yanglei Gan'
    },
    description: {
      en: 'Academic homepage of Yanglei Gan, a faculty member in computer science.',
      zh: '你的姓名，计算机学院教师个人学术主页。'
    }
  },

  profile: {
    initials: 'YG',
    name: {
      en: '甘洋镭',
      zh: 'Yanglei Gan'
    },
    role: {
      en: 'School of Computer Science and Artifical Intelligence',
      zh: '计算机与人工智能学院'
    },
    university: {
      en: 'Southwest Minzu University',
      zh: '西南民族大学'
    },
    location: {
      en: 'Chengdu · China',
      zh: '中国 · 成都'
    },
    photo: 'assets/images/profile.jpg',
    email: 'yangleigan@swun.edu.cn',
    scholar: 'https://scholar.google.com/citations?user=Pa2bAlAAAAAJ&hl=en',
    github: 'https://github.com/AONE-NLP',
    linkedin: '',
    dblp: 'https://dblp.org/pid/290/6988.html',
    orcid: '0000-0001-6127-9824',
    cv: 'assets/files/your-cv.pdf',
    headline: {
      en: ''
    },
    summary: {
      en: [
        { text: 'I am currently a Lecturer in the ' },
        { text: 'School of Computer Science and Artificial Intelligence', href: 'https://jkxy.swun.edu.cn/' },
        { text: ' at ' },
        { text: 'Southwest Minzu University', href: 'https://www.swun.edu.cn/' },
        { text: '. I received my Ph.D. from the ' },
        { text: 'School of Computer Science and Engineering', href: 'https://www.scse.uestc.edu.cn/' },
        { text: ' at the ' },
        { text: 'University of Electronic Science and Technology of China', href: 'https://www.uestc.edu.cn/' },
        { text: ', where I was advised by ' },
        { text: 'Prof. Qiao Liu', href: 'https://scholar.google.com/citations?user=9rVo3PoAAAAJ&hl=en' },
        { text: '. Prior to that, I earned my M.S. degree from ' },
        { text: 'Boston University', href: 'https://www.bu.edu/' },
        { text: ' under the supervision of ' },
        { text: 'Prof. Reza Rawassizadeh', href: 'https://scholar.google.com/citations?user=MlmVx_UAAAAJ&hl=en' },
        { text: ' and my B.S. degree from University of Connecticut.' },
        { text: ' My full CV is available ' },
        { text: 'here', href: '$cv' },
        { text: '.' }
      ],
      zh: [
        { text: '我目前是' },
        { text: '西南民族大学计算机与人工智能学院', href: 'https://www.swun.edu.cn/' },
        { text: '讲师。我在' },
        { text: '电子科技大学计算机科学与工程学院', href: 'https://www.scse.uestc.edu.cn/' },
        { text: '获得博士学位，导师为' },
        { text: '刘峤 教授', href: 'https://faculty-profile-url.example/qiao-liu' },
        { text: '。此前，我在' },
        { text: '波士顿大学', href: 'https://www.bu.edu/' },
        { text: '获得硕士学位，导师为 Prof. XX，本科毕业于 [Undergraduate University]。' },
        { text: '完整简历请见' },
        { text: '这里', href: '$cv' },
        { text: '。' }
      ]
    }
  },

  nav: [
    { id: 'about', en: 'About', zh: '简介' },
    { id: 'news', en: 'Current News', zh: 'Current News' },
    { id: 'publications', en: 'Publications', zh: '论文' },
    { id: 'research', en: 'Research', zh: '研究' },
    { id: 'projects', en: 'Projects', zh: '项目' },
    { id: 'teaching', en: 'Teaching', zh: '教学' },
    { id: 'service', en: 'Service', zh: '学术服务' },
    { id: 'contact', en: 'Contact', zh: '联系' }
  ],

  about: {
    paragraphs: [
      {
        en: 'My research asks how AI can understand and anticipate the evolution of real-world events. I develop methods that represent events through ontologies, extract structured knowledge from unstructured observations, connect events across time and sources, and reason over these connections to forecast what may happen next. The goal is to transform fragmented evidence into coherent, predictive knowledge for uncovering hidden relationships and understanding complex social dynamics.',
      }
    ]
  },

  research: {
    title: {
      en: 'Research interests',
      zh: '研究兴趣'
    },
    items: [
      {
        en: { title: '【Research theme 01】', text: '【Two or three lines explaining the problem, method, or application.】' },
        zh: { title: '【研究方向 01】', text: '【用两三行说明研究问题、方法或应用场景。】' }
      },
      {
        en: { title: '【Research theme 02】', text: '【Two or three lines explaining the problem, method, or application.】' },
        zh: { title: '【研究方向 02】', text: '【用两三行说明研究问题、方法或应用场景。】' }
      },
      {
        en: { title: '【Research theme 03】', text: '【Two or three lines explaining the problem, method, or application.】' },
        zh: { title: '【研究方向 03】', text: '【用两三行说明研究问题、方法或应用场景。】' }
      },
      {
        en: { title: '【Research theme 04】', text: '【Optional: remove this card if you only have three main themes.】' },
        zh: { title: '【研究方向 04】', text: '【可选：如果只有三个主要方向，可以删除这张卡片。】' }
      }
    ]
  },

  publications: {
    title: { en: 'Selected Works', zh: '代表性成果' },

    allLinkLabel: { en: 'View Google Scholar profile ↗', zh: '查看 Google Scholar ↗' },
    items: [
      {
        year: '2026',
        image: 'assets/images/publications/FreqDiff.png',
        venueLabel: { en: 'EMNLP 2026', zh: 'EMNLP 2026' },
        title: { en: 'Denoising the Future: Context-Aware Spectral Diffusion for Temporal Knowledge Graph Extrapolation', zh: 'Denoising the Future: Context-Aware Spectral Diffusion for Temporal Knowledge Graph Extrapolation' },
        authors: { en: 'Yanglei Gan, Peng He, Run Lin, Peiyuan Jiang, Yifan Wang, Qiao Liu', zh: 'Yanglei Gan, Peng He, Run Lin, Peiyuan Jiang, Yifan Wang, Qiao Liu' },
        venue: { en: 'Proceedings of the 31st Conference on Empirical Methods in Natural Language Processing', zh: 'Proceedings of the 31st Conference on Empirical Methods in Natural Language Processing' },
        links: [
          { label: 'Paper', href: 'https://doi.org/' },
          { label: 'Code', href: 'https://github.com/AONE-NLP/FreqDiff' }
        ]
      },
      {
        year: '2026',
        image: 'assets/images/publications/FAIT.png',
        venueLabel: { en: 'SIGKDD 2026', zh: 'SIGKDD 2026' },
        title: { en: 'FAiT: Frequency-Aware Inverted Transformer for Multivariate Time Series Forecasting', zh: 'FAiT: Frequency-Aware Inverted Transformer for Multivariate Time Series Forecasting' },
        authors: { en: 'Peng He, Yao Liu, Yanglei Gan, Run Lin, Yuxiang Cai, Qiao Liu', zh: 'Peng He, Yao Liu, Yanglei Gan, Run Lin, Yuxiang Cai, Qiao Liu' },
        venue: { en: 'Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining', zh: 'Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining' },
        links: [
          { label: 'Paper', href: 'https://dl.acm.org/doi/abs/10.1145/3770855.3818005' },
          { label: 'Code', href: 'https://github.com/AONE-NLP/FAiT' }
          ]
      },
      {
        year: '2026',
        image: 'assets/images/publications/FreqRec.png',
        venueLabel: { en: 'AAAI 2026', zh: 'AAAI 2026' },
        title: { en: 'Exploiting Inter-Session Information with Frequency-enhanced Dual-Path Networks for Sequential Recommendation', zh: 'Exploiting Inter-Session Information with Frequency-enhanced Dual-Path Networks for Sequential Recommendation' },
        authors: { en: 'Peng He, Yanglei Gan, Tingting Dai, Run Lin, Xuexin Li, Yao Liu, Qiao Liu', zh: 'Peng He, Yanglei Gan, Tingting Dai, Run Lin, Xuexin Li, Yao Liu, Qiao Liu' },
        venue: { en: 'Proceedings of the 40th Annual AAAI Conference on Artificial Intelligence', zh: 'Proceedings of the 40th Annual AAAI Conference on Artificial Intelligence' },
        links: [
          { label: 'Paper', href: 'https://doi.org/' },
          { label: 'Code', href: 'https://github.com/AONE-NLP/FreqRec' }
          ]
      },
      {
        year: '2026',
        image: 'assets/images/publications/NADEX.png',
        venueLabel: { en: 'EACL 2026', zh: 'EACL 2026' },
        title: { en: 'Negative-Aware Diffusion Process for Temporal Knowledge Graph Extrapolation', zh: 'Negative-Aware Diffusion Process for Temporal Knowledge Graph Extrapolation' },
        authors: { en: 'Yanglei Gan, Peng He, Yuxiang Cai, Run Lin, Guanyu Zhou, Qiao Liu', zh: 'Yanglei Gan, Peng He, Yuxiang Cai, Run Lin, Guanyu Zhou, Qiao Liu' },
        venue: { en: 'Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics', zh: 'Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics' },
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2026.findings-eacl.175/' },
          { label: 'Code', href: 'https://github.com/AONE-NLP/TKG-NADEx' }
          ]
      },
      {
        year: '2026',
        image: 'assets/images/publications/ScoreRec.jpg',
        venueLabel: { en: 'ACM TOIS', zh: 'ACM TOIS' },
        title: { en: 'ScoreRec: Score-based Diffusion Modeling for Sequential Recommendation', zh: 'ScoreRec: Score-based Diffusion Modeling for Sequential Recommendation' },
        authors: { en: 'Peng He, Yao Liu, Tong Luo, Yanglei Gan*, Tingting Dai, Run Lin, Qiao Liu', zh: 'Peng He, Yao Liu, Tong Luo, Yanglei Gan, Tingting Dai, Run Lin, Qiao Liu' },
        venue: { en: 'ACM Transactions on Information Systems', zh: 'ACM Transactions on Information Systems' },
        links: [
          { label: 'Paper', href: 'https://dl.acm.org/doi/10.1145/3831688' },
          { label: 'Code', href: 'https://github.com/hepengkg/ScoreRec-main' }
          ]
      },
      {
        year: '2025',
        image: 'assets/images/publications/GEMS.png',
        venueLabel: { en: 'ACL 2025', zh: 'ACL 2025' },
        title: { en: 'Gems: Generation-based Event Argument Extraction via Multi-Perspective Prompts and Ontology Steering', zh: 'Gems: Generation-based Event Argument Extraction via Multi-Perspective Prompts and Ontology Steering' },
        authors: { en: 'Run Lin, Yao Liu, Yanglei Gan, Yuxiang Cai, Tian Lan, Qiao Liu', zh: 'Run Lin, Yao Liu, Yanglei Gan, Yuxiang Cai, Tian Lan, Qiao Liu' },
        venue: { en: 'Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics', zh: 'Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics' },
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2025.findings-acl.1353.pdf' },
          { label: 'Code', href: 'https://github.com/AONE-NLP/EAE-GEMS' }
          ]
      },
      {
        year: '2025',
        image: 'assets/images/publications/NN-NER.png',
        venueLabel: { en: 'Neural Networks', zh: 'Neural Networks' },
        title: { en: 'Optimizing Boundary Dynamics for Nested Named Entity Recognition via Semantic Refinement and Trimming', zh: 'Optimizing Boundary Dynamics for Nested Named Entity Recognition via Semantic Refinement and Trimming' },
        authors: { en: 'Yanglei Gan, Yao Liu, Yuxiang Cai, Run Lin, Song Yang, Qiao Liu, Yashen Wang, Xiaojun Shi', zh: 'Yanglei Gan, Yao Liu, Yuxiang Cai, Run Lin, Song Yang, Qiao Liu, Yashen Wang, Xiaojun Shi' },
        venue: { en: 'Neural Networks', zh: 'Neural Networks' },
        links: [
          { label: 'Paper', href: 'https://www.sciencedirect.com/science/article/abs/pii/S0893608025010998' }
          ]
      },
      {
        year: '2025',
        image: 'assets/images/publications/NN-FSRE.jpg',
        venueLabel: { en: 'Neural Networks', zh: 'Neural Networks' },
        title: { en: 'Exploiting Instance-Label Dynamics through Reciprocal Anchored Contrastive Learning for Few-Shot Relation Extraction', zh: 'Exploiting Instance-Label Dynamics through Reciprocal Anchored Contrastive Learning for Few-Shot Relation Extraction' },
        authors: { en: 'Yanglei Gan, Qiao Liu, Run Lin, Tian Lan, Yuxiang Cai, Xueyi Liu, Changlin Li, Yan Liu', zh: 'Yanglei Gan, Qiao Liu, Run Lin, Tian Lan, Yuxiang Cai, Xueyi Liu, Changlin Li, Yan Liu' },
        venue: { en: 'Neural Networks', zh: 'Neural Networks' },
        links: [
          { label: 'Paper', href: 'https://www.sciencedirect.com/science/article/abs/pii/S0893608025001388' }
          ]
      },
      {
        year: '2024',
        image: 'assets/images/publications/DiFiNet.png',
        venueLabel: { en: 'ACL 2024', zh: 'ACL 2024' },
        title: { en: 'DiFiNet: Boundary-Aware Semantic Differentiation and Filtration Network for Nested Named Entity Recognition', zh: 'DiFiNet: Boundary-Aware Semantic Differentiation and Filtration Network for Nested Named Entity Recognition' },
        authors: { en: 'Yuxiang Cai, Qiao Liu, Yanglei Gan, Run Lin, Changlin Li, Xueyi Liu, Da Luo, Jiaye Yang', zh: 'Yuxiang Cai, Qiao Liu, Yanglei Gan, Run Lin, Changlin Li, Xueyi Liu, Da Luo, Jiaye Yang' },
        venue: { en: 'Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics', zh: 'Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics' },
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2024.acl-long.349.pdf' },
          { label: 'Code', href: 'https://github.com/AONE-NLP/DiFiNet' }
          ]
      },
      {
        year: '2024',
        image: 'assets/images/publications/DiffuTKG.png',
        venueLabel: { en: 'ACL 2024', zh: 'ACL 2024' },
        title: { en: 'Predicting the Unpredictable: Uncertainty-Aware Reasoning over Temporal Knowledge Graphs via Diffusion Process', zh: 'Predicting the Unpredictable: Uncertainty-Aware Reasoning over Temporal Knowledge Graphs via Diffusion Process' },
        authors: { en: 'Yuxiang Cai, Qiao Liu, Yanglei Gan, Changlin Li, Xueyi Liu, Run Lin, Da Luo, Jiaye Yang', zh: 'Yuxiang Cai, Qiao Liu, Yanglei Gan, Changlin Li, Xueyi Liu, Run Lin, Da Luo, Jiaye Yang' },
        venue: { en: 'Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics', zh: 'Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics' },
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2024.findings-acl.343.pdf' },
          { label: 'Code', href: 'https://github.com/AONE-NLP/DiffuTKG' }
          ]
      },
      {
        year: '2024',
        image: 'assets/images/publications/SaCon.png',
        venueLabel: { en: 'AAAI 2024', zh: 'AAAI 2024' },
        title: { en: 'Synergistic Anchored Contrastive Pre-Training for Few-Shot Relation Extraction', zh: 'Synergistic Anchored Contrastive Pre-Training for Few-Shot Relation Extraction' },
        authors: { en: 'Da Luo, Yanglei Gan, Rui Hou, Run Lin, Qiao Liu, Yuxiang Cai, Wannian Gao', zh: 'Da Luo, Yanglei Gan, Rui Hou, Run Lin, Qiao Liu, Yuxiang Cai, Wannian Gao' },
        venue: { en: 'Proceedings of the 38th Annual AAAI Conference on Artificial Intelligence', zh: 'Proceedings of the 38th Annual AAAI Conference on Artificial Intelligence' },
        links: [
          { label: 'Paper', href: 'https://ojs.aaai.org/index.php/AAAI/article/view/29838' },
          { label: 'Code', href: 'https://github.com/AONE-NLP/FSRE-SaCon' }
          ]
      },
      {
        year: '2023',
        image: 'assets/images/publications/AOAN.jpg',
        venueLabel: { en: 'ECAI 2023', zh: 'ECAI 2023' },
        title: { en: 'Aspect-Oriented Opinion Alignment Network for Aspect-based Sentiment Classification', zh: 'Aspect-Oriented Opinion Alignment Network for Aspect-based Sentiment Classification' },
        authors: { en: 'Xueyi Liu, Rui Hou, Yanglei Gan, Da Luo, Changlin Li, Xiaojun Shi, Qiao Liu', zh: 'Xueyi Liu, Rui Hou, Yanglei Gan, Da Luo, Changlin Li, Xiaojun Shi, Qiao Liu' },
        venue: { en: 'Proceedings of the 26th European Conference on Artificial Intelligence', zh: 'Proceedings of the 26th European Conference on Artificial Intelligence' },
        links: [
          { label: 'Paper', href: 'https://journals.sagepub.com/doi/pdf/10.3233/FAIA230436' },
          { label: 'Code', href: 'https://github.com/AONE-NLP/ABSA-AOAN' }
          ]
      },
      {
        year: '2021',
        image: '',
        venueLabel: { en: 'UbiComp 2021', zh: 'UbiComp 2021' },
        title: { en: '11 Years with Wearables: Quantitative Analysis of Social Media, Academia, News Agencies, and Lead User Community from 2009-2020 on Wearable Technologies', zh: '11 Years with Wearables: Quantitative Analysis of Social Media, Academia, News Agencies, and Lead User Community from 2009-2020 on Wearable Technologies' },
        authors: { en: 'Yanglei Gan, Tianyi Wang, Alireza Javaheri, Elaheh Momeni-Ortner, Milad Dehghani, Mehdi Hosseinzadeh, Reza Rawassizadeh', zh: 'Yanglei Gan, Tianyi Wang, Alireza Javaheri, Elaheh Momeni-Ortner, Milad Dehghani, Mehdi Hosseinzadeh, Reza Rawassizadeh' },
        venue: { en: 'Proceedings of the 23rd International Joint Conference on Pervasive and Ubiquitous Computing', zh: 'Proceedings of the 23rd International Joint Conference on Pervasive and Ubiquitous Computing' },
        links: [
          { label: 'Paper', href: 'https://dl.acm.org/doi/pdf/10.1145/3448096' }
          ]
      }
    ]
  },

  projects: {
    title: { en: 'Research Projects', zh: '科研项目' },
    items: [
      {
        number: 'U22B2061, 2023.01-2026.12',
        title: { en: 'National Natural Science Foundation of China', zh: '国家自然科学基金-联合基金重点项目' },
        text: { en: '多模态数据驱动的事件表征与可解释性推理方法研究', zh: '多模态数据驱动的事件表征与可解释性推理方法研究' }
      },
      {
        number: 'U19B2028, 2020.01-2023.12',
        title: { en: 'National Natural Science Foundation of China', zh: '国家自然科学基金-联合基金重点项目' },
        text: { en: '面向复杂场景认知推理的知识图谱构建与计算方法研究', zh: '面向复杂场景认知推理的知识图谱构建与计算方法研究' },
        href: 'https://your-project-url.example/'
      },
      {
        number: '2024YFG0005, 2024.08-2026.03',
        title: { en: 'Key R&D Program of Sichuan Province', zh: '四川省科技计划重点研发项目' },
        text: { en: '互联网社会风险事件动态感知和认知推理研究', zh: '互联网社会风险事件动态感知和认知推理研究' },
        href: 'https://your-project-url.example/'
      }
    ]
  },

  teaching: {
    title: { en: 'Teaching', zh: '教学' },
    intro: { en: '【Add current and recent courses, with links to course pages or materials.】', zh: '【添加当前和近期课程，并链接到课程主页或教学资料。】' },
    items: [
      { year: '20XX', title: { en: '【Course name】', zh: '【课程名称】' }, text: { en: '【Course level · semester · course link】', zh: '【课程层次 · 学期 · 课程链接】' } },
      { year: '20XX', title: { en: '【Course name】', zh: '【课程名称】' }, text: { en: '【Course level · semester · course link】', zh: '【课程层次 · 学期 · 课程链接】' } }
    ]
  },

  service: {
    title: { en: 'Academic Service', zh: '学术服务' },
    intro: { en: '【Add your reviewing, editorial, program committee, and academic community service.】', zh: '【填写审稿、编委、程序委员会及学术共同体服务经历。】' },
    groups: [
      {
        title: { en: 'Conference PC Member', zh: '会议程序委员会委员' },
        items: [
          { name: { en: 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining'}, href: '', period: { en: '2024-present'} },
          { name: { en: 'International Conference on Learning Representations'}, href: '', period: { en: '2025–present'} },
          { name: { en: 'ACM SIGIR Conference on Research and Development in Information Retrieval'}, href: '', period: { en: '2025–present'} },
          { name: { en: 'ACL Rolling Review'}, href: '', period: { en: '2024–present'} },
          { name: { en: 'AAAI Conference on Artificial Intelligence'}, href: '', period: { en: '2024–present'} },
          { name: { en: 'International Conference on Machine Learning'}, href: '', period: { en: '2026–present'} }
        ]
      },
      {
        title: { en: 'Journal Reviewer', zh: '期刊审稿人' },
        items: [
          { name: { en: 'IEEE Transactions on Affective Computing'}, href: '', period: { en: '2025–present'} },
          { name: { en: 'IEEE Transactions on Neural Networks and learning systems'}, href: '', period: { en: '2025–present'} },
          { name: { en: 'Neural Networks'}, href: '', period: { en: '2023–present'} },
          { name: { en: 'Applied Soft Computing'}, href: '', period: { en: '2025–present'} },
          { name: { en: 'Knowledge-based Systems'}, href: '', period: { en: '2025–present'} }
        ]
      },
      // {
      //   title: { en: 'Editorial & Community Service', zh: '编委与学术共同体服务' },
      //   items: [
      //     { name: { en: '【Editorial board, workshop, or society role】', zh: '【编委、研讨会或学会职务】' }, href: '', period: { en: '20XX–present', zh: '20XX–至今' } }
      //   ]
      // }
    ]
  },

  news: {
    title: { en: 'Current News', zh: '最新动态' },
    intro: { en: '', zh: '' },
    items: [
      {
        date: { en: 'Aug. 2026', zh: '2026年8月' },
        content: {
          en: [
            { text: '🎉Three Papers ' },
            { text: '"FreqDiff"', href: 'https://arxiv.org/abs/2608.20804' },
            { text: ', ' },
            { text: '"ASTR"', href: 'https://arxiv.org/abs/xxxx.00002' },
            { text: ', and ' },
            { text: '"DyHist"', href: 'https://arxiv.org/abs/xxxx.00003' },
            { text: ' have been accepted to' },
            { text: ' EMNLP 2026 (CCF B, 1 main, 2 findings)', strong: true, href: 'https://2026.emnlp.org/'},
            { text: '.' },
            { text: ' See you in📍Budapest, Hungary.'}
          ]
        }
      },
      {
        date: { en: 'May. 2026', zh: '2026年5月' },
        content: {
          en: [
            { text: 'One paper', href: 'https://dl.acm.org/doi/pdf/10.1145/3770855.3818005'},
            { text: ' has been accepted to' },
            { text: ' ACM TOIS (CCF A)', strong: true, href: 'https://dl.acm.org/doi/10.1145/3831688'},
            { text: '.' }
          ]
        }
      },
      {
        date: { en: 'May. 2026', zh: '2026年5月' },
        content: {
          en: [
            { text: 'Two Papers ' },
            { text: '"DiffuSent"', href: 'https://link.springer.com/chapter/10.1007/978-3-032-37676-3_1' },
            { text: ', and ' },
            { text: '"GLIDE"', href: 'https://link.springer.com/chapter/10.1007/978-3-032-37664-0_36' },
            { text: ' have been accepted to' },
            { text: ' ECML-PKDD (CCF B)', strong: true, href: 'https://ecmlpkdd.org/2026/'},
            { text: '.' },
            { text: ' See you in Naples, Italy.'}
          ]
        }
      },
      {
        date: { en: 'May. 2026', zh: '2026年5月' },
        content: {
          en: [
            { text: '🎓I have successfully defended my PhD thesis, ' },
            { text: 'Spatiotemporal Reasoning Over Social Events Sequences', strong: true },
            { text: ' with distinction.' }
          ]
        }
      },
      {
        date: { en: 'May. 2026', zh: '2026年5月' },
        content: {
          en: [
            { text: 'One paper', href: 'https://dl.acm.org/doi/pdf/10.1145/3770855.3818005'},
            { text: ' has been accepted to' },
            { text: ' SIGKDD 2026 (CCF A)', strong: true, href: 'https://kdd2026.kdd.org/'},
            { text: '.' },
            { text: ' See you in Jeju, Korea.'}
          ]
        }
      },
      {
        date: { en: 'Apr. 2026', zh: '2026年4月' },
        content: {
          en: [
            { text: 'I have been awared the '},
            { text: 'CETC PhD Scholarship', strong: true},
            { text: ' (1/25).' }
          ]
        }
      },
      {
        date: { en: 'Jan. 2026', zh: '2026年1月' },
        content: {
          en: [
            { text: 'One paper', href: 'https://aclanthology.org/2026.findings-eacl.175.pdf'},
            { text: ' has been accepted to' },
            { text: ' EACL 2026', strong: true, href: 'https://2026.eacl.org/'},
            { text: '.' },
            { text: ' See you in Rabat, Morocco.'}
          ]
        }
      },
      {
        date: { en: 'Jan. 2026', zh: '2026年1月' },
        content: {
          en: [
            { text: 'One paper', href: 'https://link.springer.com/chapter/10.1007/978-981-92-0372-7_19'},
            { text: ' has been accepted to' },
            { text: ' DASFAA 2026 (CCF B)', strong: true, href: 'https://dasfaa2026.github.io/'},
            { text: '.' },
            { text: ' See you in Jeju, Korea.'}
          ]
        }
      },
      {
        date: { en: 'Jan. 2026', zh: '2026年1月' },
        content: {
          en: [
            { text: 'One paper', href: 'https://ojs.aaai.org/index.php/AAAI/article/view/38502'},
            { text: ' has been accepted to' },
            { text: ' AAAI 2026 (Oral, CCF A)', strong: true, href: 'https://aaai.org/conference/aaai/aaai-26/'},
            { text: '.' },
            { text: ' See you in Singapore.'}
          ]
        }
      }
    ]
  },

  contact: {
    title: { en: 'Research advances through open exchange.', zh: '欢迎交流有意义的研究问题。' },
    note: { en: 'I welcome inquiries from prospective students and collaborators interested in event understanding, temporal reasoning, and sequence forecasting. Please feel free to contact me by email.', zh: '【在这里填写办公室、通信地址、招生说明或你偏好的联系方式。】' }
  },

  footer: {
    note: { en: '© 2026 Your Name · Built with GitHub Pages', zh: '© 2026 你的姓名 · 使用 GitHub Pages 构建' }
  }
};
