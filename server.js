const express = require('express')
const server = express()
const usersRouter = require('./routers/usersRouter')
const recommendationsRouter = require('./routers/recommendationsRouter')
const cors = require('cors')

server.use(cors())
server.use(express.json())
server.use('/users',usersRouter)
server.use(function(req, res, next) {
  if (!req.headers.token) {
    return res.status(403).json({ error: 'you must be logged in first!' });
  }
  next();
});
server.use('/recommendations',recommendationsRouter)



module.exports = server
