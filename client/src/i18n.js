import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar", "fr"],
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"],
      default: "en",
    },
    backend: { loadPath: "/assets/locales/{{lng}}.json" },
  });

export default i18n;
