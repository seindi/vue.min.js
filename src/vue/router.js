/**
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

import vue, {lib, library} from "vue.min.js"

/**
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

var router = []

/**
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

router.push ({path: "/", name: "index", component: () => import ("../router/index.vue"), meta: {layout: "index"}})
router.push ({path: "/about", name: "page:about", component: () => import ("../router/page/about.vue"), meta: {layout: "page"}})
router.push ({path: "/contact", name: "page:contact", component: () => import ("../router/page/contact.vue"), meta: {layout: "page"}})
router.push ({path: "/help", name: "page:help", component: () => import ("../router/page/help.vue"), meta: {layout: "page"}})

/**
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

router.push ({path: lib.router.try.catch, name: "*", component: () => import ("../router/error.vue"), meta: {layout: "error"}})

/**
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
