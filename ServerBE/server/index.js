 const express = require('express')
 const app = express()
 const cors = require('cors')
 const mongoose = require('mongoose')
 const User = require('./models/user.model')
 const jwt = require('jsonwebtoken')


 app.use(cors())
 app.use(express.json())

 mongoose.connect('mongodb://localhost:27017/users')

 app.post('/api/register', async (req,res)=>{
    console.log(req.body)
    try{
        await User.create({
            name:req.body.name,
            email:req.body.email,
            pass:req.body.pass
        })
        res.json({status:'ok'})
    } catch(err){
        res.json({status:'error', error:'Duplicate email'})

    }
 }),

 app.post('/api/login', async (req,res)=>{
     
       const user=  await User.findOne({
            email:req.body.email,
            pass:req.body.pass
        })
        if(user){
            const token = jwt.sign({
                _id:user._id,
                name:req.body.name, 
                email:req.body.email,   
            },'secret123')

            return res.json({status:'ok',token: token, user:user })
        }else{
            return res.json({status:'error',user: false})

        }
  
 }),

 app.listen(1337,()=>{
    console.log('Server  started on 1337')
 })

