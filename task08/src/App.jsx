import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[temp,settemp]=useState("")
  const[type,settype]=useState("C")
  const[result,setresult]=useState("")
  const[history,sethistory]=useState([])

  function converter(){

    let converted

    if(type=="C"){
      converted=(temp * 9/5)+32
      setresult(converted +" °F")
      sethistory([...history,`${temp} °C = ${converted} °F`])
    }
    else{
      converted=(temp-32)*5/9
      setresult(converted+" °C")
      sethistory([...history,`${temp} °F = ${converted} °C`])
    }
  }

  return (
    <>
      <div className='container'>
        <h1>TEMPERATURE CONVERTER</h1>
        <input type='number' placeholder='Enter the temperature' value={temp} onChange={(e)=>settemp(e.target.value)}/>
        <select onChange={(e)=>settype(e.target.value)}>
          <option value="C">Cel To Fahrenheit</option>
          <option value="F">Fahrenheit To Cel</option>
        </select>
        <br></br>
        <button onClick={converter}>Convert</button>
        <h2>{result}</h2>
        <ul>
          {history.map((val,index)=>{
            <li key={index}>{val}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
