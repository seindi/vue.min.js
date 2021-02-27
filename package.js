import vue from "./dependencies"
import L from "./library"
L.route = vue.route
L.router = vue.router

export const lib = L
export const library = {}
export default {
	application: vue.app, name: "name", properties: ("prop").concat ("s"), method: ("method").concat ("s"), mount: ("mount").concat ("ed"), update: ("update").concat ("d"),
	reference: vue.reference, reactive: vue.reactive, compute: vue.compute, watch: vue.watch, store: vue.x,
	to: vue.to, on: vue.on,
	request: vue.request,
	process: vue.process,
	}

window.url = URL.parse (L.string (window.location))
