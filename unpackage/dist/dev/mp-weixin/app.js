"use strict";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/lottery/lottery.js";
  "./pages/transport/transport.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/eddie/study/Vue/projects/lottery1/App.vue"]]);
const app = common_vendor.createApp(App);
app.mount("#app");
