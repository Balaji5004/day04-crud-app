import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { useParams } from 'react-router-dom'

function UpdateStudent({students,setStudents,edit}) {
    const {id} = useParams();
    const editstudent = students[id]
    const[name, setName] = useState()
    const[qualification, setQualification] = useState()
    const[college, setCollege] = useState()
    const[place, setPlace] = useState()

    useEffect (() => {
      setName(editstudent.name)
      setQualification(editstudent.qualification)
      setCollege(editstudent.college)
      setPlace(editstudent.place)
    },[editstudent])

    const updatestudent = () => {
        const upadateobject = {
            name:name,
            qualification:qualification,
            college:college,
            place:place
        }
       students[edit] = upadateobject
       setStudents([...students])
    }
  return (
    <Base
    title={"Update Students Form"}
    >
    <div>
        <input
        type='text'
        placeholder='Enter name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type='text'
        placeholder='Enter qualification'
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
        />
        <input
        type='text'
        placeholder='Enter college'
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        />
        <input
        type='text'
        placeholder='Enter place'
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        />

        <button onClick={updatestudent}> Update Student  </button>

    </div>
    </Base>
  )
}

export default UpdateStudent