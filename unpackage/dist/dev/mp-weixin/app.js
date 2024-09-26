"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/yan/yan.js";
  "./pages/my/my.js";
}
const _sfc_main = {
  onLaunch: function() {
  }
};
const titles = () => "./components/custom-title.js";
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.component("titles", titles);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
