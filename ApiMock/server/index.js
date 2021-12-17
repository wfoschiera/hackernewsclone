const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('ApiMock/db.json')
const middlewares = jsonServer.defaults()
const PORT = 5000

server.use(middlewares)
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
)

server.use(router)
server.listen(PORT, () => {
  console.log('Foi, funfou, decola foguetinho!')
})
