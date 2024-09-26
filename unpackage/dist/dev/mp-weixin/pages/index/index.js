"use strict";
const api_apis = require("../../api/apis.js");
const utils_request = require("../../utils/request.js");
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      BASE_URL: "",
      circular: true,
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500,
      indicatorColor: "#e9e9e9",
      indicatorActiveColor: "red",
      leftRightMargin: "0rpx",
      topcurrent: 0,
      navLevel: "nav0-bg",
      activeColor: ["#2373c8", "#c6c8bd", "#ffca73", "#5d9b38", "#1d1b1b"],
      //#a7b0e6; #e6bd79; #d49a67;
      list0: [
        "https://img.pconline.com.cn/images/upload/upc/tx/itbbs/2010/30/c8/237967412_1604043154749.jpg",
        "https://img2.baidu.com/it/u=2680216797,1362386158&fm=253&fmt=auto&app=138&f=JPEG?w=909&h=500",
        "https://imgcdn.yzwb.net/9096_1636729332000.png?imageMogr2/thumbnail/1080x%3E/strip/ignore-error/1%7Cimageslim",
        "https://img0.baidu.com/it/u=2911301601,3407189371&fm=253&fmt=auto&app=138&f=JPEG?w=713&h=475",
        "https://m.stdaily.com/index/kejixinwen/2021-06/25/1163423/images/b5f82957093a4af7bc13b322898ca092.jpg",
        "https://m.stdaily.com/index/kejixinwen/2021-06/26/1163796/images/01f9139d6dca445fa6888c6bd08d13fb.jpg"
      ],
      bottomtitle01: "嘉兴红色研学基地",
      list1: [
        "https://5b0988e595225.cdn.sohucs.com/images/20191021/0cb78905abf74783adb60b1fb0a452b7.jpeg",
        "https://img0.baidu.com/it/u=1913677131,1650701602&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500",
        "https://p2.cri.cn/M00/2C/37/rBABDGC6I3mAPi6UAAAAAAAAAAA327.962x611.750x477.jpg",
        "https://wx2.sinaimg.cn/mw690/007XRSiGgy1hqrnh9u0k4j32io1w0u0x.jpg"
      ],
      list2: [
        "https://p2.itc.cn/q_70/images03/20230116/3d8834dc225c4ca696bb1c2073eb12f3.png",
        "https://img0.baidu.com/it/u=1868447761,1990727047&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=426",
        "https://imgpolitics.gmw.cn/attachement/jpg/site2/20210529/f44d305ea1af221c820240.jpg",
        "https://image.maigoo.com/upload/images/20220915/11544197613_640x426.jpg"
      ],
      banner: [
        "https://5b0988e595225.cdn.sohucs.com/images/20190808/c6d2974241184a7191fc8940c68cbcaf.jpeg",
        "https://img.pconline.com.cn/images/upload/upc/tx/itbbs/2010/30/c8/237967412_1604043154749.jpg",
        "https://img2.baidu.com/it/u=2158203887,71205797&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
        "https://img0.baidu.com/it/u=643273524,2544929052&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500"
      ],
      // bottomSwiper: [
      // 	{
      // 		title: 
      // 		list:"https://img.pconline.com.cn/images/upload/upc/tx/itbbs/2010/30/c8/237967412_1604043154749.jpg"
      // 	},
      // 	{
      // 		image:"https://pic.quanjing.com/ka/b0/QJ9110575185.jpg@%21794ws",
      // 		textTitle:'杭州革命烈士纪念馆',
      // 		textSubTitle:'热血忠诚谱写｜壮丽史诗',
      // 		button:'赢研学积分',
      // 		value: '4',
      // 		time: '7月11日-8月15日'	
      // 	},
      // 	{
      // 		image:"https://img0.baidu.com/it/u=2102974725,1238358525&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800",
      // 		textTitle:'湖南烈士公园',
      // 		textSubTitle:'英雄永存｜8月长沙见',
      // 		button:'铭记英雄先烈',
      // 		value: '4',
      // 		time: '7月30日-9月28日'	
      // 	}
      // ],
      nav: [
        {
          icon: "",
          text: "研学基地",
          class: "nav1-color"
        },
        {
          icon: "",
          text: "身份认定",
          class: "nav2-color"
        },
        {
          icon: "",
          text: "我的积分",
          class: "nav3-color"
        }
      ],
      ruk: [
        {
          image: "https://img0.baidu.com/it/u=3840926056,972488312&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500",
          text: "嘉兴南湖基地"
        },
        {
          image: "https://img2.baidu.com/it/u=2819195839,3300477911&fm=253&fmt=auto&app=138&f=JPEG?w=783&h=500",
          text: "杭州革命烈士陵园"
        }
      ],
      line: [
        // {
        // 	image:"https://img2.baidu.com/it/u=3377274508,522902810&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
        // 	textTitle:'南湖革命纪念馆',
        // 	textSubTitle:'历史的印迹｜初心百年',
        // 	button:'抽研学礼券',
        // 	value: '5',
        // 	time: '7月25日-8月31日'	
        // },
        // {
        // 	image:"https://pic.quanjing.com/ka/b0/QJ9110575185.jpg@%21794ws",
        // 	textTitle:'杭州革命烈士纪念馆',
        // 	textSubTitle:'热血忠诚谱写｜壮丽史诗',
        // 	button:'赢研学积分',
        // 	value: '4',
        // 	time: '7月11日-8月15日'	
        // },
        // {
        // 	image:"https://img0.baidu.com/it/u=2102974725,1238358525&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800",
        // 	textTitle:'湖南烈士公园',
        // 	textSubTitle:'英雄永存｜8月长沙见',
        // 	button:'铭记英雄先烈',
        // 	value: '4',
        // 	time: '7月30日-9月28日'	
        // }
      ],
      items: ["嘉兴", "杭州", "长沙"],
      bottomcurrent: 0,
      styleType: "text",
      bottomactiveColor: "#aa0000"
    };
  },
  methods: {
    async network() {
      try {
        let res = await api_apis.apiGetHotRedBase();
        this.line = res.data.data.list;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    changeItem(e) {
      this.topcurrent = e.detail.current;
      this.navLevel = `nav${e.detail.current}-bg`;
    },
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
    handleClick() {
      console.log("有人浏览！");
    },
    bottomonClickItem(e) {
      if (this.bottomcurrent != e.currentIndex) {
        this.bottomcurrent = e.currentIndex;
      }
    }
  },
  mounted() {
    this.BASE_URL = utils_request.BASE_URL;
    this.network();
  }
};
if (!Array) {
  const _component_titles = common_vendor.resolveComponent("titles");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uv_swiper2 = common_vendor.resolveComponent("uv-swiper");
  (_component_titles + _easycom_uni_rate2 + _easycom_uni_segmented_control2 + _easycom_uv_swiper2)();
}
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uv_swiper = () => "../../uni_modules/uv-swiper/components/uv-swiper/uv-swiper.js";
if (!Math) {
  (_easycom_uni_rate + _easycom_uni_segmented_control + _easycom_uv_swiper)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title_name: "首页",
      isReturn: false,
      returnColor: false,
      color: "#000000",
      bgc: "#FFFFFF"
    }),
    b: common_vendor.t(""),
    c: common_vendor.f($data.banner, (url, x, i0) => {
      return {
        a: url,
        b: x
      };
    }),
    d: $data.circular,
    e: $data.indicatorDots,
    f: $data.autoplay,
    g: $data.interval,
    h: $data.duration,
    i: $data.indicatorColor,
    j: $data.activeColor[$data.topcurrent],
    k: $data.leftRightMargin,
    l: $data.leftRightMargin,
    m: common_vendor.o((...args) => $options.changeItem && $options.changeItem(...args)),
    n: common_vendor.t(""),
    o: common_vendor.f($data.nav, (item, index, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.n(item.class),
        c: common_vendor.t(item.text),
        d: index
      };
    }),
    p: common_vendor.f($data.ruk, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.text),
        c: index
      };
    }),
    q: common_vendor.n(`nav${$data.topcurrent}-bg`),
    r: common_assets._imports_0,
    s: common_vendor.f($data.line, (item, index, i0) => {
      return {
        a: `${$data.BASE_URL}${item.image}`,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.feature),
        d: common_vendor.t(item.discountTime),
        e: "6c9265b0-1-" + i0,
        f: common_vendor.p({
          readonly: true,
          value: item.value
        }),
        g: common_vendor.t(item.discountTitle),
        h: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args), index),
        i: index
      };
    }),
    t: common_assets._imports_1,
    v: common_vendor.o($options.bottomonClickItem),
    w: common_vendor.p({
      current: $data.bottomcurrent,
      values: $data.items,
      styleType: "text",
      activeColor: "red",
      inActiveColor: "#797979"
    }),
    x: common_vendor.p({
      circular: true,
      list: $data.list0,
      showTitle: $data.bottomtitle01,
      height: "388rpx"
    }),
    y: $data.bottomcurrent === 0,
    z: common_vendor.p({
      circular: true,
      list: $data.list1,
      height: "388rpx"
    }),
    A: $data.bottomcurrent === 1,
    B: common_vendor.p({
      circular: true,
      showTitle: _ctx.titles,
      list: $data.list2,
      height: "388rpx"
    }),
    C: $data.bottomcurrent === 2
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
