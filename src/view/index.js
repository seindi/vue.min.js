import layout from "./layout/__.vue"
import layout_index from "./layout/index.vue"
import layout_page from "./layout/page.vue"
import layout_error from "./layout/error.vue"

import component_index from "./component/index.vue"
import component_error from "./component/error.vue"

import element_index from "./element/index.vue"
import element_error from "./element/error.vue"

export default {
	layout: {
		__: layout,
		index: layout_index,
		page: layout_page,
		error: layout_error,
		},
	component: {
		index: component_index,
		error: component_error,
		},
	element: {
		index: element_index,
		error: element_error,
		},
	}
