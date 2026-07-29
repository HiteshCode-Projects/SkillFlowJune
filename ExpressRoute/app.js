//Step 1 : Import Modules
const express =  require('express')

//Step 2: CReate Express App/Function
const app  =      express()

//Middleware - Security
app.use(express.json())

//API - Route - Carries Data 

//1. Get Method- Get The Data from Backend and Show on Frontend(User)

app.get('/restraunt' , (req,res)=>{

        res.send('Fetch The Restraint Data -List of Restraunt')

})


//2. Place Order

//Post - Semd The Data From Frontend To Backend

app.post('/order' ,(req,res)=>{
    res.send(`Order Placed Successfully Order Details ${JSON.stringify(req.body)}`)
})


app.listen(3000,()=>{
    console.log('Server Running on http://localhost:3000')
})