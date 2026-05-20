import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [user,setuser]=useState([])

  const handlesubmit=(e)=>{
    e.preventDefault();

    if(name.trim()==="" || email.trim()==="") return;

    const newuser={
      id:Date.now(),
      name:name,
      email:email
    }

    setuser([...user,newuser])
    setname("")
    setemail("")
  }


  return (

    <div className='container'>
      <h1>Registration form</h1>

      <form onSubmit={handlesubmit}>
        <input type='text' placeholder='enter name' value={name} onChange={(e)=>setname(e.target.value)}/>
        <br></br>
        <input type='text' placeholder='enter email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <br></br>
        <br></br>
        <button type='submit'>Register</button>


      </form>

      <h2>Registered User</h2>

      <div className='cards'>
        {user.map((users)=>
         <div className='card' key={users.id}>
          <h3>{users.name}</h3>
          <p>{users.email}</p>
           </div>
        )}
      </div>
    </div>
    
      
    
  )
}

export default App
