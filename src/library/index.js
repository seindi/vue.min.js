/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

import {createApp, toRefs, ref, reactive, onMounted, onUnmounted, onUpdated, computed, watch} from "vue"
import {useRoute, useRouter, createRouter, createWebHistory} from "vue-router"
import {createStore, useStore} from "vuex"

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

function route () { return useRoute () }
function router () { return useRouter () }
router.create = createRouter
router.history = createWebHistory
router.try = {catch: "/:catchAll(.*)"}

function on (key, value) {
	if (key === "mount") return onMounted (value)
	if (key === "un:mount") return onUnmounted (value)
	if (key === "update") return onUpdated (value)
	}

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

export default {
	app: createApp, reference: ref, reactive: reactive, compute: computed, watch: watch,
	route, router, x: {create: createStore, populate: useStore},
	to: {reference: toRefs}, on: on,
	request: {url: process.env.BASE_URL},
	process: {mode: process.env.NODE_ENV},
	}

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
