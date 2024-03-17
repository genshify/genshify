import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: "en",
    
    debug: true,
    lng: "en",
    backend: {
      // Path to load localization data from.
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

