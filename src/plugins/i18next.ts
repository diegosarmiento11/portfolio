import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import ENGLISH from "../lang/en_US.json";
import ESPANOL from "../lang/es_ES.json";


const resources = {
	en: {
		translation: ENGLISH
	},
	es: {
		translation: ESPANOL
	},
}

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources,
		debug: true,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: true,
		},
	});


export default i18n;