import {Link} from "react-router-dom"

function Navbar(){
    return(
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/add">Addstudent</Link>
        <Link to="/profiles">Profiles</Link>
    </nav>
    )
}
export default Navbar