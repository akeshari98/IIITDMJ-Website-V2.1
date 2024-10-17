import React, { useEffect, useState } from "react";

const TranslateButton = () => {
  const [showTranslate, setShowTranslate] = useState(false);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
      
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Set default language
            includedLanguages: "en,hi,fr,es", // Add languages you want to support
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          "google_translate_element"
        );
      };
    };

    if (showTranslate) {
      addGoogleTranslateScript();
    }
  }, [showTranslate]);

  return (
    <div>
      <button
        onClick={() => setShowTranslate(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Translate
      </button>
      {showTranslate && <div id="google_translate_element"></div>}
    </div>
  );
};

export default TranslateButton;
