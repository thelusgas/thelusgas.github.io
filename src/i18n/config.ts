import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import pt from './translations/pt.json';

const resources = {
  en,
  pt,
};

void i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en',
  });
