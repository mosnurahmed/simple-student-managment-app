import React from 'react'

function PresentStudentList(props) {
  return (
    <div className="present-student"style={{border:"1px solid black"}}>
    <ul>
      {props.students
        .filter((item) => item.isPresent === true)
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

export default PresentStudentList