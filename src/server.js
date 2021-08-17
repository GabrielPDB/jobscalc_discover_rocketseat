// Importar express
const express = require('express')
// Executar o express
const server = express()

// request, response
server.get('/', (req, res) => {
  return res.render('./index.html')
})

// Roda o servidor na porta 3000
server.listen(3000, () => {
  console.log('rodando')
})
