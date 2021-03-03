import "library.min.js"
import "library.min.js/plugin"

import vue from "./src/library"
import ___ from "./src/library/script"
___.route = vue.route
___.router = vue.router

export const lib = ___
export const library = {}
export default {
	application: vue.app, name: "name", properties: ("prop").concat ("s"), method: ("method").concat ("s"), mount: ("mount").concat ("ed"), update: ("update").concat ("d"),
	reference: vue.reference, reactive: vue.reactive, compute: vue.compute, watch: vue.watch, store: vue.x,
	to: vue.to, on: vue.on,
	request: vue.request,
	process: vue.process,
	}
