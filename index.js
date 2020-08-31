require('dotenv').config()
const App = require('./server.js')
const PORT = process.env.PORT || 3000;

App.use(function(req, res, next) {
  if (!req.headers.token) {
    return res.status(403).json({ error: 'No token sent!' });
  }
  next();
});

App.listen(PORT,()=>{
  console.log(`listening on port ${PORT}`)
})
