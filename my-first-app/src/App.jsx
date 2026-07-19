import React from "react";
import Btn from "./Button";

function App(){
//Js Code
 
let username = "Anushi"

function Greet(){
  alert('Good Afternoon')
}


  return(
     //HTML Code
    <div>
        <h1 style={{ color:'red' , textAlign:'center' }}>Welcome To React</h1>
        <Btn />
        <h2>My Name is {username} </h2>
        <Btn />
        <button onClick={Greet}>Login</button><br />
        <input placeholder="Enter Your Password"   />
        <Btn />
        <Btn />
        <Btn />



    </div>
  )

}

export default App