// import React from 'react'



// const App = () => {
 
//   //Js code 
//   let count = 10

//   function Increase(){
//     count = count+1;
//     console.log(count)
//   }

//   function greet(){
//     alert('Good Eveing Guest')
//   }


//   return (
//     <div>
//       <h1>Hello Guys ,welcome To React Variables</h1>
//       <h2>Likes💖 {count} </h2>
//       <button onClick={Increase}>Likes </button>


//       <button onClick={greet}> Greet </button>
//     </div>
//   )
// }

// export default App


//Solution :Which Updates the value and Updates the screen as well

// - useState()  - Hook in React, Special Type of React varibale - which updates the value and shows
//  the updated value on screen

//Synatx
//  const [variableName , setVariableName] = useState(Inital Value);

// import { useState } from "react";

// function App(){

//   const [likes , setLikes] = useState(12)

//   function IncreaseLike(){
//          setLikes( likes + 1 )
//   }
//   return(
//     <div>
//           <h2>Likes :  {likes} </h2>
//           <button onClick={IncreaseLike}>💖</button>
//     </div>
//   )
// }

// export default App


//Example 3 - Show / Hide password

import { useState } from "react";
import React from "react";  
import styled from "styled-components";
import Button from "./Navbar";

function App(){

  const [show , setShow] = useState(false)

  return(
    <div>
      <input type= { show ? "text" : "password"}  placeholder="Enter Your Password" />
      <button onClick={  ()=> setShow(!false) }>Show / Hide</button>
      <Button />
    </div>
  )
}

export default App