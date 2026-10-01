# Faculty Homepage

这是一个面向计算机学院教师的中英文学术主页框架，视觉上参考了 [Yongyang Lv](https://lvyongyang.github.io/) 的编号分区、研究卡片和深色模式，也吸收了 [Xintong Han](https://han-xintong.github.io/) 的论文摘要式展示。代码和内容均已独立重写，不包含他们的个人内容。

## 先看效果

这是纯静态网页，不需要 Node.js、数据库或后端服务。推荐在本地预览：

```bash
python3 -m http.server 8765 --bind 127.0.0.1 --directory faculty-homepage
```

然后打开 <http://127.0.0.1:8765/>。

如果你已经进入 `faculty-homepage/` 目录，也可以运行：

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

## 你只需要先改一个文件

打开 [`assets/js/site-data.js`](assets/js/site-data.js)，依次修改：

1. `profile`：姓名、职称、学校、邮箱、照片、Google Scholar、GitHub、DBLP、ORCID、CV；
2. `about`：中英文个人简介；
3. `research.items`：三到四个研究方向；
4. `publications.items`：首页展示的五到八篇代表论文；
5. `projects.items`：代码、数据、项目主页或实验室资源；
6. `teaching.items`、`service.items` 和 `news.items`：课程、学术服务和近期动态；
7. `contact`：联系方式和招生说明。

头像下方会固定显示一排学术主页图标：邮箱、Google Scholar、LinkedIn、GitHub、DBLP 和 ORCID。填写 `profile` 中的真实地址后，图标会变成可点击链接；没有填写的项目会保留为灰色占位，不会跳转到虚假地址。悬停可以看到名称，键盘也可以访问可用链接。首页顺序固定为“个人简介 → Current News → Selected work → Research interests”。Current News 整个区块固定使用英文，不会随右上角语言按钮切换；其余区块仍然正常切换中英文。

`profile.summary` 支持链接片段。学校、导师和其他机构可以写成 `{ text: '名称', href: 'https://...' }`；导师主页如果还未确认，请替换示例的 `faculty-profile-url.example`，否则该片段会保持为普通文字。

最新动态维护在 `news.items` 中，页面会以带滚动条的项目符号列表展示，适合记录论文录用、新的职务或头衔、获奖、报告和招生通知。每项可以增加 `href`，点击论文或公告名称即可打开新闻、论文或学校页面：

```js
{
  date: { en: 'May. 2026', zh: '2026年5月' },
  content: {
    en: [
      { text: 'Our paper ' },
      { text: 'MEMTS', href: 'https://arxiv.org/pdf/2602.13783' },
      { text: ' has been accepted to ' },
      { text: 'SIGKDD 2026', strong: true },
      { text: '.' }
    ],
    zh: [
      { text: '我们的论文' },
      { text: 'MEMTS', href: 'https://arxiv.org/pdf/2602.13783' },
      { text: '已被' },
      { text: 'SIGKDD 2026', strong: true },
      { text: '接收。' }
    ]
  }
}
```

`content` 使用小片段数组而不是直接写 HTML，因此论文链接和粗体会议名称都可以安全维护。`href` 会自动在新标签页打开，`strong: true` 会显示为粗体。

学术服务维护在 `service.groups` 中。页面按 `Conference PC Member`、`Journal Reviewer`、`Editorial & Community Service` 等类别显示项目符号列表；每项可以填写名称、链接和年份：

```js
{
  name: { en: 'Your service venue', zh: '你的服务对象' },
  href: 'https://example.org/',
  period: { en: '2026–present', zh: '2026–至今' }
}
```

请将占位文字替换成你的真实期刊、会议、任职角色和年份，也可以按需增删类别和条目。

每篇论文还可以填写一个小图和图片上的会议/期刊标签：

```js
{
  image: 'assets/images/publications/your-paper.webp',
  venueLabel: { en: 'EMNLP 2026', zh: 'EMNLP 2026' }
}
```

图片建议使用论文方法图、模型结构图或项目视觉摘要，比例接近 `16:10`。如果 `image` 留空，页面会显示一个整齐的占位框，不会出现破图。

搜索 `【` 或 `TODO`，就可以找到还没有替换的内容。页面中的棕色文字是占位提示，全部换成你的信息后就会自然变成正常正文颜色。

## 替换照片和 CV

### 照片

1. 准备一张 `jpg` 或 `webp` 格式的正式照片，例如 `profile.jpg`；
2. 放入 `assets/images/`；
3. 将 `site-data.js` 中的 `profile.photo` 改成：

```js
photo: 'assets/images/profile.jpg'
```

建议使用竖向照片，比例接近 4:5，文件控制在 1 MB 左右。

### CV

将简历 PDF 放入 `assets/files/`，例如 `cv.pdf`，然后改成：

```js
cv: 'assets/files/cv.pdf'
```

仓库目前没有放置虚假的 PDF；在你放入真实文件之前，“Download CV”按钮只是一个待替换链接。

## Google Scholar 和论文数据

你提供的 Scholar 地址已经作为默认链接写入：

<https://scholar.google.com/citations?user=Pa2bAlAAAAAJ&hl=en>

主页暂时采用手工维护论文的方式，这比在网页运行时抓取 Google Scholar 稳定。建议的论文维护流程是：

1. 在 Google Scholar 个人主页核对题目、作者顺序、年份和引用信息；
2. 只把五到八篇代表论文放在首页；
3. 每篇论文填写 `Paper`、`Code`、`Project`、`Data` 等实际链接；
4. 完整论文列表后续可以独立做成 `publications.html`，或从 BibTeX 自动生成。

镜像站只适合临时查阅公开信息，不要在镜像站登录 Google 账号，也不要把镜像地址写进自己的主页。论文写入网站前，最好再用 DOI、DBLP、出版社页面或 arXiv 交叉核验。

## 中英文和深色模式

- 右上角 `中文 / EN` 会切换语言；
- 选择会保存到浏览器本地；
- 圆形按钮切换浅色/深色主题；
- 页面默认遵循操作系统的深色模式偏好；
- 两种语言内容都集中在 `site-data.js`，不要只修改 HTML 中显示出来的文字。

## 发布到 GitHub Pages

最简单的正式部署方式是建立一个公开仓库，仓库名称严格使用：

```text
你的 GitHub 用户名.github.io
```

然后：

1. 将 `faculty-homepage/` 目录中的**内容**上传到该仓库根目录（注意不是把 `faculty-homepage` 这一层目录再套进去）；
2. 打开仓库的 `Settings` → `Pages`；
3. 在 `Build and deployment` 中选择 `Deploy from a branch`；
4. 选择 `main` 分支和 `/ (root)` 目录并保存；
5. 等待 GitHub Actions 完成，访问 `https://你的用户名.github.io/`。

如果你的仓库名称不是 `用户名.github.io`，网站地址通常会多一级路径，例如 `https://用户名.github.io/repository-name/`。此时需要把 `site-data.js` 中的资源路径和部署路径一起测试。

## 本地调试顺序

1. 先修改 `site-data.js`；
2. 刷新浏览器；
3. 如果仍看到旧文字，使用 `Ctrl+Shift+R`（macOS 是 `Cmd+Shift+R`）；
4. 如果页面空白，打开浏览器开发者工具的 `Console`，查看 JavaScript 报错；
5. 如果图片不显示，检查路径是否从网站根目录开始，例如 `assets/images/profile.jpg`；
6. 如果 CV 下载失败，确认 PDF 文件名大小写完全一致；
7. 发布前分别用手机、电脑和学校网络测试中英文、深色模式、论文链接和 CV 下载。

## 文件说明

```text
index.html                 页面结构
assets/js/site-data.js     所有个人内容（最常修改）
assets/js/app.js           中英文切换、主题、列表渲染和交互
assets/css/styles.css      页面视觉样式
assets/images/             照片、图标和论文图片
assets/files/              CV、课程资料等 PDF
```

如果以后希望添加完整论文页、实验室成员页或单独的课程网站，可以继续沿用同一个 `site-data.js` 数据结构，不需要推翻现有首页。
