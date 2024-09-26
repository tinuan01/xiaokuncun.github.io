# cc-selectBox


#### 使用方法 
```使用方法	
<!-- select-arr：选择数组 nowindex：当前选择序列 @change：切换选择事件  -->
<cc-selectBox :select-arr="select" :nowindex="nowindex" @change="turntap"></cc-selectBox>
          					
```

#### HTML代码实现部分
```html
<template>
    <view>
        <view class="page">
			<!-- select-arr：选择数组 nowindex：当前选择序列 @change：切换选择事件  -->
			<cc-selectBox :select-arr="select" :nowindex="nowindex" @change="turntap"></cc-selectBox>
          
            <view class="tip-box">
                <view class="left">
                    <view class="title">Hello, 尊敬的用户 </view>
                    <view class="subtext">登录注册解锁更多精彩内容</view>
                </view>
                <image lazyLoad class="tip-img" src="https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_1280.jpg"></image>
            </view>
            <view class="form-mes" v-if="nowindex != 1">
                <view class="input-item">
                    <view class="num">+86</view>
                    <input
                        @blur="lossstyle"
                        @focus="changestyle"
                        @input="bindpancode"
                        class="item"
                        data-inputNum="0"
                        maxlength="11"
                        placeholder="手机号（新号码将自动注册）"
                        placeholderClass="placeholder"
                        type="number"
                    />
                </view>
                <view class="input-item">
                    <input
                        @blur="lossstyle"
                        @focus="changestyle"
                        @input="pushcode"
                        class="item"
                        data-inputNum="1"
                        maxlength="6"
                        placeholder="请输入验证码"
                        placeholderClass="placeholder"
                        type="number"
                    />
                    <view @tap.stop.prevent="getshortmes" :class="'code-btn ' + (getcode ? 'active' : '') + ' ptp_exposure'" data-ptpid="0a55-1480-8c29-d6e1">
                        {{ getcodemes }}
                    </view>
                </view>
                <view @tap="bid" class="logoin submit ptp_exposure" data-ptpid="50c4-1348-ad62-db8f">登录</view>
                <view @tap="voiceCode" class="send_call ptp_exposure" data-ptpid="eaac-1adf-a790-feac" v-if="sendcall">
                    收不到验证码？试试
                    <text class="green">语音验证</text>
                </view>
            </view>
            <view class="form-mes" v-if="nowindex != 0">
                <view class="input-item">
                    <view class="num">+86</view>
                    <input
                        @blur="lossstyle"
                        @focus="changestyle"
                        @input="regloginaccount"
                        class="item"
                        data-inputNum="0"
                        maxlength="11"
                        placeholder="请输入手机号"
                        placeholderClass="placeholder"
                        type="number"
                    />
                </view>
                <view class="input-item">
                    <input
                        @blur="lossstyle"
                        @focus="changestyle"
                        @input="regloginpass"
                        class="item"
                        data-inputNum="2"
                        :password="isPassword"
                        placeholder="请输入密码"
                        placeholderClass="placeholder"
                        type="text"
                    />
                    <view @tap="changePassType" :class="'iconfont ' + (isPassword ? 'iconeye_off' : 'iconeye')" data-ptpid="8d48-14e8-85ae-6a5f"></view>
                </view>
                <view @tap="reglogin" class="logoin submit ptp_exposure" data-ptpid="2572-1abd-b620-ade5">登录</view>
                <view @tap="forgetpass" class="forget green ptp_exposure" data-ptpid="a54d-1179-8be7-3e5e">
                    <text>忘记密码？</text>
                </view>
            </view>
            <view class="iagree">
                登录注册代表您已同意《
                <text @tap="skipAgreePage" class="green ptp_exposure" data-ptpid="934b-1839-b547-2d42">App用户协议</text>
                》
            </view>
        </view>
        <view @tap="closeImgCode" class="toastbg ptp_exposure" data-ptpid="dad4-159d-ad73-a360" v-if="showimgcode"></view>
        <view class="imagecont" v-if="showimgcode">
            <view class="imagetitle">
                <input @input="getImgCode" class="imagevalue" maxlength="4" placeholder="请输入图片验证码" placeholderClass="placeholder" />
                <image lazyLoad @tap="changeImgCode" class="ptp_exposure" data-ptpid="75db-11fd-a7c2-3fdb" :src="imageCode" style="width: 160rpx; height: 64rpx"></image>
            </view>
            <view @tap="confirmCode" :class="'choosesure ' + (confirmactive ? 'active' : '') + ' ptp_exposure'" data-ptpid="35bd-1312-a0c2-9664">确定</view>
        </view>
    </view>
</template>

<script>

var app = getApp();
export default {
    components: {
        
    },
    data() {
        return {
            logs: [],
            nowindex: 0,
            regularLogin: false,
            select: ['验证码登录', '密码登录'],
            getcode: false,
            getcodemes: '获取验证码',
            sendcall: false,
            hidepass: false,
            callimg: false,
            phone: '',
            code: '',
            submit: {
                submit: false,
                text: '登录'
            },
            miniOpenId: '',
            redirect: '',
            showimgcode: false,
            imageCode: '',
            localcode: '',
            confirmactive: false,
            regmobile: '',
            regpassword: '',
            nowUrl: '/accountCenter/account/fast/login/verifyCode',
            frontPage: '',
            deviceIdCode: Math.random(),
            inputStyle: [
                {
                    iconactive: 'https://qiniu-image.qtshe.com/2017041020px-mobilegreen@3x.png',
                    icon: 'https://qiniu-image.qtshe.com/2017041020px-mobilegray@3x.png',
                    selected: false
                },
                {
                    iconactive: 'https://qiniu-image.qtshe.com/2017041020px-volidegreen@3x.png',
                    icon: 'https://qiniu-image.qtshe.com/2017041020px-volidegray@3x.png',
                    selected: false
                },
                {
                    iconactive: 'https://qiniu-image.qtshe.com/2017041020px-passgreen@3x.png',
                    icon: 'https://qiniu-image.qtshe.com/2017041020px-passgray@3x.png',
                    selected: false
                }
            ],
            nowOnFocus: 0,
            isPassword: true
        };
    },
    onLoad: function (e) {
		this.redirect = e.redirect || '';
    },
    methods: {
        getImgCode: function (e) {},

        closeImgCode: function () {
			this.showimgcode = false;
        },

        voiceCode: function () {},

        changestyle: function (e) {},

        lossstyle: function (e) {},

        confirmCode: function () {},

        getshortmes: function () {},

        bid: function () {},

		// 切换登录方式
        turntap: function (e) {
			this.nowindex = e.target.dataset.num;
		},

        pushcode: function (e) {},

        bindpancode: function (e) {},

        forgetpass: function () {},

        hideorshow: function () {},

        regloginaccount: function (e) {},

        regloginpass: function (e) {},

        changeImgCode: function () {},

        skipAgreePage: function () {},

        reglogin: function () {},

        inviteFriend: function () {},

        changePassType: function () {}
    }
};
</script>

<style lang="scss" scoped>
	@import "./login.scss";
</style>




```

#### 组件实现代码 
```组件实现代码
	
<template>
	<view class="logway">
		<view :class="'act ' + (nowindex == index ? 'active' : '')" v-for="(item, index) in selectArr" :key="index">
			<view @tap="turntap" class="item ptp_exposure" :data-index="index" :data-num="index"
				data-ptpid="6f22-1fc6-9182-d53d">
				{{ item }}
			</view>

			<view class="dot"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {



			};
		},
		props: {
			selectArr: {
				type: Array,
				default: []
			},
			// 当前选中
			nowindex: {
				type: Number,
				default: 0
			},
		},
		methods: {
			turntap(e) {
				this.$emit("change", e);

			},
		}
	};
</script>



<style lang="scss" scoped>
	@import "./index.scss";
</style>					


```