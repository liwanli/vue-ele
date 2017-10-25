import Vue from 'vue'
import store from './store'
import App from './App'
// 引入路由及组件
import router from './router'

// 引入公共css
import '../static/css/reset.css'


Vue.config.productionTip = false

//开启debug模式
Vue.config.debug = true;

var fastclick = require('./common/js/fastclick');

console.log(fastclick)

// filters 自定义过滤器
var filters = require('./common/js/filters');

// fastclick.attach(document.body);



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


/* eslint-disable no-new */
new Vue({
        // el: '#app'  //vue1.0的写法
        //store,
        router,
        template: '<App/>',
        //components: { App }   //vue1.0的写法
        render: h => h(App) //vue2.0的写法
    }).$mount('#app') //vue2.0的写法