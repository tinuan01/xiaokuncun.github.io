"use strict";
var _a, _b;
const common_vendor = require("../../../../common/vendor.js");
const props = {
  props: {
    // 是否展示工具条
    show: {
      type: Boolean,
      default: true
    },
    // 是否显示下边框
    showBorder: {
      type: Boolean,
      default: false
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: "取消"
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: "确认"
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: "#909193"
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: "#3c9cff"
    },
    // 标题文字
    title: {
      type: String,
      default: ""
    },
    ...(_b = (_a = common_vendor.index.$uv) == null ? void 0 : _a.props) == null ? void 0 : _b.toolbar
  }
};
exports.props = props;
