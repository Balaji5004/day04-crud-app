import React, { useState } from 'react'
import Base from '../Base/Base'

function AddStudents({students, setStudents}) {
    const[name, setName] = useState()
    const[qualification, setQualification] = useState()
    const[college, setCollege] = useState()
    const[place, setPlace] = useState()

    const createstudent = () =>{
        const createobject = {
            name:name,
            qualification:qualification,
            college:college,
            place:place
        }
      setStudents([...students,createobject])
    } 
  return (
    <Base
    title={"Add Students Form "}
    >
    <div>   
        <input
        type='text'
        placeholder='Enter name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
        type='text'
        placeholder='Enter qualification'
        value={qualification}
        onChange={(e)=>setQualification(e.target.value)}
        />
        <input
        type='text'
        placeholder='Enter college name'
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        />
        <input
        type='text'
        placeholder='Enter place'
        value={place}
        onChange={(e)=>setPlace(e.target.value)}
        />

        <button
         onClick={createstudent}
        >Add Student</button>


    </div>
    </Base>
  )
}

export default AddStudents