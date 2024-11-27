/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["en", "pl", "ru", "de", "zh-Hant", "zh-Hans", "fa"],
        localeDetection: false,
    },
    fallbackLng: "en",
    keySeparator: false,
};
