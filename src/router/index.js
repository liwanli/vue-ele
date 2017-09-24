import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

const router = new Router({
	//mode:'history',
	routes: [
		{
		  path: '/',
		  name: 'Hello',
		  component: Hello
		},
		{
		  path: '*',
		  name: 'NotFoundComponent',
		  component: NotFoundComponent
		}
	]
})
console.log(router)
//输出 router
export default router;
