const express=require('express')
require('dotenv').config()
const bodyParser=require('body-parser')
const ejs=require('ejs')
const mongoose=require('mongoose')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','ejs')

mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("connection sucessful")).catch((error)=>console.log(error))

app.get('/',(req,res)=>{res.json({
    sucess:true,
    message:'All good'
})})

app.listen(4000,()=>{
    console.log('Server running on http 3000')
})