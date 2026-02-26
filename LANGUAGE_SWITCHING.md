# 中英文切换功能 / Language Switching Feature

## 功能说明 / Description

本网站现已支持中英文双语切换功能。网站右上角导航栏中添加了语言切换按钮，点击即可在中文和英文之间切换。

This website now supports bilingual switching between Chinese and English. A language toggle button has been added to the top-right navigation bar. Click it to switch between Chinese and English.

## 实现细节 / Implementation Details

### 前端实现 / Frontend Implementation

1. **导航栏按钮 / Navigation Button**
   - 位置：masthead.html 右上角
   - 按钮显示："中" (切换到中文) / "EN" (Switch to English)
   - ID: `#language-toggle`

2. **翻译系统 / Translation System**
   - JavaScript文件：`assets/js/_main.js`
   - 翻译数据存储在 `i18nData` 对象中
   - 使用 localStorage 保存用户的语言偏好

3. **翻译标记 / Translation Markup**
   - 导航项使用 `data-i18n` 和 `data-i18n-zh` 属性
   - 内容块使用 `data-i18n-content` 和 `data-i18n-content-zh` 属性
   - 页面标题自动识别并翻译

### 已翻译页面 / Translated Pages

- ✅ 导航栏 / Navigation Bar
- ✅ 首页 (About Me) / Home Page
- ✅ 新闻页面 / News Page
- ✅ 出版物页面 / Publications Page
- ✅ 经历页面 / Experiences Page
- ✅ 兴趣爱好页面 / Hobbies Page
- ✅ 个人资料侧边栏 / Author Profile Sidebar

### 添加新翻译 / Adding New Translations

如需为新内容添加翻译，请在 `assets/js/_main.js` 的 `i18nData` 对象中添加相应的英文和中文键值对：

To add translations for new content, add corresponding English and Chinese key-value pairs in the `i18nData` object in `assets/js/_main.js`:

```javascript
const i18nData = {
  en: {
    "your-key": "English text",
    // ...
  },
  zh: {
    "your-key-zh": "中文文本",
    // ...
  }
};
```

然后在HTML/Markdown中使用相应的data属性：

Then use the corresponding data attributes in HTML/Markdown:

```html
<div data-i18n-content="your-key" data-i18n-content-zh="your-key-zh">
  English text
</div>
```

## 注意事项 / Notes

- 语言偏好会保存在浏览器的localStorage中
- 切换语言会重新加载页面以应用所有翻译
- 默认语言为英文

- Language preference is saved in browser's localStorage
- Switching language will reload the page to apply all translations
- Default language is English
