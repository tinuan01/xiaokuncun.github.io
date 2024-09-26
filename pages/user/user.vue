<template>
	<view class="user">
		<!-- 底图 - 开始 -->
		<image class="user-header-image" :src="user_banner"></image>
		<!-- 底图 - 结束 -->

		<!-- 用户信息 - 开始 -->
		<view class="user-info-box">
			<u-avatar :src="userInfo.avg?userInfo.avg:user_avg" shape="square"></u-avatar>
			<view class="user-info-right">
				<view class="user-nickname">{{ userInfo.nickName?userInfo.nickName:user_name }}</view>
				<view class="user-phone" v-if="userInfo.phone">{{ userInfo.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') }}</view>
			</view>
		</view>
		<!-- 用户信息 - 结束 -->

		<!-- 充值优惠 - 开始 -->
		<view class="user-recharge-wrapper">
			<view class="user-recharge-box">
				<view class="recharge-info">
					<view class="info-title">
						账户充值
					</view>
					<view class="info-content">
						由于无商户号无法对接微信支付 支付由余额代替
					</view>
				</view>

				<view class="recharge-button" @click="goPage('recharge')">
					立即充值
				</view>
			</view>

			<u-line color="#efefef"></u-line>
			
			<view class="recharge-user-money">
				<view class="recharge-money-title">储值：</view>
				<view class="recharge-money">¥ {{userInfo.money}}</view>
			</view>
		</view>
		<!-- 充值优惠 - 结束 -->

		<!-- 列表菜单 - 开始 -->
		<view class="user-activity-menu">
			<view class="menu-item" @click="goPage('coupon')">
				<view class="left">
					<image class="menu-icon" src="../../static/icon/icon_coupon.png"></image>
					<view class="menu-name">我的代金券</view>
				</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
			<view class="menu-item" @click="goPage('orderList')">
				<view class="left">
					<image class="menu-icon" src="../../static/icon/icon_order.png"></image>
					<view class="menu-name">我的订单</view>
				</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
			<view class="menu-item" @click="goPage('userinfo')">
				<view class="left">
					<image class="menu-icon" src="../../static/icon/icon_userinfo.png"></image>
					<view class="menu-name">个人资料</view>
				</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
			<view class="menu-item" @click="goPage('contact')">
				<view class="left">
					<image class="menu-icon" src="../../static/icon/icon_contact.png"></image>
					<view class="menu-name">联系我们</view>
				</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
			<view class="menu-item">
				<view class="left">
					<image class="menu-icon" src="../../static/icon/icon_about.png"></image>
					<view class="menu-name">当前版本</view>
				</view>
				<view class="menu-number">{{ version }}</view>
			</view>
		</view>
		<!-- 列表菜单 - 结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: '1.0.0',
				user_banner: '../../static/index_banner.png',
				user_avg: '../../static/logo.png',
				user_name: '轻院煮义',
				userInfo: {}
			};
		},
		created() {
			let _this = this
			uni.getSystemInfo({
				success: function(res) {
					_this.version = res.appVersion
				},
			})
		},
		onShow() {
			const store = uni.getStorageSync('system')
			this.user_avg = store[5].content
			this.user_name = store[6].content
			this.user_banner = store[3].content
			
			this.userInfo = uni.getStorageSync('userInfo')
		},
		methods: {
			/* 跳转页面 */
			goPage(pageName) {
				switch (pageName) {
					default:
						uni.navigateTo({
							url: '/pages/function/' + pageName
						})
						break;
				}
			}
		}
	}
</script>

<style>
	page {
		background: #F4F4F4;
	}
</style>

<style lang="scss">
	.user {
		.user-header-image {
			width: 100%;
		}

		.user-info-box {
			background: #ffffff;
			padding: 30rpx;
			margin: -80rpx 20rpx 20rpx 20rpx;
			position: relative;
			border-radius: 20rpx;
			display: flex;
			align-items: center;

			.user-avg {
				width: 100rpx;
				height: 100rpx;
				border-radius: 10rpx;
			}

			.user-nickname {
				margin-left: 20rpx;
			}
			.user-phone{
				margin-left: 20rpx;
				font-size: 24rpx;
				color: #666666;
			}
		}

		.user-recharge-wrapper {
			background: #ffffff;
			border-radius: 20rpx;
			padding: 30rpx;
			margin: 20rpx;
			
			.user-recharge-box {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 20rpx;

				.recharge-info {
					.info-title {
						color: #333;
						font-size: 28rpx;
						font-weight: bold;
					}

					.info-content {
						color: #999;
						font-size: 24rpx;
					}
				}

				.recharge-button {
					// background: #ff4131;
					color: #333;
					padding: 10rpx 20rpx;
					font-size: 22rpx;
					border-radius: 50rpx;
					flex-shrink: 0;
					border: 1rpx solid #dadbde;
				}
			}
			
			.recharge-user-money{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 20rpx;
				font-size: 26rpx;
				color: #333;
				
				.recharge-money{
					font-weight: bold;
					font-size: 30rpx;
				}
				
				.recharge-money::first-letter{
					font-size: 22rpx;
				}
			}
		}

		.user-activity-menu {
			padding: 30rpx;
			margin: 20rpx;
			border-radius: 20rpx;
			background: #fff;

			.menu-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 60rpx;

				.left {
					display: flex;
					align-items: center;

					.menu-icon {
						width: 40rpx;
						height: 40rpx;
					}


					.menu-name {
						font-size: 28rpx;
						margin-left: 20rpx;
						color: #333;
					}
				}

				.menu-number {
					font-size: 30rpx;
					color: #666666;
					letter-spacing: 2rpx;
				}
			}

			.menu-item:first-child {
				margin-top: 0;
			}
		}
	}
</style>
