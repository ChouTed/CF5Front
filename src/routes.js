import ForgotPassword from "./components/forgotPassword.vue";
import loginPage from "./components/loginPage.vue";

export default[
    {
        path: '/loginPage',
        component: loginPage,
        name: 'loginPage'
    },
    {
        path: '/forgotPassword',
        component: ForgotPassword,
        name: 'forgotPassword'
    }
];