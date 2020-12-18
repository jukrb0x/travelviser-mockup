const routes = [{
        path: "/",
        redirect: '/Auth',
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "Home",
            component: () =>
                import ("pages/Index.vue")
        }]
    },
    {
        path: "/Auth",
        component: () =>
            import ("layouts/AuthLayout.vue"),
        children: [{
                path: "",
                component: () =>
                    import ("pages/Auth.vue")
            },
            {
                path: "/Login",
                component: () =>
                    import ("pages/Login.vue")
            },
            {
                path: "/Register",
                component: () =>
                    import ("pages/Register.vue")
            },

        ]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: "*",
        component: () =>
            import ("pages/Error404.vue")
    }
];

export default routes;