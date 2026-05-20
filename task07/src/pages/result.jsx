import {useLocation,Link} from "react-router-dom"

function Result(){
    const location=useLocation()
    const score=location.state?.score || 0

    return(
        <div className="container">
        <h1>Quiz Finished</h1>
        <p className="score">Your Score:{score}/5</p>
        <Link to="/">
        <button>Restart Quiz</button>
        
        </Link></div>

    )

}
export default Result