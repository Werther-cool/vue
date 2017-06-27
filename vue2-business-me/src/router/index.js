import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import IndexPage from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			component: IndexPage
		},
  ]
})
