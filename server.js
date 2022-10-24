const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { readdirSync } = require('fs')
const connectDB = require('./config/db')

require('dotenv').config();

const app = express()
connectDB()


const port =process.env.PORT
app.listen(port,()=>{
    console.log('Server is running on port '+port)
})