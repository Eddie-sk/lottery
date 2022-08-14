<template>
	<div>
		<router-view></router-view>
		<tab-bar>
			<tab-bar-item path="/lottery">
				<div><img slot="icon" src="../../assets/images/ic_tab_lottery_normal.png"></div>
				<div><img slot="activeicon" src="../../assets/images/ic_tab_lottery_selected.png"></div>
				<div><div slot="text" >抽签</div></div>
			</tab-bar-item>
			<tab-bar-item path="/transport">
				<div><img slot="icon" src="../../assets/images/ic_tab_money_money.png"></div>
				<div><img slot="activeicon" src="../../assets/images/ic_tab_money_selected.png"></div>
				<div slot="text" >金额转换</div>
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
				title: '爱抽签'
			}
		},
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
	
</style>
