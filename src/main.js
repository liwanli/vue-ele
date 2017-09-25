// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import store from './store'
import App from './App'
// 引入路由及组件
import router from './router'

// 引入公共css
import '../static/css/reset.css'
// import VueResource from 'vue-resource'

// Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // store,
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
