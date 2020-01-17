import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import App from './App.vue'


const CustomElement = wrap(Vue, App);
Vue.config.productionTip = false;

window.customElements.define('vue-widget', CustomElement);
