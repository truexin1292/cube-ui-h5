<template>
	<div class="list">
		<h1 class="title">
			<span @click="backTo" class="back">返回</span>
			{{title}}
			<span @click="toHome" class="home">首页</span>
		</h1>
		<cube-index-list
			:data="singerData"
			@select="selectItem"
			@title-click="clickTitle"></cube-index-list>
	</div>
</template>

<script>
	import singerData from "../data/singer.json";

	export default {
		name: "List",
		data() {
			return {
				title: "著名歌手名单列表",
				singerData: singerData
			};
		},
		methods: {
			selectItem(item) {
				console.log(item.name);
			},
			clickTitle(title) {
				console.log(title);
			},
			backTo() {
				this.$router.go(-1);
			},
			toHome() {
				this.$router.push("/home");
			}
		}
	};
</script>

<style scoped>
	.title {
		padding: 10px;
		height: 30px;
		line-height: 30px;
		font-weight: bold;
		color: #666;
	}

	.title .back {
		float: left;
	}

	.title .home {
		float: right;
		color: #fc9153;
	}

	.list {
		height: 100%;
		position: relative;
	}
</style>
