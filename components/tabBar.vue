<template>
    <div id="tab-bar">
		<div class="tab-bar-item">
			抽签
		</div>
		<div class="tab-bar-item">
			金额转换
		</div>
    </div>
</template>

<script>
  export default {
    props: {
        current: { type: [Number, String], default: 0 },
        // 背景颜色
        bgcolor: { type: String, default: '#fff' },
        // 颜色
        color: { type: String, default: '#999' },
        // 点击后颜色
        activeColor: { type: String, default: '#22d59c' },
        // 是否固定
        fixed: { type: [Boolean, String], default: false },
        // tab选项
        tabs: {
            type: Array,
            default: () => null
        }
    },
    data() {
      return {
          currentTabIndex: this.current
      }
    },
    created() {
        const _pagePath = this.$route.path
        this.tabs.map((val, index) => {
            if(val.pagePath == _pagePath) {
                this.currentTabIndex = index
            }
        })
    },
    methods: {
        switchTabs(index, item) {
            this.currentTabIndex = index
            this.$emit('click', index)
            if(item.pagePath) {
                this.$router.push(item.pagePath)
            }
        }
    },
  }
</script>

<style>
	#tab-bar {
		display: flex;
		background-color: #f6f6f6;
		position: flexed;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.tab-bar-item {
		height: 49px;
		text-align: center;
	}
</style>