<template>
	<div class="login">
		<img src="../assets/logo.png" class="login-logo">
		<p class="logo-tips">初心打车</p>
		<cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
			<cube-form-group>
				<cube-form-item :field="fields[0]"></cube-form-item>
				<cube-form-item :field="fields[1]"></cube-form-item>
				<cube-form-item :field="fields[2]" class="select"></cube-form-item>
				<cube-form-item :field="fields[3]" class="select"></cube-form-item>
				<cube-form-item :field="fields[4]"></cube-form-item>
				<cube-form-item :field="fields[5]" class="remark"></cube-form-item>
			</cube-form-group>
			<cube-form-group class="fix-bottom">
				<cube-button type="submit">登录</cube-button>
			</cube-form-group>
		</cube-form>
	</div>
</template>

<script>
	import { Validator } from "cube-ui";

	Validator.addType("password", (val) => {
		return typeof val === "string" && /^[0-9a-zA-Z]{6}$/.test(val);
	});

	export default {
		name: "Login",
		data() {
			return {
				validity: {},
				valid: undefined,
				file: [],
				model: {
					usernameValue: "",
					genderValue: "",
					ageValue: "",
					remarkValue: "",
					passwordValue: "",
					headValue: []

					// usernameValue: "truexin",
					// genderValue: "男",
					// ageValue: 25,
					// remarkValue: "我是cube-ui-h5",
					// passwordValue: 123456,
					// headValue: []
				},
				fields: [
					{
						type: "input",
						modelKey: "usernameValue",
						label: "用户名",
						props: {
							placeholder: "请输入用户名"
						},
						rules: {
							required: true
						},
						messages: {
							required: "请输入用户名"
						}
					},
					{
						type: "input",
						modelKey: "passwordValue",
						label: "密码",
						props: {
							type: "password",
							clearable: true,
							eye: { open: false, reverse: false },
							placeholder: "支持数字和字母"
						},
						rules: {
							required: true,
							type: "password"
						},
						messages: {
							required: "请输入密码",
							type: "密码有误"
						}
					},
					{
						type: "select",
						modelKey: "genderValue",
						label: "性别",
						props: {
							options: ["男", "女"]
						},
						rules: {
							required: true
						},
						messages: {
							required: "请选择性别"
						}
					},
					{
						type: "select",
						modelKey: "ageValue",
						label: "年龄",
						props: {
							options: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
						},
						rules: {
							required: true
						},
						messages: {
							required: "请选择年龄"
						}
					},
					{
						type: "upload",
						modelKey: "headValue",
						label: "头像",
						events: {
							// "file-added": (args) => {
							// 	window.console.log("this.file", this.file);
							// 	const file = this.file[0];
							// 	file && this.$refs.upload.removeFile(file);
							// },
							"file-submitted": (args) => {
								window.console.log("this.file", this.file);
								const file = this.file[0];
								file && this.$refs.upload.removeFile(file);
							},
							// "file-success": (args) => {
							// 	console.log("file success", args);
							// },
							// "files-removed": (args) => {
							// 	console.log("file removed", args);
							// },
							"file-error": (args) => {
								this.$createToast({
									type: "warn",
									txt: "头像上传失败",
									time: 2000
								}).show();
							}
							// "files-click": (args) => {
							// 	console.log("file-click", args);
							// }
						},
						rules: {
							required: true
						},
						messages: {
							required: "请上传头像"
						},
						props: {
							max: 1,
							action: "//jsonplaceholder.typicode.com/photos/"
						}
					},
					{
						type: "textarea",
						modelKey: "remarkValue",
						label: "备注",
						props: {
							placeholder: "请输入备注"
						}
					}
				]
			};
		},
		methods: {
			submitHandler(e) {
				e.preventDefault();
				console.log("submit", e);
				this.showToastMask();
			},
			validateHandler(result) {
				this.validity = result.validity;
				this.valid = result.valid;
			},
			showToastMask() {
				const toast = this.$createToast({
					txt: "信息提交中...",
					mask: true
				});
				toast.show();
				setTimeout(() => {
					toast.hide();
					this.$router.push("/home");
				}, 2000);
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login {
		height: 100vh;
		background: #fff;
	}

	.login-logo {
		border-radius: 50px;
		margin: 15px 0 0;
		width: 80px;
	}

	.logo-tips {
		font-size: 20px;
		color: #999;
		border-bottom: 1px dashed #ccc;
		padding: 10px 0;
	}

	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	.cube-form {
		position: static;
	}

	.fix-bottom {
		position: fixed;
		bottom: 0;
		width: 100vw;
	}

	.select {
		text-align: left;
	}


</style>
<style>
	.remark .cube-form-label::before {
		content: "*";
		display: block;
		margin-top: 1px;
		margin-right: 0.3em;
		opacity: 0;
	}
</style>
