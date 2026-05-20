import {useState} from "react"
import {useNavigate} from "react-router-dom"
import questions from "../question"

function Quiz(){

    const[index,setindex]=useState(0)
    const[score,setscore]=useState(0)
    const navigate=useNavigate()

    function handleanswer(option){
        if(option==questions[index].answer){
            setscore(score+1)
        }
        if(index<questions.length-1){
            setindex(index+1)
        }
        else{
            navigate("/result",{state:{score}})
        }

    }

    return(
        <div className="container">
            <h2>Questions {index+1}</h2>
            <h3>{questions[index].question}</h3>
            {questions[index].options.map((opt,i)=>(
            <div key={i}>
                <button onClick={()=>handleanswer(opt)}>{opt}</button>
                
                 </div>
            
            ))}

            <br></br>
            {index>0 &&(<button className="prev-btn" onClick={()=>setindex(index-1)}>Previous</button>)}
        </div>

    )
}
export default Quiz