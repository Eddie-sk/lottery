<template>
	<div>
		<tab-bar>
			<tab-bar-item>
				<img slot="item-icon" src="../../assets/images/ic_tab_lottery_normal.png" alt="">
				<img slot="item-icon-active" src="../../assets/images/ic_tab_lottery_selected.png" alt="">
				<div slot="item-text" >抽签</div>
			</tab-bar-item>
			<tab-bar-item>
				<img slot="item-icon" src="../../assets/images/ic_tab_money_money.png" alt="">
				<img slot="item-icon-active" src="../../assets/images/ic_tab_money_selected.png" alt="">
				<div slot="item-text" >金额转换</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from '../../components/tabbar/TabBar'
	import TabBarItem from '../../components/tabbar/TabBarItem.vue'
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
	
</style>
