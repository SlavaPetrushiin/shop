import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './../../../../public/locales/en/translation.json';
import translationRU from './../../../../public/locales/ru/translation.json';

import mainEN from './../../../../public/locales/en/main.json';
import mainRU from './../../../../public/locales/ru/main.json';

const resources = {
    ru: {
        translation: translationRU,
        main: mainRU
    },
    en: {
        translation: translationEN,
        main: mainEN
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: __IS_DEV__ ? true : false,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;