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