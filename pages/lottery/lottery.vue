<template>
	<div>
		<h2>抽奖名单（待抽奖：{{unlotterCount}}人）</h2>
		<div style="background-color: antiquewhite;" class="textArea">
			<div>请在这里输入抽奖名单，每个抽奖者用换行隔开：</div>
			<textarea v-model="inputUser"></textarea> 
		</div>
		
		<h4>本轮抽奖人数：</h4>
		<input type="text" class="lottery-count" style="background-color: aqua;" v-model="lotteryCount">
		<div class="lottery-btn">
			<button style="width: 100px;" @click="lotteryEvent">抽奖</button>
		</div>
		<h2>中奖名单(已中奖：{{winnersCount}}人)</h2>
		<div class="winner-area" style="background-color: aquamarine;">
			<div>这里显示中奖用户：</div>
			<textarea v-model="lotteryUsers" disabled></textarea>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 输入的用户名
				inputUser: '',
				// 抽中的人员
				lotteryUsers: '',
				// 记录总的人数
				users: [], 
				// 记录已经抽中人数
				history: [], 
				// 记录当前抽中人数
				current: [],
				// 本轮抽奖人数
				lotteryCount: 1
			}
		},
		computed: {
			unlotterCount() {
				return this.users.length;
			},
			winnersCount() {
				return this.current.length;
			}
		},
		methods: {
			lotteryEvent() {
				console.log('点击抽奖按钮')
				if (this.inputUser.length <= 0) {
					alert('请输入抽奖名单')
					return
				}
				var _users = this.inputUser.split('\n').filter(e => e.length > 0);
				if (_users.length < this.lotteryCount) {
					alert('抽奖人数不可大于抽奖名单人数');
					return;
				}
				console.log('抽奖名单：',_users, this.lotteryCount)
				var count = this.lotteryCount;
				var items = this.getRandomArrayElements(_users, count);
				console.log('抽中名单：', items)
				_users = _users.filter(e => items.indexOf(e) == -1);
				this.$data.users = _users;
				this.$data.current = items;
				this.$data.inputUser = _users.join('\n')
				var _lotteryUser = items.join('\n')
				console.log('抽中名单：', _lotteryUser)
				this.$data.lotteryUsers = _lotteryUser
			},
			getRandomArrayElements(arr, count) {
			    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
			    while (i-- > min) {
			        index = Math.floor((i + 1) * Math.random());
			        temp = shuffled[index];
			        shuffled[index] = shuffled[i];
			        shuffled[i] = temp;
			    }
			    return shuffled.slice(min);
			}
		}
	}
</script>

<style>

</style>
