<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive" class="img-wrapper"><slot name="item-icon"></slot></div>
		<div v-else class="img-wrapper"><slot name="item-icon-active"></slot></div>
		<div :style="activStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		props: {
			path: String,
			activeColor: {
				type: String,
				default: '#1296db'
			}
		},
		data() {
			return {
				//isActive: true
			}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) != -1
			},
			activStyle() {
				return this.isActive ? {color: this.activeColor} : {}
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
		text-align: center;
		flex: 1;
		height: 49px;
		font-size: 14px;
	}
	.img-wrapper {
		display: inline-block;
		text-align: center;
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
</style>