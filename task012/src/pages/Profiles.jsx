
function Profile({students}){

    return(
        <div className="container">

            <div className="cards">

                {students.map(s=>(
                    <div key={s.id} className="card">
                        <h3>{s.name}</h3>
                        <p>Age:{s.age}</p>
                        <p>Course:{s.course}</p>
                    </div>
                ))}
            </div>
        </div>
    )


}
export default Profile