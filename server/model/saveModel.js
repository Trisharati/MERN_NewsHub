const mongoose = require('mongoose')
const saveSchema = mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    url:{
        type:String
    }
})

module.exports = new mongoose.model('savednews',saveSchema)