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

vue.api = "http://127.0.0.1:3000"
vue.app = {}

/**
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

vue.start = function () {
	vue.parse_url ()
	}

vue.redirect = function (... redirect) {
	return vue.router.push (... redirect)
	}

vue.parse_url = function (on_update = true) {
	var protocol = window.url.protocol
	var host = window.url.host.name
	var path = vue.route.path
	var query = URL.query.format (vue.route.query)
	var url = URL.parse (protocol.concat ("://").concat (host).concat (path).concat (query))
	for (var i in url) vue.url [i] = url [i]
	if (on_update) vue.on ("update", function () { vue.parse_url (false) })
	}

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
