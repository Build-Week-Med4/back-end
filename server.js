const express = require('express')
const server = express()
const usersRouter = require('./routers/usersRouter')
const cors = require('cors')

server.use(cors())
server.use(express.json())
server.use('/users',usersRouter)


module.exports = server
