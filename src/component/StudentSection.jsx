// import {useState} from 'react'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList';
import AbsentStudentList from './AbsentStudentList';

function StudentSection(props) {
  // const [students,setStudents] = useState([]);

  const toggleHandler = (id) => {
    const student = props.students.find(item => item.id===id);
    props.setStudents(props.students.map((item) => {
      if(item.id === student.id){
        item.isPresent = !item.isPresent;
      }
      return item;
    }))
  };

  return (
    <div className="student-section" style={{display:"flex",justifyContent:"space-around",padding:"20px 0"}}>
      <AllStudentList setStudentName = {props.setStudentName} 
      students ={props.students}
      editMode = {props.editMode}
      setEditMode = {props.setEditMode}
      editableStudent = {props.editableStudent}
      setEditableStudent = {props.setEditableStudent}
      setStudents = {props.setStudents}

      />
      <PresentStudentList  
      students ={props.students}
      toggleHandler ={toggleHandler}
      />
     <AbsentStudentList 
     students ={props.students}
     toggleHandler = {toggleHandler} />
      
  </div>
  )
}

export default StudentSection