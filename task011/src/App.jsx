
import Home from "./assets/pages/Home"
import Postdetail from "./assets/pages/postDetails"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'

function App() {
  

  return (
    <BrowserRouter>

     <Routes>

       <Route path="/" element={<Home/>} />

       <Route path="/post/:id" element={<Postdetail/>} />

     </Routes>

    </BrowserRouter>
  )
}

export default App
