//server packages/imports
const express = require('express')
const cors = require('cors')

//initializing express
const app = express()

//middleware for endpoints
app.use(express.json())
app.use(cors())

//endpoints


//runs server on port 5500
app.listen(5500, () => console.log(`listening on 5500`))