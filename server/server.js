const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('dotenv').config()
const cors=require('cors')


const port = process.env.PORT || 2000


app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
const router  = require('./router')
app.use('/',router)


mongoose.connect(process.env.mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(port,()=>{
        console.log('DB is connected')
        console.log(`http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(err)
})