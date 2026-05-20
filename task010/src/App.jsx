import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [activetab,setactivetab]=useState("profile")

  return (
    <>
    <div className='container'>
    <h1>User Dashboard</h1>
    

    <div className='tabs'>

     

      <button className={activetab==="profile"?"Active":""} onClick={()=>setactivetab("profile")} >Profile</button>
      <button className={activetab==="setting"?"Active":""} onClick={()=>setactivetab("setting")}>Setting</button>
      <button className={activetab==="orders"?"Active":""} onClick={()=>setactivetab("orders")}>Orders</button>

    </div>

    <div className='content'>
      {activetab==="profile"&&(
        <div>
        <h2>Profile</h2>
        <p>Name:Syed Muhammed Ahmed</p>
        <p>Email:syedmuhammedahmed71@gmail.com</p>
        <p>Age:22</p>
        </div>
      )}

      {activetab==="setting" &&(
        <div>
          <h2>Settings</h2>
          <p>Change password</p>
          <p>Change email</p>
        </div>
      )}

      {activetab==="orders"&&(
        <div>
          <ul>
            <li>Laptop</li>
            <li>Headphones</li>
            <li>Mouse</li>
          </ul>
        </div>
      )}
    </div>

       
    </div>


    
    </>
    
  )
}

export default App
