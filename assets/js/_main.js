/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// ========== Language/i18n functions ==========
const i18nData = {
  en: {
    "about-intro-en": "I am Yunfan Leng (冷云帆), a undergraduate student in Computer Science at the <a href='https://www.dlut.edu.cn/' target='_blank'>Dalian University of Technology</a>, starting from Fall 2022.",
    "research-interests-en": "My research interests lie in <strong style='color: #8B0000;'>machine learning</strong> and <strong style='color: #8B0000;'>signal processing</strong>, with a particular focus on:<br><br>- <strong style='color: #8B0000;'>Multi-modal Learning</strong><br>- <strong style='color: #8B0000;'>Signal Representation and Time-series Forecasting</strong><br>- <strong style='color: #8B0000;'>Large Language Models (LLMs) and Vision-Language Models (VLMs)</strong>",
    "education-en": "- <strong style='color: #8B0000;'>B.Eng. in Computer Science</strong>, <img src='/images/logos/dutlogo.png' alt='DUT' style='height: 1em; vertical-align: middle;'> Dalian University of Technology, Sep 2022 - Present",
    "skills-en": "- <strong style='color: #8B0000;'>Programming Languages</strong>: Python, C++, C, JavaScript, LaTeX<br>- <strong style='color: #8B0000;'>Frameworks & Libraries</strong>: PyTorch, Pandas, NumPy, and more<br>- <strong style='color: #8B0000;'>Languages</strong>: English (IELTS Academic 7.5), Chinese (Native)",
    "awards-en": "- <strong style='color: #8B0000;'>Second Prize</strong>, Chinese Mathematics Competition (CMC), Nov 2023",
    "news-collaboration": "📢 I am always looking for collaborators. If you are interested in my work, please feel free to contact me to discuss potential collaboration opportunities!",
    "publications-intro": "I am very honored to work with some dedicated and talented collaborators.",
    "Research Interests": "Research Interests",
    "Education": "Education",
    "Skills": "Skills",
    "Awards": "Awards",
    "Follow": "Follow",
    "Website": "Website",
    "Email": "Email",
    "Undergraduate Student": "Undergraduate Student"
  },
  zh: {
    "about-intro-zh": "我是冷云帆（Yunfan Leng），自2022年秋季起在<a href='https://www.dlut.edu.cn/' target='_blank'>大连理工大学</a>计算机科学专业攻读本科学位。",
    "research-interests-zh": "我的研究兴趣在于<strong style='color: #8B0000;'>机器学习</strong>和<strong style='color: #8B0000;'>信号处理</strong>，特别关注以下方面：<br><br>- <strong style='color: #8B0000;'>多模态学习</strong><br>- <strong style='color: #8B0000;'>信号表示与时间序列预测</strong><br>- <strong style='color: #8B0000;'>大型语言模型（LLMs）和视觉语言模型（VLMs）</strong>",
    "education-zh": "- <strong style='color: #8B0000;'>计算机科学工学学士</strong>，<img src='/images/logos/dutlogo.png' alt='大连理工大学' style='height: 1em; vertical-align: middle;'> 大连理工大学，2022年9月 - 至今",
    "skills-zh": "- <strong style='color: #8B0000;'>编程语言</strong>：Python、C++、C、JavaScript、LaTeX<br>- <strong style='color: #8B0000;'>框架与库</strong>：PyTorch、Pandas、NumPy等<br>- <strong style='color: #8B0000;'>语言能力</strong>：英语（雅思学术类7.5分）、中文（母语）",
    "awards-zh": "- <strong style='color: #8B0000;'>二等奖</strong>，中国大学生数学竞赛（CMC），2023年11月",
    "news-collaboration-zh": "📢 我一直在寻找合作者。如果您对我的工作感兴趣，请随时与我联系讨论潜在的合作机会！",
    "publications-intro-zh": "我非常荣幸能与一些敬业且有才华的合作者共事。",
    "研究兴趣": "研究兴趣",
    "教育背景": "教育背景",
    "技能": "技能",
    "获奖情况": "获奖情况",
    "关注": "关注",
    "网站": "网站",
    "邮箱": "邮箱",
    "本科生": "本科生"
  }
};

let determineLanguageSetting = () => {
  let language = localStorage.getItem("language");
  return (language === "en" || language === "zh") ? language : "en";
};

