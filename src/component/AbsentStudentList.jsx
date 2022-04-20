import React from 'react'

function AbsentStudentList(props) {
  return (
    <div className="absent-student"style={{border:"1px solid black"}}>
    <ul>
      {props.students
        .filter((item) => item.isPresent === false)
        .map((student) => (
          <li>
            <span>{student.name}</span>
            <button onClick={() => props.toggleHandler(student.id)}>Accidentally Added</button>
          </li>
        ))}
    </ul>
  </div>
  )
}

export default AbsentStudentList