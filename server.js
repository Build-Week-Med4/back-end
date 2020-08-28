const express = require('express')
const server = express()
const usersRouter = require('./routers/usersRouter')
const recommendationsRouter = require('./routers/recommendationsRouter')
const cors = require('cors')

server.use(cors())
server.use(express.json())
server.use('/users',usersRouter)
server.use('/recommendations',recommendationsRouter)


module.exports = server
