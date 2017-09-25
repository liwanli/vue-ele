import Vue from 'vue'
import VueRouter from 'vue-router'

import goods from '@/components/goods'
import seller from '@/components/seller'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(VueRouter)

const routes = [
		{
		  path: '/',
		  name: 'goods',
		  component: goods
		},
		{
		  path: '/goods',
		  name: 'goods',
		  component: goods
		},
		{
		  path: '/seller',
		  name: 'seller',
		  component: seller
		},
		{
		  path: '*',
		  name: 'NotFoundComponent',
		  component: NotFoundComponent
		}
	]


const router = new VueRouter({
	//mode:'history',
	routes 
})
//输出 router
export default router;
