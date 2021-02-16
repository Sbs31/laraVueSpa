import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        component: require('./views/Home.vue').default
    },
    {
        path: '/About',
        component: require('./views/About.vue').default
    },
    {
        path: '/login',
        component: require('./views/login.vue').default,
        meta: { userLoggedIn: true }
    },
    {
        path: '/Signup',
        component: require('./views/Signup.vue').default,
        meta: { userLoggedIn: true }
    },
    {
        path: '/TKView',
        component: require('./views/TKList.vue').default
    },
    {
        path: '/Contact',
        component: require('./views/Contact.vue').default
    },
    {
        path: '/TKList',
        component: require('./views/TKList.vue').default,
        meta: { middlewareAuth: true }
    },    
    {
        path: '/NewTK',
        component: require('./views/NewTK.vue').default,
        meta: { middlewareAuth: true }
    },
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.middlewareAuth)) {                
        if (!auth.check()) {
            next({
                path: '/login',
            });

            return;
        }
    }
      else if (to.matched.some(record => record.meta.userLoggedIn)) {                
        if (auth.check()) {
            next({
                path: '/',
            });

            return;
        }
    }
    next();
})

export default router;