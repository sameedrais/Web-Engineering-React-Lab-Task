
function Studenttable({students}){

    return (

        <div className="container">

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map(s=>(
                        <tr key={s.id} >
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.course}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Studenttable