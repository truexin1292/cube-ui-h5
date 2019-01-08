<template>
	<div class="home">
		<div class="slider-list">
			<cube-slide
				ref="slide"
				:data="items"
				@change="changePage"
				:loop="loop"
			>
				<cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickList(item, index)">
					<a :href="item.url">
						<img :src="item.image">
					</a>
				</cube-slide-item>
			</cube-slide>
		</div>

		<cube-toolbar
			:actions="actions"
			:more-actions="moreActions"
			@click="clickTool"
		>

		</cube-toolbar>

		<cube-button
			@click="showCustomImagePreview"
		>
			查看收藏图片
		</cube-button>

		<div class="fix-bottom">
			<cube-tab-bar
				v-model="selectedLabelDefault"
				:data="tabs"
				@change="changeHandler">
			</cube-tab-bar>
		</div>

	</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {
				items: [
					{
						url: "http://www.didichuxing.com/",
						image: "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png"
					},
					{
						url: "http://www.didichuxing.com/",
						image: "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png"
					},
					{
						url: "http://www.didichuxing.com/",
						image: "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png"
					}
				],
				selectedLabelDefault: "首页",
				loop: true,
				tabs: [
					{
						label: "首页",
						icon: "cubeic-home"
					},
					{
						label: "列表",
						icon: "cubeic-like"
					},
					{
						label: "NBA",
						icon: "cubeic-vip"
					},
					{
						label: "菜单",
						icon: "cubeic-right"
					},
					{
						label: "登录",
						icon: "cubeic-person"
					}
				],
				money: 10,
				actions: [
					{
						text: "完成订单",
						action: "showText"
					},
					{
						text: "打车来接",
						checked: false,
						type: "checkbox"
					},
					{
						text: "一口价<span class=\"orange\">10元</span>",
						action: "moreMoney"
					}
				],
				moreActions: [
					{
						text: "操作a",
						action: "showText"
					},
					{
						text: "操作b",
						action: "showText"
					},
					{
						text: "操作c",
						icon: "cubeic-right",
						action: "showText"
					}
				],
				customIndex: 1,
				imgs: [
					"https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg",
					"https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg",
					"https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg",
					"https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg",
					"http://img.zcool.cn/community/010f87596f13e6a8012193a363df45.jpg@1280w_1l_2o_100sh.jpg"
				]
			};
		},
		methods: {
			changeHandler(label) {
				switch (label) {
					case "首页":
						this.$router.push("/home");
						break;
					case "列表":
						this.$router.push("/list");
						break;
					case "NBA":
						this.$router.push("/match");
						break;
					case "登录":
						this.$router.push("/");
						break;
					case "菜单":
						this.$router.push("/dishMap");
						break;
					default:

				}
			},
			changePage(current) {
				console.log("当前轮播图序号为:" + current);
			},
			clickList(item, index) {
				console.log(item, index);
			},
			showText(item) {
				this.$createToast({
					type: "correct",
					txt: "clicked " + item.text,
					time: 1000
				}).show();
			},
			moreMoney(item) {
				this.money += 10;
				item.text = "一口价<span class=\"orange\">" + this.money + "元</span>";
			},
			clickTool(item) {
				if (item.action) {
					this[item.action](item);
				}
			},
			showCustomImagePreview() {
				this.$createImagePreview({
					imgs: this.imgs,
					initialIndex: this.customIndex,
					loop: true,
					speed: 500,
					onChange: (i) => {
						this.customIndex = i;
					},
					onHide: () => {
						console.log("hide");
					}
				}, (h) => {
					return h("span", {
						class: {
							"image-preview-custom-header": true
						},
						slot: "header"
					}, this.customIndex + 1);
				}).show();
			}
		}
	};
</script>

<style scoped>
	.home {
		height: 100vh;
		position: relative;
	}

	.slider-list {
		overflow: hidden;
	}

	.fix-bottom {
		position: fixed;
		bottom: 0;
		width: 100vw;
	}

	.cube-toolbar {
		position: static;
	}
</style>
<style>
	.cube-image-preview-counter {
		width: auto !important;
		bottom: 150px !important;
		z-index: -1;
	}

	.image-preview-custom-header {
		width: 30px;
		height: 30px;
		line-height: 30px;
		color: #fff;
		display: inline-block;
		border-radius: 25px;
		background: #666;
		margin-top: 10px;
	}
</style>
