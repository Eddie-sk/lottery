"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      inputUser: "",
      lotteryUsers: "",
      users: [],
      history: [],
      current: [],
      lotteryCount: 1
    };
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
      console.log("\u70B9\u51FB\u62BD\u5956\u6309\u94AE");
      if (this.inputUser.length <= 0) {
        alert("\u8BF7\u8F93\u5165\u62BD\u5956\u540D\u5355");
        return;
      }
      var _users = this.inputUser.split("\n").filter((e) => e.length > 0);
      if (_users.length < this.lotteryCount) {
        alert("\u62BD\u5956\u4EBA\u6570\u4E0D\u53EF\u5927\u4E8E\u62BD\u5956\u540D\u5355\u4EBA\u6570");
        return;
      }
      console.log("\u62BD\u5956\u540D\u5355\uFF1A", _users, this.lotteryCount);
      var count = this.lotteryCount;
      var items = this.getRandomArrayElements(_users, count);
      console.log("\u62BD\u4E2D\u540D\u5355\uFF1A", items);
      _users = _users.filter((e) => items.indexOf(e) == -1);
      this.$data.users = _users;
      this.$data.current = items;
      this.$data.inputUser = _users.join("\n");
      var _lotteryUser = items.join("\n");
      console.log("\u62BD\u4E2D\u540D\u5355\uFF1A", _lotteryUser);
      this.$data.lotteryUsers = _lotteryUser;
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
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.unlotterCount),
    b: $data.inputUser,
    c: common_vendor.o(($event) => $data.inputUser = $event.detail.value),
    d: $data.lotteryCount,
    e: common_vendor.o(($event) => $data.lotteryCount = $event.detail.value),
    f: common_vendor.o((...args) => $options.lotteryEvent && $options.lotteryEvent(...args)),
    g: common_vendor.t($options.winnersCount),
    h: $data.lotteryUsers,
    i: common_vendor.o(($event) => $data.lotteryUsers = $event.detail.value)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/eddie/study/Vue/projects/lottery1/pages/lottery/lottery.vue"]]);
wx.createPage(MiniProgramPage);
