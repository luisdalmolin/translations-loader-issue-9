
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueI18n from 'vue-i18n';
import languageBundle from '@kirschbaum-development/laravel-translations-loader/php?parameters={{ $1 }}!@kirschbaum-development/laravel-translations-loader';

Vue.use(VueI18n);

const fallbackLocale = 'en';

const i18n = new VueI18n({
    fallbackLocale,
    locale: 'en',
    messages: languageBundle
});

console.log(languageBundle);
