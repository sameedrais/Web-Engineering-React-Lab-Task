import {Link} from "react-router-dom"
import posts from "../../post"

function Home(){

    return (
        <div className="container">
            <h1>My Blogs</h1>

            <div className="posts">
                {posts.map((post)=>(
                    <div key={post.id} className="card">
                        <h2>{post.title}</h2>
                        <p>{post.summary}</p>
                        <Link to={`/post/${post.id}`}>Readmore</Link>

                        
                     </div>
                ))}
            </div>
        </div>
    )
}
export default Home