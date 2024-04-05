const userModel = require('../model/userModel')
const saveModel = require('../model/saveModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { default: mongoose } = require('mongoose')



const register = async(req,res)=>{
    console.log('req body',req.body);
    let token=jwt.sign(req.body,'news')
    const userObj={
        ...req.body,
        password:bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10)),
        token:token
    }
    let isUserExist = await userModel.findOne({email:req.body.email})
    
    if(isUserExist){
        res.status(400).json({
            message:'Email already exists',
            val:2
        })
    }
        else{
            userModel(userObj)
            .save()
            .then(()=>{
                res.status(200).json({
                    message:'User registered successfully',
                    val:1
                })
            }).catch((err)=>{
                res.status(400).josn({
                    message:'Unable to register user',
                    val:3,
                    Error:err
                })
            })
        }
}


const login = async(req,res)=>{
    let isUserExist = await userModel.findOne({email:req.body.email})
    console.log('req.body.email',req.body.email)
    if(isUserExist){
        
        if(bcrypt.compareSync(req.body.password,isUserExist.password)){
            res.status(200).json({
                message:'Logged in successfully',
                userInfo:isUserExist
            })
        }
        else{
            res.status(400).json({
                message:'Wrong Password',
                val:1
            })
            console.log('Wrong Password')
        }
    }
    else{
        res.status(400).json({
            message:'User does not exist',
            val:2
        })
        console.log('User does not exist')
    }
}

const updateGenre = async(req,res)=>{
    userModel.findOneAndUpdate({_id:req.params.userId},{genre:req.body.genre}
        ,{
            new:true
        }).then((data)=>{
            res.status(200).json({
                genre:data.genre
            })
            console.log('new genre',data.genre)
        }).catch((err)=>{
            console.log('Error in updating genre',err)
        })
}

const saveNews = async(req,res)=>{
    
    let news = {
        userId:req.body.userId,
        title:req.body.news.title,
        description:req.body.news.description,
        image:req.body.news.image,
        url:req.body.news.url,
    }
    saveModel(news)
    .save()
    .then((data)=>{
        res.status(200).json({
            info:data._id
        })
    }).catch((err)=>{
        console.log('Error in saving news',err)
    })
}


const getSavedNews = async(req,res)=>{
    
   saveModel.find({userId:new mongoose.Types.ObjectId(req.query.userId)})
    .then((data)=>{
        res.status(200).json({
            collection:data
        })
        console.log('from controller',data)
    }).catch((err)=>{
        console.log('Error in fetching saved news',err)
    })
}


module.exports = {register,login,updateGenre,saveNews,getSavedNews}