import layout from "../view/layout/__.vue"
import layout_index from "../view/layout/index.vue"
import layout_page from "../view/layout/page.vue"
import layout_error from "../view/layout/error.vue"

import component_index from "../view/component/index.vue"
import component_error from "../view/component/error.vue"

import element_index from "../view/element/index.vue"
import element_error from "../view/element/error.vue"

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
