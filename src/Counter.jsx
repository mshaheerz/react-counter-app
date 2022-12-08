
import {useState} from 'react'
import './App.css'
function Counter(props){
   let [count,setCount]=useState(0)
   const addCount=()=>{
     setCount(count+1)
    
   }
   const resetCount=()=>{
    setCount(count=0)
   }
   const popCount=()=>{
    if(count!==0){setCount(count-1)}
    
   }
    return(
        <div>
                <h1>Counter</h1>
        <p id='count'>{count}</p>
        <div id="controls">
        <button onClick={popCount} id="decrease">-</button>
        <button onClick={addCount} id="increase">+</button>
        <button onClick={resetCount} id="clear">Clear</button>
        </div>
        </div>

    )
}

export default Counter;