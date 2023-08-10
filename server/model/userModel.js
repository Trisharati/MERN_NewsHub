const mongoose=require('mongoose')
const userSchema=mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model('user',userSchema)