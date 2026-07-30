const express = require('express')
const cors  = require('cors')


const app = express()

//Middleware
 app.use(cors())   //Enable The Cors so we can share resouce/data even though having different address
app.use(express.json())


//API
app.post('/login' , (req,res)=>{

const {name , email} = req.body    //Frontend

console.log(name)

//Simple Validation
if(name && email){
    res.json({ message:`Welcome , Good Eveing ${name}`  })
}else{
    res.json({ message: ' Name and Email Both are required '  })
}


});


app.get('/', (req,res)=>{
    res.json({
        message:'Backend Running'
    })
})


app.listen(3000, ()=>{
    console.log("Server Running at http://localhost:3000")
})