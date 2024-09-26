<template>
	<view>
		<titles :title_name="'首页'"
		        :isReturn="false"
		        :returnColor="false" 
		        :color="'#000000'" 
		        :bgc="'#FFFFFF'">
		</titles>
	</view>
	
		<view class="">
			<!-- search -->
			<!--banner-->
			<view class="banner-bar">
				<view class="search-input-wrapper">
					<view class="banner-header">
						<view class="header-title">小昆新景</view>
						<view class="header-sub-title">“江南小色达”</view>
					</view>
					<text class="search-input-icon">{{'&#xe6ac;'}}</text>
					<input class="uni-input search-input" placeholder="嵊州小昆" />
				</view>
			</view>
			<swiper class="swiper" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration" :indicator-color="indicatorColor" :indicator-active-color="activeColor[topcurrent]"
				:previous-margin="leftRightMargin" :next-margin="leftRightMargin"
				@change="changeItem">
				<swiper-item v-for="(url,x) in banner" :key="x">
					<view class="banner-bar">
						<view class="banner-img-wrapper">
							<image :src="url" mode="scaleToFill" class="banner-img"></image>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<!--nav-->
			<view class="nav-bar" :class="`nav0-bg`">
				<view class="notice-bar">
					<view class="notice-bar-wrapper">
						<view class="notice-bar-left">
							<text class="notice-bar-icon">{{'&#xe600;'}}</text>
							<text class="notice-bar-text">在“江南小色达”体会岁月静好</text>
						</view>
						<text class="notice-bar-right">更多></text>
					</view>
				</view>
				<view class="nav-bar-wrapper">
					<view class="nav-bar-item" v-for="(item,index) in nav" :key="index">
						<text class="nav-bar-item-icon" :class="item.class">{{item.icon}}</text>
						<text class="nav-bar-item-text">{{item.text}}</text>
					</view>
				</view>
				<view class="nav-image-wrapper">
					<view class="nav-image-item-view" v-for="(item,index) in ruk" :key="index">
						<image :src="item.image" class="nav-image-item" mode="scaleToFill"></image>
						<view class="nav-image-content-wrapper">
							<view class="nav-image-content">
								<text class="nav-image-text">{{item.text}}</text>
								<text class="nav-image-text-sm"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!--热门研学基地-->
			<view class="line-bar">
				<view class="line-bar-wrapper">
					<view class="bar-title">
						<image src="../../static/image/index/4.webp" style="width: 50rpx;height: 50rpx;"></image>
						<view class="bar-title-left">热门景点</view>
						<text class="bar-title-right">更多景点 ></text>
					</view>
					<view class="line-bar-item-wrapper">
						<view class="line-bar-item" v-for="(item,index) in line" :key="index">
							<image :src="item.image" class="line-bar-item-image" mode="aspectFill"></image>

							<view>
								<text class="text-title">{{item.textTitle}}</text>
								<text class="text-sub-title">{{item.textSubTitle}}</text>
							</view>
							<view>
								<text class="text-time">{{item.time}}</text>							
								<uni-rate class="xinxin" :readonly="true" :value="item.value" />
							</view>
							<view class="btncontainer">
								<!-- 红色按钮 -->
								<button class="red-button" @click="handleClick">{{item.button}}</button>
							</view>
						</view>
					</view>
				</view>			
			</view>
			
			<!--参与研学得积分-->
			<view class="qu-bar">
				<view class="qu-bar-wrapper">
					<view class="bar-title">
						<image src="../../static/image/icons/博士帽.png" style="width: 50rpx;height: 50rpx;"></image>
						<view class="bar-title-left">参与研学得积分</view>
						<text class="bar-title-right">更多研学 ></text>
					</view>
					
					<view>
						<uni-segmented-control :current="bottomcurrent" @clickItem="bottomonClickItem" styleType="text" activeColor="red" inActiveColor="#797979"></uni-segmented-control>
						<view class="content" ><!-- v-for="(item,index) in bottomSwiper" :key="index" -->
							<view v-show="bottomcurrent === 0" class="Buvswiper">
								<uv-swiper circular :list="list0" height="388rpx"></uv-swiper><!-- :showTitle="item.title" :list="item.list" -->
							</view>
							<view v-show="bottomcurrent === 1" class="Buvswiper">
								<uv-swiper circular :list="list1" height="388rpx"></uv-swiper>
							</view>
							<view v-show="bottomcurrent === 2" class="Buvswiper">
								<uv-swiper circular :list="list2" height="388rpx"></uv-swiper>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
</template>

