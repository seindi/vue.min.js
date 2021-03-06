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
		vue.fetch = new lib.url.fetch ("http://127.0.0.1:3000")
		vue.fetch.header = {"x-hash": vue.meta.hash}
		var ping = "ping"
		var ready = vue.reference ()
		vue.fetch.get (ping, {query: {action: "ping"}}).json (function (response) {
			if (response.header.status.message === "OK") {
				vue.fetch.get (ping, {query: {action: "info:s"}}).json (function (response) {
					if (response.header.status.message === "OK") {
						ready.value = true
						vue.visitor.ip = response.visitor.ip
						vue.visitor.browser = response.visitor.browser
						}
					})
				}
			})
		lib.date.universal ()
		vue.request.date = vue.reactive ({create: lib.date.create ({zone: lib.ls.json ("date-time:zone", {hour: 0, minute: 0}, true)}), format: {}})
		vue.request.date.time = vue.request.date.create ((vue.time = vue.reactive ({stamp: lib.time.stamp ()})).stamp)
		vue.request.date.s = vue.request.date.time.format ()
		lib.time.interval (function () {
			vue.request.date.time = vue.request.date.create (vue.time.stamp = lib.time.stamp ())
			vue.request.date.s = vue.request.date.time.format ()
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
