import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth
    },
    plugins: [createPersistedState()]
})
