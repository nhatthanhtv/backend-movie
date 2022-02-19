const express = require('express')
require('dotenv').config()
// const morgan = require('morgan')
const cors =require('cors')
const app = express()
const cookieParser = require('cookie-parser')
const port = process.env.PORT

const db = require('./src/db')
const comment = require('./src/model/commnets')

const route = require('./src/router')

app.use(
  cors({
    origin:"*"
  })
)
db.connect()
// app.use(morgan('combined'))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// router
route(app)


// // thêm comment 
// app.post('/postcomment', (req, res) => {  
//   
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})