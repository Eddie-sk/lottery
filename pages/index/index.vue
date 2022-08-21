<template>
	<div>
		<router-view></router-view>
		<tab-bar>
			<tab-bar-item path="/lottery">
				<template v-slot:item-icon>
					<img src="../../assets/images/ic_tab_lottery_normal.png" style="width: 100%;">
				</template>
				<template v-slot:item-icon-active>
					<img src="../../assets/images/ic_tab_lottery_selected.png" style="width: 100%;">
				</template>
				<template v-slot:item-text>
					<div>抽签</div>
				</template>
			</tab-bar-item>
			<tab-bar-item path="/transport">
				<template v-slot:item-icon>
					<img src="../../assets/images/ic_tab_money_money.png" style="width: 100%;">
				</template>
				<template v-slot:item-icon-active>
					<img src="../../assets/images/ic_tab_money_selected.png" style="width: 100%;"> 
				</template>
				<template v-slot:item-text>
					<div>金额转换</div>
				</template>
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
		},
		// methods: {
		// 	lottery() {
		// 		this.$router.push('../lottery/lottery')
		// 	},
		// 	transport() {
		// 		this.$router.push('../transport/transport')
		// 	}
		// }
	}
</script>

<style>
	
</style>
