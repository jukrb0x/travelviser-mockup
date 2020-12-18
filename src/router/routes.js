const routes = [{
        path: "/",
        redirect: '/Auth',
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "Home",
            redirect: '/Main',
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
                    import ("pages/Auth/Auth.vue")
            },
            {
                path: "/Login",
                component: () =>
                    import ("pages/Auth/Login.vue")
            },
            {
                path: "/Register",
                component: () =>
                    import ("pages/Auth/Register.vue")
            },
            {
                path: "/Verify",
                component: () =>
                    import ("pages/Auth/Verify.vue")
            },

        ]
    },
    {
        path: "/Main",
        redirect: "/qrcode",
        component: () =>
            import ("layouts/HomeLayout.vue"),
        children: [{
                path: "/qrcode",
                component: () =>
                    import ("pages/Main/Qrcode.vue")
            },
            {
                path: "/maps",
                component: () =>
                    import ("pages/Main/Maps.vue")
            },
            {
                path: "/bookings",
                component: () =>
                    import ("pages/Main/Bookings.vue")
            },
            {
                path: "/profile",
                component: () =>
                    import ("pages/Main/Profile.vue")
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