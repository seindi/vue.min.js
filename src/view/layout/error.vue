<template>
	layout-error:open
	<slot></slot>
	layout-error:close
</template>

<script>
import vue, {lib, library} from "vue.min.js"
export default {
	[vue.name]: "",
	[vue.properties]: [],
	data (properties) { return {} },
	setup (properties) {
		return {vue}
		},
	[vue.update]: function () {},
	[vue.method]: {
		function () {},
		},
	}
</script>

<style lang="less" scoped>
</style>
