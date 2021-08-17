// Importar express
const express = require('express')
// Executar o express
const server = express()

// request, response
server.get('/', (req, res) => {
  return res.sendFile(__dirname + '/views/index.html')
})

// Roda o servidor na porta 3000
server.listen(3000, () => {
  console.log('rodando')
})
