<template>
	<component v-if="ready" v-bind:is="layout">
		<router-view></router-view>
	</component>
	<div v-else>
		...
	</div>
</template>

<script>
import vue, {lib, library} from "vue.min.js"
export default {
	[vue.name]: "",
	[vue.properties]: [],
	data (properties) { return {} },
	setup (properties) {
		vue.cookie = new lib.cookie ()
		vue.cookie.domain = window.url.host.star
		vue.route = lib.route ()
		vue.router = lib.router ()
		vue.x = vue.store.populate ()
		vue.url = vue.reactive ({})
		vue.visitor = vue.reactive ({})
		vue.meta = vue.reactive ({hash: lib.attribute.get ("content", lib.query.selector ("meta[property=vue:hash]"))})
		vue.fetch = new lib.url.fetch ()
		vue.fetch.url = vue.api
		vue.fetch.header = {"x-hash": vue.meta.hash}
		lib.date.universal ()
		vue.date = vue.reactive ({create: lib.date.create ({zone: lib.ls.json ("date-time:zone", {hour: 0, minute: 0}, true)}), format: {}})
		vue.date.time = vue.date.create ((vue.time = vue.reactive ({stamp: lib.time.stamp ()})).stamp)
		vue.date.s = vue.date.time.format ()
		lib.time.interval (function () {
			vue.date.time = vue.date.create (vue.time.stamp = lib.time.stamp ())
			vue.date.s = vue.date.time.format ()
			})
		var ping = "ping"
		var ready = vue.reference ()
		vue.fetch.get (ping, {query: {action: "ping"}}).json (function (response) {
			if (response.header.status.message === "OK") {
				ready.value = true
				vue.fetch.get (ping, {query: {action: "info:s"}}).json (function (response) {
					if (response.header.status.message === "OK") {
						vue.visitor.ip = response.visitor.ip
						vue.visitor.browser = response.visitor.browser
						}
					})
				}
			})
		return {
			vue, ready, layout: vue.compute (function () {
				if (null) if (vue.route.meta.layout) return ("layout").concat (":").concat (vue.route.meta.layout)
				return ("layout").concat (":").concat (vue.route.meta.layout || ("__"))
				}),
			}
		},
	[vue.update]: function () {},
	[vue.method]: {
		function () {},
		},
	}
</script>

<style lang="less">
#app {}
</style>
