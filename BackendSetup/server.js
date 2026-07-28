//Backend Rules To Write Code

//Step1 : Import All Required Modules  Whatver we want To use in our Backend Application
//Like Express ,cors , mongoose
//We need to Import These Modules First Before Using Them

// require('module-Name')   //In Build Method

const express  =   require('express')


//Step 2 Create and Express App/Function
 const app =    express()


 //Step 3: Define Routes -API

 // app.methodName(Path,(req,res)=>{} )  Mehod To Create API

 app.get('/',(req,res)=>{
    res.send('Hii Backend API is Running')
 })


 app.get('/login',(req,res)=>{
    res.send('Fill The Login Details')
 })

 app.get('/signup',(req,res)=>{
     res.send('Good Eveing - Fill The Sign up form')
 })



 //Step 4: Start The Server

 //Port. Port is Like Address on Internet, Which Acts Like My Backend Address-So
 //My Frontend can communicate with Backend

 //We have Different Free Ports Like 3000, 5000,8080 

 //  app.listen(Port, function)

 app.listen(3000,()=>{
    console.log('Server Running at http://localhost:3000')
 })