/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

import vue, {lib, library} from "vue.min.js"

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

var router = []

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

router.push ({path: "/", name: "index", component: () => import ("./index.vue"), meta: {layout: "index"}})
router.push ({path: "/about", name: "page:about", component: () => import ("./page/about.vue"), meta: {layout: "page"}})
router.push ({path: "/contact", name: "page:contact", component: () => import ("./page/contact.vue"), meta: {layout: "page"}})
router.push ({path: "/help", name: "page:help", component: () => import ("./page/help.vue"), meta: {layout: "page"}})

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

router.push ({path: lib.router.try.catch, name: "*", component: () => import ("./error/index.vue"), meta: {layout: "error"}})

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

if (null) {
	router.on ("before:each", function (to, from, next) {
		if (to.match.length) next ()
		else next (), window.location = lib.http.header.status.error.found
		})
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

export default router = lib.router.create ({history: lib.router.history (vue.request.url), [("route").concat ("s")]: router})

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
