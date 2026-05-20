import {Link} from "react-router-dom"

function Home(){

    return(
        <div className="container">
            <h1>QUIZ APPLICATION</h1>
            <Link to="/quiz">
              <button>START THE QUIZ</button>
              </Link>
        </div>
    )
}
export default Home