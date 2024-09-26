"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "UniSegmentedControl",
  emits: ["clickItem"],
  props: {
    current: {
      type: Number,
      default: 0
    },
    values: {
      type: Array,
      default() {
        return [];
      }
    },
    activeColor: {
      type: String,
      default: "#2979FF"
    },
    inActiveColor: {
      type: String,
      default: "#7a7a7a"
    },
    styleType: {
      type: String,
      default: "button"
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    current(val) {
      if (val !== this.currentIndex) {
        this.currentIndex = val;
      }
    }
  },
  computed: {},
  created() {
    this.currentIndex = this.current;
  },
  methods: {
    _onClick(index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index;
        this.$emit("clickItem", {
          currentIndex: index
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.values, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index === $data.currentIndex && $props.styleType === "text" ? "red" : $props.inActiveColor,
        c: index === $data.currentIndex && $props.styleType === "text" ? "bold" : "normal",
        d: common_vendor.n($props.styleType === "text" && index === $data.currentIndex ? "segmented-control__item--text" : ""),
        e: common_vendor.n(index === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : ""),
        f: common_vendor.n(index === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""),
        g: index,
        h: index === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : $props.styleType === "button" ? $props.inActiveColor : "transparent",
        i: index === $data.currentIndex && $props.styleType === "text" || $props.styleType === "button" ? $props.activeColor : $props.inActiveColor,
        j: common_vendor.o(($event) => $options._onClick(index), index)
      };
    }),
    b: common_vendor.n($props.styleType === "text" ? "" : "segmented-control__item--button"),
    c: common_vendor.n($props.styleType === "text" ? "segmented-control--text" : "segmented-control--button"),
    d: $props.styleType === "text" ? "" : $props.activeColor
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-86aa1171"]]);
wx.createComponent(Component);
