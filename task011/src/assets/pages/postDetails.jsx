import {useParams} from "react-router-dom"
import posts from "../../post"

function Postdetail(){

    const {id}=useParams()
    const post=posts.find(p=>p.id===Number(id))

    return (
        <div className="container">

            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}
export default Postdetail