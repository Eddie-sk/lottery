<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="activeicon"></slot></div>
		<div :class="{active: isActive}"><slot name="text"></slot></div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		props: {
			path: String,
		},
		data() {
			return {
				//isActive: true
			}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) != -1
			}
		},
		methods: {
			itemClick() {
				console.log('itemClick',this.path);
				this.$router.replace(this.path);
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		height: 49px;
		text-align: center;
		font-size: 14px;
	}
	.tab-bar-item item-icon {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
	.active {
		color: red;
	}
</style>