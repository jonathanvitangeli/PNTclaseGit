import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';
import Personajes from '../views/PersonajesView.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

const routes = [{
        path: '',
        name: 'Home',
        component: Home,
    },
    {
        path: '/',
        name: 'Menu',
        component: Menu,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/footer',
        name: 'Footer',
        component: Footer,
    },
    {
        path: '/personajes',
        name: 'Personajes',
        component: Personajes,
    },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;