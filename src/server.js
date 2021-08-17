// Importar express
const express = require('express')
// Executar o express
const server = express()
// Importar as rotas
const routes = require('./routes')

// Set template engine
server.set('view engine', 'ejs')

// Habilitar os arquivos estáticos
server.use(express.static('public'))

// routes
server.use(routes)

// Roda o servidor na porta 3000
server.listen(3000, () => {
  console.log('rodando')
})
