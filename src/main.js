import Vue from 'vue'
import store from './store'
import App from './App'
// 引入路由及组件
import router from './router'

// 引入公共css
import '../static/css/reset.css'
import './public/stylus/_base.styl'
import './public/stylus/_font.styl'

// 引入公共js
import './public/js/flexible.js'
import fastclick from 'fastclick'

//使用配置
Vue.config.productionTip = false
//开启debug模式
Vue.config.debug = true;


fastclick.attach(document.body);

// filters 自定义过滤器
import filters from './public/js/filters';

Object.keys(filters).forEach(function(k) {
    Vue.filter(k, filters[k]);
});



/* eslint-disable no-new */
new Vue({
	el: '#app',  //vue1.0的写法
	store,
	router,
	template: '<App/>',
	// components: { App }   //vue1.0的写法
	render: h => h(App) //vue2.0的写法
}).$mount('#app') //vue2.0的写法