<script>
	import {
		BASE_URL
	} from '@/utils/request.js'
	export default {
		data() {
			return {
				BASE_URL:'',
				circular: true,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				indicatorColor: '#e9e9e9',
				indicatorActiveColor: 'red',
				leftRightMargin: '0rpx',
				topcurrent: 0,
				activeColor: ['#00ff00', '#00ff00','#00ff00', '#00ff00','#00ff00', '#00ff00','#00ff00', '#00ff00','#00ff00', '#00ff00'], //#a7b0e6; #e6bd79; #d49a67;
				list0: [
					"",
					"https://img2.baidu.com/it/u=2680216797,1362386158&fm=253&fmt=auto&app=138&f=JPEG?w=909&h=500",
					"https://imgcdn.yzwb.net/9096_1636729332000.png?imageMogr2/thumbnail/1080x%3E/strip/ignore-error/1%7Cimageslim",
					"https://img0.baidu.com/it/u=2911301601,3407189371&fm=253&fmt=auto&app=138&f=JPEG?w=713&h=475",
					"https://m.stdaily.com/index/kejixinwen/2021-06/25/1163423/images/b5f82957093a4af7bc13b322898ca092.jpg",
					"https://m.stdaily.com/index/kejixinwen/2021-06/26/1163796/images/01f9139d6dca445fa6888c6bd08d13fb.jpg"
					],
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
				banner:[
					"../../static/image/index/1.webp",
					"../../static/image/index/2.webp",
					"../../static/image/index/山高路远.jpg",
					"../../static/image/index/小昆村.jpg",
					"../../static/image/index/青山向日葵.jpg",
					"../../static/image/index/在城市边缘.jpg",
					"../../static/image/index/IMG_9458.JPG",
					"../../static/image/index/IMG_9483.JPG",
					"../../static/image/index/IMG_9574.JPG",
					"../../static/image/index/wait for you.jpg"
				],
				bottomSwiper: [
					{
						title: "热门！！！",
						list:"https://img.pconline.com.cn/images/upload/upc/tx/itbbs/2010/30/c8/237967412_1604043154749.jpg"
					},
					{
						image:"https://pic.quanjing.com/ka/b0/QJ9110575185.jpg@%21794ws",
						textTitle:'杭州革命烈士纪念馆',
						textSubTitle:'热血忠诚谱写｜壮丽史诗',
						button:'赢研学积分',
						value: '4',
						time: '7月11日-8月15日'	
				
					},
					{
						image:"https://img0.baidu.com/it/u=12102974725,1238358525&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800",
						textTitle:'湖南烈士公园',
						textSubTitle:'英雄永存｜8月长沙见',
						button:'铭记英雄先烈',
						value: '4',
						time: '7月30日-9月28日'	
					}
				],
				nav: [{
						icon: "\u{e853}",
						text: '小昆星宿',
						class: "nav1-color"
					},
					{
						icon: "\u{e676}",
						text: '西白云路',
						class: "nav2-color"
					},
					{
						icon: "\u{ea30}",
						text: '抱朴咖啡',
						class: "nav3-color"
					},
					{
						icon: "\u{e625}",
						text: '小昆香榧',
						class: "nav4-color"
					},
					{
						icon: "\u{1010f}",
						text: '小昆故事',
						class: "nav5-color"
					}
				],
				ruk: [{
						image: "../../static/image/index/3.webp",
						text: "抱朴咖啡"
					},
					{
						image: "../..//static/image/index/2.webp",
						text: "西白云路"
					}
				],
				line: [
					{
						image:"https://img2.baidu.com/it/u=3377274508,522902810&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
						textTitle:'南湖革命纪念馆',
						textSubTitle:'历史的印迹｜初心百年',
						button:'抽研学礼券',
						value: '5',
						time: '7月25日-8月31日'	
					},
					{
						image:"https://pic.quanjing.com/ka/b0/QJ9110575185.jpg@%21794ws",
						textTitle:'杭州革命烈士纪念馆',
						textSubTitle:'热血忠诚谱写｜壮丽史诗',
						button:'赢研学积分',
						value: '4',
						time: '7月11日-8月15日'	

					},
					{
						image:"https://img0.baidu.com/it/u=2102974725,1238358525&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800",
						textTitle:'湖南烈士公园',
						textSubTitle:'英雄永存｜8月长沙见',
						button:'铭记英雄先烈',
						value: '4',
						time: '7月30日-9月28日'	
					}
				],
				bottomcurrent: 0,
				styleType: 'text',
				bottomactiveColor: '#aa0000',
			}
		},
		methods: {
			async network() {
				
				
				
				// uni.request({
				// 	url:"http://localhost:8080/front/systemHome/getHotRedBase"
				// }).then(res=>{
				// 	console.log(res)
				// 	this.line = res.data.data.list
				// 	console.log(this.line)
				// })
			},


			changeItem(e) {
				this.topcurrent = e.detail.current;
				// 确保navLevel更新为正确的类名
				this.navLevel = `nav${e.detail.current}-bg`;
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			handleClick() {
				// 点击按钮时触发的函数
				console.log('有人浏览！');
			},
			bottomonClickItem(e) {
			if (this.bottomcurrent != e.currentIndex) {
				this.bottomcurrent = e.currentIndex;
				}
			}
		},
		mounted() {
			this.BASE_URL = BASE_URL
			this.network()
		}
		
	}
</script>

<style>
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src:url('//at.alicdn.com/t/c/font_4663124_ne5ifw4chgq.woff2?t=1724409122889') format('woff2'),
		    url('//at.alicdn.com/t/c/font_4663124_ne5ifw4chgq.woff?t=1724409122889') format('woff'),
		    url('//at.alicdn.com/t/c/font_4663124_ne5ifw4chgq.ttf?t=1724409122889') format('truetype');
		}

	page,
	view {
		border: 0;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	view,
	image,
	text {
		box-sizing: border-box;
		flex-shrink: 0;
	}

	.niceui-flex-column {
		flex-direction: column;
	}
</style>
<style lang="scss">
	$margin: 35rpx;
	$radius: 30rpx;
	$bg: rgba(255, 255, 255, 0.8);

	.swiper {
		width: 100vw;
		padding: 0rpx 0 0;
		height: 433rpx;
		box-sizing: border-box;
	}
	
	.nav1-color{
		color: #5555ff;
	}
	
	.nav2-color{
		color: #acacac;
	}
	
	.nav3-color{
		color: #aa5500;
	}
	
	.nav4-color{
		color: #ffaa00;
	}
	
	.nav5-color{
		color: #aa007f;
	}
	
	.banner-img {
		width: 100%;
		// height: 100%;
	}

	.banner-header {
		margin: 10rpx $margin 10rpx;
		flex-direction: row;
		color: #fff;
	}

	.header-title {
		font-size: 33rpx;
	}

	.header-sub-title {
		font-size: 22rpx;
		padding-top: 10rpx;
		padding-left: 20rpx;
	}

	.search-input-wrapper {
		position: absolute;
		z-index: 10;
		top: 100rpx;
		width: 100%;
	}
	

	.search-input-icon {
		position: absolute;
		z-index: 10;
		left: 55rpx;
		top: 103rpx;
		font-size: 30rpx;
		font-weight: normal;
		font-family: texticons;
		color: #aa0000;
		text-align: center;
	}

	.search-input {
		background: rgba(255, 255, 255, .7);
		color: #aa0000;
		border-radius: 50rpx;
		width: calc(100% - 70rpx);
		height: 70rpx;
		margin: 20rpx auto;
		padding-left: 60rpx;
		box-sizing: border-box;
	}

	.uni-input-placeholder {
		color: #666;
		font-size: 28rpx;
	}

	.nav0-bg {
		background-image: linear-gradient(to bottom, #00aa00, $bg);
	}

	// .nav1-bg {
	// 	background-image: linear-gradient(to bottom, #00d400, $bg);
	// }

	// .nav2-bg {
	// 	background-image: linear-gradient(to bottom, #00c200, $bg);
	// }

	// .nav3-bg {
	// 	background-image: linear-gradient(to bottom, #00c800, $bg);
	// }
	
	// .nav4-bg {
	// 	background-image: linear-gradient(to bottom, #39a432, $bg);
	// }
	
	// .nav5-bg {
	// 	background-image: linear-gradient(to bottom, #84c736, $bg);
	// }
	
	// .nav6-bg {
	// 	background-image: linear-gradient(to bottom, #87cb00, $bg);
	// }
	
	// .nav7-bg {
	// 	background-image: linear-gradient(to bottom, #77b300, $bg);
	// }

	.qu-bar,
	.line-bar {
		background-color: $bg;
		}

	.notice-bar {
		margin-top: 20rpx;
	}

	.notice-bar-wrapper {
		color: #fff;
		font-size: 28rpx;
		background: rgba(230, 230, 230, 0.15);
		border-radius: 30rpx;
		width: calc(100% - 70rpx);
		height: 65rpx;
		margin: 0rpx auto 10rpx;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5rpx 30rpx;
		box-sizing: border-box;
	}

	.notice-bar-left {
		flex-direction: row;
		align-items: center;
	}

	.notice-bar-icon {
		font-size: 30rpx;
		font-weight: normal;
		font-family: texticons;
		color: #fff;
		text-align: center;
	}

	.notice-bar-text {
		padding-left: 15rpx;
	}

	.nav-bar-wrapper {
		flex-direction: row;
		align-items: center;
		background-color: #ffffff;
		box-sizing: border-box;
		margin: 10rpx $margin 10rpx;
		border-radius: $radius;
		height: 170rpx;
	}

	.nav-bar-item {
		flex: 1;
	}

	.nav-bar-item-icon {
		font-size: 58rpx;
		font-family: texticons;
		text-align: center;
	}

	.nav-bar-item-text {
		text-align: center;
		font-size: 22rpx;
		padding-top: 18rpx;
	}

	.nav-image-wrapper {
		flex-direction: row;
		margin: 10rpx $margin 10rpx;
	}

	.nav-image-item-view {
		flex: 1;
		margin: 0rpx 0;
		border-radius: $radius;
		width: 46%;
	}

	.nav-image-item-view+.nav-image-item-view {
		margin-left: 4%;
	}

	.nav-image-item-view {
		position: relative;
	}

	.nav-image-item {
		width: 100%;
		margin: 0rpx 0;
		border-radius: $radius;
	}

	.nav-image-content-wrapper {
		position: absolute;
		z-index: 10;
		width: 100%;
		height: 100%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.nav-image-content {
		color: #fff;
		height: 100rpx;
		text-align: center;
		padding-top: 15rpx;
	}

	.nav-image-text {
		font-size: 30rpx;
		font-weight: bold;
	}

	.nav-image-text-sm {
		font-size: 26rpx;
	}

	.uni-common-mt {
		margin-top: 30px;
	}

	.uni-padding-wrap {
		// width: 750rpx;
		padding: 0px 30px;
	}

	.content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		height: 200px;
		width: 100%;
		margin-bottom: 200rpx;
		text-align: center;
	}

	.qu-bar-wrapper {
		margin: 10rpx $margin 10rpx;
	}

	.qu-bar-item {
		border-radius: $radius;
		background-color: #fff;
		margin-bottom: 35rpx;
	}

	.qu-bar-item-image {
		width: 100%;
		height: 240rpx;
		border-top-left-radius: $radius;
		border-top-right-radius: $radius;
	}

	.bar-title {
		flex-direction: row;
		background-color: lightyellow;
		justify-content: space-between;
		align-items: center;
		margin-top: 50rpx;
		margin-bottom: 25rpx;
	}

	.bar-title-left {
		font-size: 35rpx;
		font-weight: bold;
		color: #00aa00;
	}

	.bar-title-right {
		font-size: 26rpx;
		font-weight: normal;
		color: #939393;
	}

	.text-title {
		font-size: 32rpx;
		font-weight: bold;
		color: red;
		text-align: center;
		padding-left: 0rpx;
		padding-top: 10rpx;
		box-sizing: border-box;
		margin-bottom: 12rpx;
	}

	.text-sub-title {
		font-size: 28rpx;
		font-weight: normal;
		text-align: center;
		color: #868686;
		padding-left: 0rpx;
		padding-bottom: 5rpx;
		box-sizing: border-box;
	}
	

	.btncontainer {
		display: block;
	}

	/* 红色按钮样式 */
	.red-button {
		background-color: #ff962c;
		// background-color: #ff0202; /* 红色背景 */
		color: #ffffff;
		/* 白色文字 */
		border: 3px solid #ff8419;
		/* 红色边框 */
		border-radius: 10rpx;
		/* 圆角 */
		padding: 0rpx 5rpx;
		/* 内边距 */
		font-size: 16rpx;
		/* 文字大小 */
		font-weight: bold;
		/* 加粗 */
		/* 其他样式，如过渡效果等 */
		transition: background-color 0.3s;
		/* 背景颜色过渡效果 */
		width: 80%;
	}

	/* 按钮点击后的样式变化 */
	.red-button:active {
		background-color: #ff0000;
		/* 按钮按下时的背景颜色 */
	}

	.text-time {
		color: #ffb31a;
		text-align: center;
		font-size: 16rpx;
		padding-top: 10rpx;
	}

	.xinxin {
		align-self: center;
	}

	.line-bar-wrapper {
		margin: 10rpx $margin 10rpx;
	}

	.line-bar-item-wrapper {
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		overflow-x: scroll;
	}

	.line-bar-item {
		width: 500rpx;
		border-radius: $radius;
		background-color: #fff;
	}

	.line-bar-item+.line-bar-item {
		margin-left: 30rpx;
	}

	.line-bar-item-image {
		width: 100%;
		height: 260rpx;
		border-top-left-radius: $radius;
		border-top-right-radius: $radius;
	}
	
	.Buvswiper{
		padding-top: 20rpx;
		width: 100%;
		margin-bottom: 20rpx;
	}
</style>