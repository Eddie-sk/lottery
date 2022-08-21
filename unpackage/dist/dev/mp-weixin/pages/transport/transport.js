"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      input_num: "",
      result: ""
    };
  },
  directives: {
    inputFilter: common_vendor._build.inputFilter
  },
  methods: {
    digitUppercase() {
      var money = this.input_num;
      var cnNums = new Array("\u96F6", "\u58F9", "\u8D30", "\u53C1", "\u8086", "\u4F0D", "\u9646", "\u67D2", "\u634C", "\u7396");
      var cnIntRadice = new Array("", "\u62FE", "\u4F70", "\u4EDF");
      var cnIntUnits = new Array("", "\u4E07", "\u4EBF", "\u5146");
      var cnDecUnits = new Array("\u89D2", "\u5206", "\u6BEB", "\u5398");
      var cnInteger = "\u6574";
      var cnIntLast = "\u5143";
      var maxNum = 1e15;
      var integerNum;
      var decimalNum;
      var chineseStr = "";
      if (money == "") {
        return "";
      }
      money = parseFloat(money);
      if (money >= maxNum) {
        return "\u8D85\u51FA\u6700\u5927\u5904\u7406\u6570\u5B57";
      }
      if (money == 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
      }
      money = Math.round(money * 100).toString();
      integerNum = money.substr(0, money.length - 2);
      decimalNum = money.substr(money.length - 2);
      if (parseInt(integerNum, 10) > 0) {
        var zeroCount = 0;
        var intLen = integerNum.length;
        for (var i = 0; i < intLen; i++) {
          var n = integerNum.substr(i, 1);
          var p = intLen - i - 1;
          var q = p / 4;
          var m = p % 4;
          if (n == "0") {
            zeroCount++;
          } else {
            if (zeroCount > 0) {
              chineseStr += cnNums[0];
            }
            zeroCount = 0;
            chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
          }
          if (m == 0 && zeroCount < 4) {
            chineseStr += cnIntUnits[q];
          }
        }
        chineseStr += cnIntLast;
      }
      if (decimalNum != "") {
        var decLen = decimalNum.length;
        for (var i = 0; i < decLen; i++) {
          var n = decimalNum.substr(i, 1);
          if (n != "0") {
            chineseStr += cnNums[Number(n)] + cnDecUnits[i];
          }
        }
      }
      if (chineseStr == "") {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
      } else if (decimalNum == "" || /^0*$/.test(decimalNum)) {
        chineseStr += cnInteger;
      }
      return chineseStr;
    },
    transport() {
      console.log("\u5F00\u59CB\u8F6C\u6362");
      if (this.input_num.length <= 0) {
        alert("\u8BF7\u8F93\u5165\u9700\u8981\u8F6C\u6362\u7684\u6570\u5B57");
        return;
      }
      Number(this.input_num);
      var value = this.digitUppercase();
      this.$data.result = value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.input_num,
    b: common_vendor.o(($event) => $data.input_num = $event.detail.value),
    c: common_vendor.o((...args) => $options.transport && $options.transport(...args)),
    d: $data.result,
    e: common_vendor.o(($event) => $data.result = $event.detail.value)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/eddie/study/Vue/projects/lottery1/pages/transport/transport.vue"]]);
wx.createPage(MiniProgramPage);
