<template>
	<component v-if="ready" v-bind:is="layout">
		<router-view></router-view>
	</component>
	<div v-else>
		...
	</div>
</template>

<script setup>
import vue, {lib, library} from "vue.min.js"
</script>

<style lang="less">
#app {}
</style>
