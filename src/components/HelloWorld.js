import React,{useState} from "react";

export default function Helloworld(props) 
 { 
    const [text,settext]=useState(`this`) 
 const updatevalu=()=>{
    console.log("submit button was clicked");
    settext("helo world");
   
 }
 const updatehello=()=> {
    console.log("submit button was clicked");
    

 }
  return( 
  <div className="App">
    <div className="container">
        
  <h1>{props.heading}</h1>
      <div>
  <input className="form-control" value={text} onChange={updatehello}></input>
     </div>
  <div>
  <button className="btn btn-primary" onClick={updatevalu}>submit</button>
  </div>
  
   </div>
  </div>
  
)
}