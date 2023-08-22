import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector  from "i18next-browser-languagedetector";
import Arabic from "./locale/ar.json"
import English from "./locale/en.json"


const resources = {
  en: {
    translation: English
  },
  ar: {
    translation: Arabic
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ar",

    interpolation: {
      escapeValue: false 
    },react:{
        useSuspense: false
    }
  });

  export default i18n;