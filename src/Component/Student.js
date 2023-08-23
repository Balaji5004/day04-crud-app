import React, { useState } from 'react'
import Base from '../Base/Base'
import AddStudents from './AddStudents'
import UpdateStudent from './UpdateStudent'
import data from '../Data/data'



const Student = () => {
  const [students, setStudents] = useState(data)
  const [edit, setEdit] = useState()
  

  const deletestudent = (studId) => {
    const remainingstudents = students.filter((stud, idx) => idx !== studId)
    setStudents(remainingstudents)
  }

  return (
    <div>
         <Base
        title={"Student dashboard"}
        description={"welcome to dashboard"}
        >

         <AddStudents
        students={students}
        setStudents={setStudents}
        />

         <UpdateStudent
          students={students}
          setStudents={setStudents}
          edit={edit}
         />

          <div className='card-container'>

            {students.map((stud, idx) => (
            <div className='card' key={idx}>
                 <div className='content'>
                   <h3>{stud.name}</h3>
                   <p>{stud.qualification}</p>
                   <p>{stud.college}</p>
                   <p>{stud.place}</p>
                 </div>
             
             <div className='control'>
                <button button type="button" className="btn btn-outline-warning" 
                onClick={() =>setEdit(idx) }>
                  Edit</button> {""}

                <button button type="button" className="btn btn-outline-danger" 
                onClick={() =>deletestudent(idx)}>
                  Delete</button>
                
             </div>
           </div>

                 ))}
          

           
          </div>


        </Base>

    </div>
  )
}

export default Student