import pick   from 'lodash.pick'
import assign from 'lodash.assign'

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

export const cloneSlide = vnode => {
  // use the context that the original vnode was created in.
  const h         = vnode.context && vnode.context.$createElement
  const isComp    = !!vnode.componentOptions
  const isText    = !vnode.tag // this will also match comments but those will be dropped, essentially
  const children  = isComp ? vnode.componentOptions.children : vnode.children

  if (isText) return vnode.text

  const data        = extractData(vnode, isComp)
  const tag         = isComp ? vnode.componentOptions.Ctor : vnode.tag
  const childNodes  = children ? children.map(c => cloneSlide(c)) : undefined

  return h(tag, data, childNodes)
}

export const mergeSlideData = (vnode, name, obj) => {
  if (!vnode) {
    return
  }

  vnode.data = vnode.data || {}
  vnode.data[name] = {
    ...vnode.data[name],
    ...obj,
  }
}

export const setSlideData = (vnode, name, value) => {
  if (!vnode) {
    return
  }

  vnode.data = vnode.data || {}
  vnode.data[name] = value
}

function extractData(vnode, isComp) {
  const data = pick(vnode.data, DATA_KEYS)
  
  if (isComp) {
    const cOpts = vnode.componentOptions
    assign(data, {
      props: cOpts.propsData,
      on: cOpts.listeners,
    })
  }

  if (data.key ) {
    data.key = mutateKey(data.key)
  }

  return data
}

function mutateKey(key) {
  return '' + key + `-cloned-cid`
}
