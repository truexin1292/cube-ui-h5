<template>
	<div class="home">
		<cube-slide :data="items" />
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
				]
			};
		}
	};
</script>

