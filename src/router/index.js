import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


//使用路由服务
Vue.use(VueRouter)
Vue.use(VueResource);

const routes = [
		{
			path: '/',
			// redirect: '/goods',
		  component: resolve => require(['@/components/goods/goods.vue'],resolve)
		},
		{
		  path: '/goods',
		  name: 'goods',
		  component: resolve => require(['@/components/goods/goods.vue'],resolve),
		  children: [
				{
					path: '/bar',
					name: 'bar',
		  		component: resolve => require(['@/components/bar.vue'],resolve),
				}
		  ],
		  meta: { requiresAuth: false }
		},
		{
		  path: '/seller',
		  name: 'seller',
		  component: resolve => require(['@/components/seller/seller.vue'],resolve),
		  meta: { requiresAuth: true }
		},
		{
		  path: '*',
		  name: 'NotFoundComponent',
		  component: resolve => require(['@/components/NotFoundComponent.vue'],resolve),
		  meta: { requiresAuth: false }
		}
]


const router = new VueRouter({
	//mode:'history',
	base: __dirname,
	routes
})
//输出 router
export default router;
