import express from 'express';
import mongoose from 'mongoose';
import { UserModel } from './db.js';
import jwt from "jsonwebtoken"
import {JWT_PASSWORD} from "./config.js"
import cors from 'cors'
import { userMiddleware } from './middlware.js';

const app =express();
app.use(express.json())
app.use(cors())


app.post('/signup',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try{
        await UserModel.create({
            username:username,
            password:password
        })
        res.json({
            message:"User signed up"
        })
    } catch(e){
        res.status(411).json({
            message:"User already exist"
            })
    }
    console.error()
})

app.post('/signin', async(req,res)=>{
    const username =req.body.username;
    const password=req.body.password;
 
    const existingUser = await UserModel.findOne({
       username,
       password
    })
 
    if (existingUser){
       const token = jwt.sign({
          id:existingUser._id
       },JWT_PASSWORD)
 
       res.json({
          token
       })
    } else{
       res.status(403).json({
          message:"Incorret creddentials"
       })
    }
      
 })

 

 app.post('/logout',async(req,res)=>{
    res.cookie('jwt',"")
    res.redirect('/signin')
 })

 app.listen(5000)