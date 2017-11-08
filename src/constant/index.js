
//登录拦截
router.beforeEach((to, from, next) => {

    // console.log(to.fullPath)

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (true) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})
