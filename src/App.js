import React,{useState,useReducer} from 'react'
import './App.css';
// import { joke } from './Joke';

const value = 5
const reducer = (state,action) => {
  if(action.type==="increment"){
    return state+1    
  }else{
    if(state===0){
     return  state=0
    }else{
      return state-1
    }
  }
}
function App() {
  
  const [state, dispatch] = useReducer(reducer, value)

  return (
  <>
  <div>
    <p>{state}</p>
   
    <button onClick={()=>dispatch({type:"increment"})}>INC</button>
    <button onClick={()=>dispatch({type:"decrement"})}>DEC</button>


    {/* <h1>{joke.joke}</h1> */}
    {/* <button onClick={change} style={{cursor:"pointer"}}>Next</button> */}
  </div>
  </>
  );
}

export default App;
