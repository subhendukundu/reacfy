import { registerApp } from './src/app'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest (request) {
  const res = await registerApp(request)
  return res
}
