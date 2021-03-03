/**
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

import vue, {lib, library} from "vue.min.js"
import app from "/src/app.vue"
import router from "/src/router"
import x from "/src/store"
import view from "/src/view"
import "/src/main-setup"

/**
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

var application = vue.application (app)
application.use (x)
application.use (router)
for (var i in view.layout) application.component (("layout").concat (":").concat (i), view.layout [i])
for (var i in view.component) application.component (("component").concat (":").concat (i), view.component [i])
for (var i in view.element) application.component (("element").concat (":").concat (i), view.element [i])
application.mount (("#").concat ("vue"))

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
