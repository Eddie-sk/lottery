import { createRouter, createWebHistory } from 'vue-router'

const Lottery = () => import('../pages/lottery/lottery')
const Transport = () => import('../pages/transport/transport')

const routes = [
	{
		path: '/lottery',
		component: Lottery
	},
	{
		path: '/transport',
		component: Transport
	}
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})