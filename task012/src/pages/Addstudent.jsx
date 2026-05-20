
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Addstudent({addStudent}){
    const [name,setname]=useState("")
    const [age,setage]=useState("")
    const [course,setcourse]=useState("")

    const navigate=useNavigate()

    function handlesubmit(e){
        e.preventDefault()
        addStudent({name,age,course})
        navigate("/students")

    }

    return(
        <div className="container">

            <form onSubmit={handlesubmit}>

                <input type="text" placeholder="name" value={name} onChange={(e)=>setname(e.target.value)}/>
                <input type="number" placeholder="age" value={age} onChange={(e)=>setage(e.target.value)}/>
                <input type="text" placeholder="course" value={course} onChange={(e)=>setcourse(e.target.value)}/>

                <button type="submit">Add</button>

            
            </form>
        </div>
    )
}
export default Addstudent