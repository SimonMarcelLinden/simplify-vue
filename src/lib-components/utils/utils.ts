// @ts-ignore-next-line
import pick from 'lodash.pick'
// @ts-ignore-next-line
import assign from 'lodash.assign'
import { VNode } from 'vue'

const DATA_KEYS = [
	'class',
	'staticClass',
	'style',
	'attrs',
	'props',
	'domProps',
	'on',
	'nativeOn',
	'directives',
	'scopesSlots',
	'slot',
	'ref',
	'key',
]

// @ts-ignore-next-line
export const cloneSlot = vnode => {
	// use the context that the original vnode was created in.
	const h = vnode.context && vnode.context.$createElement
	const isComp = !!vnode.componentOptions
	const isText = !vnode.tag // this will also match comments but those will be dropped, essentially
	const children = isComp ? vnode.componentOptions.children : vnode.children

	if (isText) return vnode.text

	const data = extractData(vnode, isComp)
	const tag = isComp ? vnode.componentOptions.Ctor : vnode.tag
	
	let childNodes = undefined

	if (children) {
		childNodes = children.map(function (c: VNode) {
			cloneSlot(c);
		});
	}

	return h(tag, data, childNodes)
}

export const mergeSlotData = (vnode: Object, name: String, obj: Object) => {
	if (!vnode) {
		return
	}

	// @ts-ignore-next-line
	vnode.data = vnode.data || {}
	// @ts-ignore-next-line
	vnode.data[name] = {
		// @ts-ignore-next-line	
		...vnode.data[name],
		...obj,
	}
}

export const setSlotData = (vnode: Object, name: String, value: Number) => {
	if (!vnode) {
		return
	}
	
	// @ts-ignore-next-line
	vnode.data = vnode.data || {}
	// @ts-ignore-next-line
	vnode.data[name] = value
}

export const setSlotClass = (vnode: Object, className: String) => {
	if (!vnode) {
		return
	}
	
	// @ts-ignore-next-line
	vnode.data.class = {};
	// @ts-ignore-next-line
	vnode.data.class[className] = true;
}

function extractData(vnode: Object, isComp: Boolean) {
	// @ts-ignore-next-line
	const data = pick(vnode.data, DATA_KEYS)

	if (isComp) {
		// @ts-ignore-next-line
		const cOpts = vnode.componentOptions
		assign(data, {
			props: cOpts.propsData,
			on: cOpts.listeners,
		})
	}

	if (data.key) {
		data.key = mutateKey(data.key)
	}

	return data
}

function mutateKey(key: String) {
	return '' + key + `-cloned-cid`
}