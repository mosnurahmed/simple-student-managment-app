import React from 'react'

function AllStudentList(props) {

  
  const editStudentHandler = (id) => {
    const toBeEditedStudent = props.students.find((item) => item.id === id);

    props.setEditMode(true);
    props.setStudentName(toBeEditedStudent.name);
    props.setEditableStudent(toBeEditedStudent);
  };
  const deleteStudentHandler = (id) => {
    console.log(id)
    props.setStudents(props.students.filter((item) => item.id !== id));
  };

  const presentHandler = (id) => {
    const student = props.students.find(item => item.id===id);
   
    if(student.isPresent===true){
      alert("This student is already present in present list");
    }
    else if(student.isPresent===false) {
      alert("This student is already present in absent list");
    } 
    else if(student.isPresent=== undefined){
      props.setStudents(props.students.map((item) =>{
        if(item.id===student.id){
          item.isPresent= true;
        }
        return item;
      }))
    }
  };
  const absentHandler = (id) => {
    const student = props.students.find(item => item.id===id);
    console.log(student)
   
    if(student.isPresent===true){
      alert("This student is already present in present list");
    }
    else if(student.isPresent===false) {
      alert("This student is already present in absent list");
    } 
    else if(student.isPresent=== undefined){
      props.setStudents(props.students.map((item) =>{
        if(item.id===student.id){
          item.isPresent= false;
        }
        return item;
      }))
    }
  };
  return (
    <div className="all-student" style={{border:"1px solid black"}}>
          <ul>
            {props.students.map((student) => (
              <li>
                <span>{student.name} </span>
                <button onClick={() => editStudentHandler(student.id)}>Edit</button>
                <button onClick={() => deleteStudentHandler(student.id)}>Delete</button>
                <button onClick={() => presentHandler(student.id)}> Present</button>
                <button onClick={() => absentHandler(student.id)}>Absent</button>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default AllStudentList