import { createRouter, createWebHistory } from 'vue-router'

const Lottery = () => import('../pages/lottery/lottery')
const Transport = () => import('../pages/transport/transport')

const routes = [
	{
		path: '',
		redirect: '/lottery'
	},
	{
		path: '/lottery',
		component: Lottery
	},
	{
		path: '/transport',
		component: Transport
	}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history'
})

export { router }