import loginPage from "./components/loginPage.vue";
import tablesPage from "./components/tablesPage.vue";


export default[
    {
        path: '/',
        component: loginPage,
        name: 'loginPage'
    },
    {
        path: '/loginPage',
        component: loginPage,
        name: 'loginPage'
    },
    {
        path: '/tablesPage',
        component: tablesPage,
        name: 'tablesPage'
        
    }
];