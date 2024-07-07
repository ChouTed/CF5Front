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


async function checkAuth() {
  try {
    const response = await axios.post('http://localhost:5000/api/isAuth', {}, {
      withCredentials: true,
    });
    return response.data.isAuth; 
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false;
  }
}

router.beforeEach(async (to, from, next) => {
  if (to.path === '/tablesPage') {
    const authenticated = await checkAuth();
    if (!authenticated) {
      next({ path: '/' }); // Redirect to login page if not authenticated
    } else {
      next(); // Proceed to /tablesPage if authenticated
    }
  } else {
    next(); // Allow navigation for other routes
  }
});


new Vue({
    el: '#app',
    router,
    render: h => h(App),
}).$mount('#app')


