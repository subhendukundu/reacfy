import React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'

import { renderHTML } from '../renderer/renderHTML'

export const getPagesRoutes = router => {
  function requireAll (r) {
    const gather = {}
    r.keys().forEach((mpath, ...args) => {
      const result = r(mpath, ...args)
      const path = mpath.replace(/(?:^[./]*\/|\.[^.]+$)/g, '').split('/').filter(item => item !== 'index')
      const route = `/${path
        .join('/')
        .replace(/\[(\w+)\]/g, ':$1')}`
      console.log(path, result, route)
      router.get(route, () => {
        const headers = { 'Content-Type': 'text/html; charset=utf-8' }
        const HocApp = result.default
        const app = renderToString(<HocApp />)
        const helmet = Helmet.renderStatic()
        const html = renderHTML(helmet, app)
        return new Response(html, { status: 200, headers })
      })
      // jsonSet(gather, path, result)
    })
    return gather
  }
  const allPages = requireAll(require.context('../pages/', true, /\.js$/))
  console.log(allPages)
  return allPages
}
