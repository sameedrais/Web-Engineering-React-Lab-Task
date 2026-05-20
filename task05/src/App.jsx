import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [students] = useState([
    { roll: 1, name: "Ahmed", math: 80, science: 70 },
    { roll: 2, name: "Ali", math: 60, science: 90 },
    { roll: 3, name: "Sara", math: 95, science: 85 },
    { roll: 4, name: "Hassan", math: 50, science: 65 }
  ]);
  const [sort,setsort]=useState("")
  const[subject,setsubject]=useState("all")
  let filteredstudents=[...students]

  //Filtering

  if(subject==="math"){
    filteredstudents=filteredstudents.filter(s=>s.math>0)
  }
  else if(subject==="science"){
    filteredstudents=filteredstudents.filter(s=>s.science>0)
  }
  //Sorting

  if(sort==="asc"){
    filteredstudents.sort((a,b)=>(a.math+a.science)-(b.math+b.science))
  }
  else if(sort==="desc"){
    filteredstudents.sort((a,b)=>(b.math+b.science)-(a.math+a.science))
  }

  return (
    <div className='container'>
      <h1>STUDENTS MARKS TABLE</h1>

      <select onChange={(e)=>setsubject(e.target.value)}>
        <option value="all">All SUBJECTS</option>
        <option value="math">Math</option>
        <option value="science">Science</option>
      </select>

      <button onClick={()=>setsort("asc")}>Sort In Ascending</button>
      
      <button onClick={()=>setsort("desc")}>Sort In Descending</button>
     

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Math</th>
            <th>Science</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {filteredstudents.map((filter)=>
          <tr key={filter.roll}>
            <td>{filter.roll}</td>
            <td>{filter.name}</td>
            <td>{filter.math}</td>
            <td>{filter.science}</td>
            <td>{filter.math+filter.science}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    
  )
}

export default App
