/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import App from './views/App.vue';
import VueRouter from 'vue-router';
import router from './routes.js';
import Auth from './auth.js';
import Api from './api.js';


window.api = new Api();

window.auth = new Auth;

window.Event = new Vue;


require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('vue-layout', require('./components/Layout.vue').default);
Vue.component('tk', require('./components/TK.vue').default)
Vue.component('tk-list', require('./views/TKList').default)
Vue.component('admin', require('./components/Admin.vue').default)

import store from '../js/store'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
