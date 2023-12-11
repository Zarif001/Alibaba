import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateRu from './translations/rus/ru.json'
import translateUz from './translations/uz/uz.json'

i18n
  .use(initReactI18next)
  .init({
    resources:{
      ru:{
        content: translateRu.content
      },
      uz:{
        content: translateUz.content
      },
    },
    fallbackLng: 'ru',
    interpolation:{
      escapeValue: false,
    },
  });
  
export default i18n