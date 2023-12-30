import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	primaryLocale: "en", // default app locale
	secondaryLocales: ["es"], // other supported locales
	fallbackLocale: "en", // fallback locale (on missing translation)
	trailingSlash: "never", // "never" or "always"
	run: "client+server", // "client+server" or "server"
	showPrimaryLocale: false, // "/en/about" vs "/about"
	translationLoadingRules: [], // per page group loading
	translationDirectory: {}, // translation directory names
	translations: {
		'common': {
			'en': {
				"title": "The title in English!"
			},
			'es': {
				"title": "¡El título en español!"
			}
		}
	}, // { [translation_group1]: { [locale1]: {}, ... } }
	routes: {}, // { [secondary_locale1]: { about: "about-translated", ... } }
})