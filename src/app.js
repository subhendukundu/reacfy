import React, { useState } from 'react'
import { renderToString } from 'react-dom/server'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { Router } from 'itty-router'

import { renderHTML } from './renderer/renderHTML'
import HocApp from './pages'
import { getPagesRoutes } from './lib/find-page-file'

const router = Router()
const isProd = process.env.NODE_ENV === 'production'

const routes = getPagesRoutes(router)
console.log(routes)

router.get('/api/:user?', req => {
  const { params, query, url } = req
  const { user } = params

  console.log('GET TODOS from', url, { user })
  return new Response(`Getting item ${url} in ${user} format.`)
})

router.get('/__reacfy/script.js?', async req => {
  const script = await REACFY_SSR.get('script.js')
  return new Response(script, {
    headers: {
      'Content-Type': 'text/javascript',
    },
  })
})

router.all('*', () => new Response('Not Found.', { status: 404 }))

export const registerApp = async request => {
  return router.handle(request)
}

if (typeof navigator !== 'undefined') {
  console.log('hydrating...')
  window.addEventListener('load', function() {
    const app = document.querySelector('#__reacfy')
    ReactDOM.hydrate(<HocApp />, app)
  })
}
