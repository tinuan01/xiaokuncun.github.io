"use strict";
const common_vendor = require("../common/vendor.js");
const api_apis = require("../api/apis.js");
const _sfc_main = {
  name: "titles",
  data() {
    return {
      top: 0,
      tops: 85,
      isLast: false,
      weatherData: {
        // "weatherName": "雷阵雨",
        // "cityName": "杭州",
        // "temperature": "29"
      },
      cityNameList: [
        ["嘉兴市", "宁波市", "杭州市", "长沙市"]
      ]
    };
  },
  created() {
    this.getTopWeiXin();
    this.getLast();
  },
  // title_name标题名称  	isReturn是否显示返回按钮   returnColor返回按钮颜色    color标题颜色    bgc背景色    
  props: {
    title_name: {
      type: String,
      default: ""
    },
    isReturn: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#FFFFFF"
    },
    bgc: {
      type: String,
      default: "#FFA621"
    },
    returnColor: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 返回的箭头
    returns() {
      if (this.isLast) {
        common_vendor.index.switchTab({
          url: "/pages/index/index"
          //返回首页
        });
      } else {
        common_vendor.index.navigateBack({
          delta: 1
          //返回上一页
        });
      }
    },
    // 获取小程序安全区域的高度
    getTopWeiXin() {
      this.top = parseInt(common_vendor.index.getSystemInfoSync().safeAreaInsets.top * 750 / common_vendor.index.getSystemInfoSync().windowWidth);
      common_vendor.index.setStorageSync("top", this.top);
    },
    // 获取有无上一页
    getLast() {
      let pages = getCurrentPages();
      if (pages.length == 1) {
        this.isLast = true;
      } else {
        this.isLast = false;
      }
    },
    async network(city) {
      try {
        let resWeatherNow = await api_apis.apigetWeatherNow(city);
        this.weatherData = resWeatherNow.data.data.weatherData;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    openPicker() {
      this.$refs.picker.open();
    },
    confirm(e) {
      if (e.value == "嘉兴市") {
        this.network("jiaxing");
      } else if (e.value == "宁波市") {
        this.network("ningbo");
      } else if (e.value == "杭州市") {
        this.network("hangzhou");
      } else if (e.value == "长沙市") {
        this.network("changsha");
      }
    }
  },
  mounted() {
    this.network("ningbo");
  }
};
if (!Array) {
  const _easycom_uv_picker2 = common_vendor.resolveComponent("uv-picker");
  const _component_path = common_vendor.resolveComponent("path");
  const _component_svg = common_vendor.resolveComponent("svg");
  (_easycom_uv_picker2 + _component_path + _component_svg)();
}
const _easycom_uv_picker = () => "../uni_modules/uv-picker/components/uv-picker/uv-picker.js";
if (!Math) {
  _easycom_uv_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.isReturn
  }, $props.isReturn ? {
    b: $props.returnColor ? "https://img0.baidu.com/it/u=4214833221,765701070&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260" : "https://img0.baidu.com/it/u=4214833221,765701070&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260",
    c: common_vendor.o(($event) => $options.returns())
  } : {}, {
    d: common_vendor.sr("picker", "01870d0a-0"),
    e: common_vendor.o($options.confirm),
    f: common_vendor.p({
      columns: $data.cityNameList
    }),
    g: $data.weatherData.cityName
  }, $data.weatherData.cityName ? {
    h: common_vendor.t($data.weatherData.cityName),
    i: common_vendor.p({
      d: "M42.79-33.07L42.79-33.07Q43.19-32.67 43.19-32.14L43.19-32.14L43.19-32.14Q43.19-31.62 42.79-31.22L42.79-31.22L24.07-12.50L24.07-12.50Q23.67-12.09 23.14-12.09L23.14-12.09L23.14-12.09Q22.62-12.09 22.22-12.50L22.22-12.50L3.50-31.22L3.50-31.22Q3.09-31.62 3.09-32.14L3.09-32.14L3.09-32.14Q3.09-32.67 3.50-33.07L3.50-33.07L5.50-35.08L5.50-35.08Q5.91-35.48 6.43-35.48L6.43-35.48L6.43-35.48Q6.95-35.48 7.35-35.08L7.35-35.08L23.14-19.29L38.93-35.08L38.93-35.08Q39.33-35.48 39.86-35.48L39.86-35.48L39.86-35.48Q40.38-35.48 40.78-35.08L40.78-35.08L42.79-33.07Z"
    }),
    j: common_vendor.p({
      xmlns: "http://www.w3.org/2000/svg",
      width: "40.098214285714285",
      height: "23.38392857142857",
      viewBox: "3.0937499999999996 -35.47767857142857 40.098214285714285 23.38392857142857"
    })
  } : {}, {
    k: $data.weatherData.cityName
  }, $data.weatherData.cityName ? {
    l: common_vendor.t($data.weatherData.weatherPicture),
    m: common_vendor.t($data.weatherData.weatherName),
    n: common_vendor.t($data.weatherData.temperature)
  } : {}, {
    o: common_vendor.o((...args) => $options.openPicker && $options.openPicker(...args)),
    p: common_vendor.t($props.title_name),
    q: $props.color,
    r: $props.bgc,
    s: $data.top + "rpx",
    t: $data.tops + "rpx",
    v: $data.tops + "rpx",
    w: $data.top + $data.tops + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