let translatePage = (lang) => {
  // Translate navigation items
  $("[data-i18n]").each(function() {
    const key = $(this).attr("data-i18n");
    if (lang === "zh") {
      const zhText = $(this).attr("data-i18n-zh");
      if (zhText) {
        $(this).text(zhText);
      } else if (i18nData.zh[key]) {
        $(this).text(i18nData.zh[key]);
      }
    } else {
      if (i18nData.en[key]) {
        $(this).text(i18nData.en[key]);
      } else {
        $(this).text(key);
      }
    }
  });
  
  // Translate content blocks
  $("[data-i18n-content]").each(function() {
    const enKey = $(this).attr("data-i18n-content");
    const zhKey = $(this).attr("data-i18n-content-zh");
    
    if (lang === "zh" && zhKey && i18nData.zh[zhKey]) {
      $(this).html(i18nData.zh[zhKey]);
    } else if (lang === "en" && enKey && i18nData.en[enKey]) {
      $(this).html(i18nData.en[enKey]);
    }
  });
  
  // Translate page titles in h1 elements
  $("h1.page__title").each(function() {
    const enTitle = $(this).text().trim();
    const titleMap = {
      "News": lang === "zh" ? "新闻" : "News",
      "Publications": lang === "zh" ? "出版物" : "Publications",
      "Experiences": lang === "zh" ? "经历" : "Experiences",
      "Hobbies": lang === "zh" ? "兴趣爱好" : "Hobbies",
      "About Me": lang === "zh" ? "关于我" : "About Me"
    };
    
    if (titleMap[enTitle]) {
      $(this).text(titleMap[enTitle]);
    }
  });
  
  // Translate news titles and content
  $(".archive__item-title").each(function() {
    const enTitle = $(this).text().trim();
    const newsMap = {
      "Website launched!": lang === "zh" ? "网站上线！" : "Website launched!",
      "Received PhD Offer from UGA": lang === "zh" ? "收到佐治亚大学博士录取通知" : "Received PhD Offer from UGA"
    };
    if (newsMap[enTitle]) {
      $(this).text(newsMap[enTitle]);
    }
  });
  
  // Translate common elements
  $(".author__urls-wrapper button").text(lang === "zh" ? "关注" : "Follow");
};

let setLanguage = (lang) => {
  if (lang === "en" || lang === "zh") {
    localStorage.setItem("language", lang);
    $("html").attr("lang", lang);
    updateLanguageDisplay(lang);
    translatePage(lang);
  }
};

let updateLanguageDisplay = (lang) => {
  const btn = $("#language-toggle");
  if (lang === "zh") {
    btn.removeClass("lang-en").addClass("lang-zh");
    btn.attr("title", "Switch to English");
    btn.text("EN");
  } else {
    btn.removeClass("lang-zh").addClass("lang-en");
    btn.attr("title", "切换到中文");
    btn.text("中");
  }
};

let toggleLanguage = () => {
  const current_lang = determineLanguageSetting();
  const new_lang = current_lang === "en" ? "zh" : "en";
  setLanguage(new_lang);
  window.location.reload();
};

/* ========== Theme functions (DISABLED) ==========
// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  return (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") ? "system" : themeSetting;
};

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
let determineComputedTheme = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting != "system") {
    return themeSetting;
  }
  return (userPref && userPref("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
};

// detect OS/browser preference
const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  const use_theme =
    theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    browserPref;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
};

// Toggle the theme manually
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", new_theme);
  setTheme(new_theme);
};
*/

/* ==========================================================================
   Plotly integration script - Theme support disabled
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
/*
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}
*/

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // Initialize language
  const current_lang = determineLanguageSetting();
  $("html").attr("lang", current_lang);
  updateLanguageDisplay(current_lang);
  translatePage(current_lang);
  
  // Bind language toggle with proper event handling
  $("#language-toggle").off("click").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Language toggle clicked");
    toggleLanguage();
    return false;
  });

  /* Theme toggle disabled */
  // If the user hasn't chosen a theme, follow the OS preference
  // setTheme();
  // window.matchMedia('(prefers-color-scheme: dark)')
  //       .addEventListener("change", (e) => {
  //         if (!localStorage.getItem("theme")) {
  //           setTheme(e.matches ? "dark" : "light");
  //         }
  //       });
  
  // Handle theme toggle button
  // $("#theme-toggle").on("click", function(e) {
  //   e.preventDefault();
  //   toggleTheme();
  // });

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});
