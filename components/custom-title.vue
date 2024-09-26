<template>
	<view class="title">
		<view class="title-title" :style="{
				'color' : color, 
				'background-color' : bgc,
				'padding-top' : top+'rpx', 
				'height' : tops+'rpx',
				'line-height' : tops+'rpx'
			}">
			<view v-if="isReturn" class="title-return" @click="returns()">
				<image
					:src="returnColor?'https://img0.baidu.com/it/u=4214833221,765701070&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260':'https://img0.baidu.com/it/u=4214833221,765701070&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260'">
				</image>
			</view>


			<view class="title-weather" @click="openPicker">
				<uv-picker ref="picker" :columns="[cityNameList]" @confirm="confirm"></uv-picker>
				<view class="name" v-if="weatherData.cityName">
					{{ weatherData.cityName }}市
					<svg xmlns="http://www.w3.org/2000/svg" width="40.098214285714285" height="23.38392857142857"
						viewBox="3.0937499999999996 -35.47767857142857 40.098214285714285 23.38392857142857">
						<path
							d="M42.79-33.07L42.79-33.07Q43.19-32.67 43.19-32.14L43.19-32.14L43.19-32.14Q43.19-31.62 42.79-31.22L42.79-31.22L24.07-12.50L24.07-12.50Q23.67-12.09 23.14-12.09L23.14-12.09L23.14-12.09Q22.62-12.09 22.22-12.50L22.22-12.50L3.50-31.22L3.50-31.22Q3.09-31.62 3.09-32.14L3.09-32.14L3.09-32.14Q3.09-32.67 3.50-33.07L3.50-33.07L5.50-35.08L5.50-35.08Q5.91-35.48 6.43-35.48L6.43-35.48L6.43-35.48Q6.95-35.48 7.35-35.08L7.35-35.08L23.14-19.29L38.93-35.08L38.93-35.08Q39.33-35.48 39.86-35.48L39.86-35.48L39.86-35.48Q40.38-35.48 40.78-35.08L40.78-35.08L42.79-33.07Z" />
					</svg>
				</view>

				<view class="info" v-if="weatherData.cityName"><image :src="`${BASE_URL}${weatherData.weatherImage}`" class="weatherImage"></image>
					{{ weatherData.weatherName }}
					{{ weatherData.temperature }}℃
				</view>
			</view>

			<view class="title-name">{{title_name}}</view>
		</view>
		<view :style="{height: top+tops+'rpx'}"></view>
	</view>
</template>

<script>
	import {
		apigetWeatherNow,
		apiGetWeatherCityList
	} from '@/api/apis.js'
	import {
		BASE_URL
	} from '@/utils/request.js'
	export default {

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
					// ['嘉兴市', '宁波市', '杭州市', '长沙市']
				],
				// 天气城市API返回的数据存储变量
				cityWeatherApiList: []
			};
		},
		created() {
			this.getTopWeiXin()
			this.getLast()
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
			},
		},

		methods: {
			// 返回的箭头
			returns() {
				if (this.isLast) {
					uni.switchTab({
						url: '/pages/index/index' //返回首页
					})
				} else {
					uni.navigateBack({
						delta: 1 //返回上一页
					});
				}
			},
			// 获取小程序安全区域的高度
			getTopWeiXin() {
				this.top = parseInt(uni.getSystemInfoSync().safeAreaInsets.top * 750 / uni.getSystemInfoSync().windowWidth)
				uni.setStorageSync('top', this.top);
			},
			// 获取有无上一页
			getLast() {
				let pages = getCurrentPages(); //当前页
				if (pages.length == 1) {
					this.isLast = true
				} else {
					this.isLast = false
				}
			},

			async network(city) {
				try {
					// 获取天气
					let resWeatherNow = await apigetWeatherNow(city)
					this.weatherData = resWeatherNow.data.data.weatherData
					
					// 获取所有的天气城市列表
					let resWeatherCityList = await apiGetWeatherCityList()
					// console.log(resWeatherCityList)
					// console.log(resWeatherCityList.data.data.list);
					/* 全局this.cityWeatherApiList后面用到 */
					this.cityWeatherApiList = resWeatherCityList.data.data.list;
					this.cityNameList = this.cityWeatherApiList.map(item => item.name);
					// console.log("提取所有的 cityname 字段")
					// console.log(this.cityNameList)
					
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			},

			openPicker() {
				this.$refs.picker.open();
			},
			
			confirm(e) {
				/* console.log('confirm', e.value);
				if (e.value == "嘉兴市") {
					this.network("jiaxing")
				} else if (e.value == "宁波市") {
					this.network("ningbo")
				} else if (e.value == "杭州市") {
					this.network("hangzhou")
				} else if (e.value == "长沙市") {
					this.network("changsha")
				} */
				
				console.log(this.cityWeatherApiList)
				
				// 循环遍历数组
				for (let item of this.cityWeatherApiList) {
					if (item.name == e.value) {
						this.network(item.englishName);
						break;
					}
				}
			}

		},
		mounted() {
			this.network("ningbo")
			this.BASE_URL = BASE_URL
		}
	}
</script>

<style lang="scss">
	.title {
		.title-title {
			position: fixed;
			z-index: 999;
			width: 750rpx;
			display: flex;
			justify-content: center;
			text-align: center;

			.title-return {
				width: 60rpx;
				height: 80rpx;
				margin: 15rpx 0 0 20rpx;
				position: absolute;
				z-index: 999;
				left: 0rpx;

				image {
					width: 50rpx;
					height: 50rpx;
				}
			}

			.title-name {
				width: 500rpx;
				text-align: center;
				font-weight: bold;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				word-break: break-all;
			}

			.title-weather {
				// width: 100rpx;
				height: 80rpx;
				margin: 5rpx 0 0 20rpx;
				position: absolute;
				z-index: 999;
				left: 0rpx;

				.name {
					// line-height: 0rem;
					// font-size: rpx;
					// margin-bottom: 0rpx;
					// padding: 0rpx;
					line-height: 1.4rem;
					// margin-bottom: -100rpx;
				}

				.info {
					font-size: 10rpx;
					line-height: 1rem;
				}

				svg {
					width: 20rpx;
					height: 20rpx;
				}
			}
			
			.weatherImage{
				width: 20rpx;
				height: 20rpx;
			}

			// .title-weather {
			// 	width: 100%; /* 使用百分比宽度以适应不同的屏幕尺寸 */
			// 	height: 80rpx;
			// 	margin: 5rpx 0 0 20rpx; /* 调整外边距 */
			// 	position: relative; /* 使用相对定位，除非确实需要使用绝对定位 */
			// 	z-index: auto; /* 默认的 z-index 是自动设置的，除非需要特别调整 */
			// 	.name {
			// 	line-height: 1.5rem; /* 保持行高一致 */
			// 	font-size: 16rpx; /* 设置字体大小 */
			// 	margin-bottom: 0; /* 清除底部外边距 */
			// 	}
			// 	.info {
			// 	font-size: 12rpx; /* 设置字体大小 */
			// 	line-height: 1.2rem; /* 适当调整行高 */
			// 	}
			// }
		}
	}
</style>