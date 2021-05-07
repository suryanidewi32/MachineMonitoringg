var express = require('express')
var router = express.Router()
const MongoDB = require('../MongoDB')

const user = MongoDB.Schema.user
const datas = MongoDB.Schema.data
/*************************************************************** */
router.get('/users', async (req, res) => {
    const getUsers = await user.find()
    res.status(200).json(getUsers)
})
/*************************************************************** */
router.post('/users', async(req,res)=>{
    const{email,username,password} = req.body
    const createUser = await user.create({email,username,password})
    res.status(201).json(createUser)
})
/*************************************************************** */
router.get('/data/:id', async (req, res) => {
    const _id = req.params.id
    const getData = await datas.findOne({_id})
    res.status(200).json(getData.data)
})

/*************************************************************** */
router.put('/data/:id', async (req,res)=>{
    const newData = req.body.data
    const _id = req.params.id
    datas.findOne({_id})
    .then(data => {
        data.data = newData
        data.save()
    })
})
/*************************************************************** */
const mongoose = require('mongoose')
const User = mongoose.model("user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./keys')
const requireLogin = require('./requireLogin')
const crypto = require('crypto')
let nodemailer = require('nodemailer');
require('dotenv').config();


let smtp = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,
   secure: false,
   requireTLS: true,
   auth:{
       user:'dewiatop@gmail.com',
       pass:'mbmutixnqixkuetn'
   }
});

router.get('/protected', requireLogin,(req,res)=>{
        res.send("hello user")
    
})

router.post('/signup',(req,res)=>{
   const {fullName,email,password, ConfirmPassword} = req.body
   if(!fullName|| !email || !password || !ConfirmPassword){
       return res.status(422).json({error:"please add fields"})
   }
   User.findOne({email:email})
   .then((savedUser)=>{
       if(savedUser){
           return res.status(422).json({error:"email already exists"})
       }
       bcrypt.hash(password,12)
       .then(hashedpassword=>{
            const user = new User({
                fullName,
                email,
                password:hashedpassword,
                ConfirmPassword:hashedpassword
            })
            user.save()
            .then(user=>{
                res.json({message:"successfullly"})
            })
            .catch(err=>{
                console.log(err)
            })
       })
     
   })
   .catch(err=>{
    console.log(err)
})
})

router.post('/signin',(req, res)=>{
    const {fullName,password} = req.body
    if(!fullName || !password){
        res.status(422).json({error:"please add username or password"})
    }
    User.findOne({fullName:fullName})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid username and password"})
        }
      bcrypt.compare(password,savedUser.password)  
      .then(doMatch=>{
          if(doMatch){
            const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
            res.status(200).send({
                fullName,
                password,
                token})
          }
          else{
            return res.status(422).json({error:"Invalid username and password"})
          }
      })
      .catch(err=>{
          console.log(err)
      })
    })
})

router.post('/reset-password',(req,res)=>{
crypto.randomBytes(32,(err,buffer)=>{
    if(err){
        console.log(err)
    }
    const resetToken = buffer.toString("hex")
    User.findOne({email:req.body.email})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"user doesn't exists"})
        }
        user.resetToken = resetToken
        user.expireToken = Date.now() + 3600000
        user.save().then((result)=>{
            smtp.sendMail({
                to: user.email,
                from:"no-replay@atop.com",
                subject:"password reset",
                html:`
                <p>You requested for password reset</p>
                <h5>click in this <a href="http://localhost:3000/resetPass/${resetToken}">link</a> to reset password</h5>`
            })
            res.json({message:"check your email"})
        })
    })
})
})

router.post('/newpassword', async (req,res)=>{
    const newpassword = req.body.password
    const konfirm = req.body.ConfirmPassword
    const sentToken = req.body.resetToken
    User.findOne({resetToken:sentToken})
    .then(user=>{
    if(!user){
        return res.status(422).json({error:"Try again session expired"})
        }

        bcrypt.hash(newpassword,12)
        .then(hashpassword=>{
        user.password = hashpassword
        user.ConfirmPassword = hashpassword
        user.save()
        return res.status(422).json({
            status: true,
            message: "password successfully update"
        })
    }
        )
})
})





module.exports=router