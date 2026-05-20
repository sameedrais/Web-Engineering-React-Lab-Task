import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setCount]=useState(0)
  const[history,sethistory]=useState([])

  const handleincrement=()=>{
    const incrementcount=count +1;
    setCount(incrementcount)
    sethistory([...history,incrementcount])
  };

  const handledecrement=()=>{
    const decrementcount=count -1;
    setCount(decrementcount)
    sethistory([...history,decrementcount])
  }
  const handlereset=()=>{
    setCount(0)
    sethistory([...history,0])
  }
  const clear=()=>{
    sethistory([])
  }

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>HISTORY OF COUNT</h1>
      <h2>{count}</h2>
      <button onClick={handleincrement}>increment</button>
      <button onClick={handledecrement} style={{margin:"0 10px"}} >decrement</button>
      <button onClick={handlereset}>reset</button>
      <button style={{background:"red",margin:"0 10px"}} onClick={clear}>clear</button>
      <h3 style={{marginTop:"30px"}}>History</h3>

      <ul style={{ display: "flex",
          justifyContent: "center",
          gap: "10px",
          listStyle: "none",
          padding: 0}}>
        {history.map((value,index)=>(
          <li key={index}  style={{
            background: "#eee",
            padding: "5px 10px",
            borderRadius: "5px",
          }}>{value}</li>

        ))}
      </ul>
    </div>
  )
}

export default App
