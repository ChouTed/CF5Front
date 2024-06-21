import loginPage from "./components/loginPage.vue";
import tablesPage from "./components/tablesPage.vue";
import tableStatus from "./components/tableStatus.vue";
import orderPage from "./components/orderPage.vue";


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
    },
    {
        path: '/tableStatus',
        component: tableStatus,
        name: 'tableStatus'
    },
    {
        path: '/orderPage',
        component: orderPage,
        name: 'orderPage'
    }
];