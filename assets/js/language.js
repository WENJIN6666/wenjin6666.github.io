/* ==========================================================================
   Language Switching functionality for i18n support
   ========================================================================== */

// Get current language setting
let determineLanguageSetting = () => {
  let language = localStorage.getItem("language");
  return (language === "en" || language === "zh") ? language : "en";
};

// Set the language and save to localStorage
let setLanguage = (lang) => {
  if (lang === "en" || lang === "zh") {
    localStorage.setItem("language", lang);
    // Update the language attribute on html element
    $("html").attr("lang", lang);
    // Update button display
    updateLanguageDisplay(lang);
    // Reload page content or update DOM elements
    reloadPageWithLanguage(lang);
  }
};

// Toggle language between English and Chinese
let toggleLanguage = () => {
  const current_lang = determineLanguageSetting();
  const new_lang = current_lang === "en" ? "zh" : "en";
  setLanguage(new_lang);
};

// Update language button display
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

// Reload page with new language
let reloadPageWithLanguage = (lang) => {
  // Store the language and reload
  window.location.reload();
};

// Initialize language on page load
$(document).ready(function () {
  const current_lang = determineLanguageSetting();
  $("html").attr("lang", current_lang);
  
  // Set initial button state
  updateLanguageDisplay(current_lang);
  
  // Bind click handler
  $("#language-toggle").on("click", toggleLanguage);
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    determineLanguageSetting,
    setLanguage,
    toggleLanguage,
    updateLanguageDisplay
  };
}
