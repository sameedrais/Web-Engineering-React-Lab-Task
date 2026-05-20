import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Addstudent from './pages/Addstudent'
import Profile from './pages/Profiles'
import Studenttable from './pages/Students'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    {id:1, name:"Ahmed", age:20, course:"CS"},
    {id:2, name:"Ali", age:22, course:"SE"}
  ])

  function addStudent(student){
    setStudents([...students,{...student,id:Date.now()}])
  }

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Studenttable students={students} />} />
        <Route path="/add" element={<Addstudent addStudent={addStudent} />} />
        <Route path="/profiles" element={<Profile students={students} />} />
      </Routes>

    </BrowserRouter>
    
  )
}

export default App
