import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import axios from 'axios';
axios.defaults.withCredentials = true;



import routes from './routes';

Vue.use(VueRouter);
Vue.use(ElementUI, { locale });
Vue.use(Vuex);

const router = new VueRouter ({
    routes: routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App),
}).$mount('#app')


