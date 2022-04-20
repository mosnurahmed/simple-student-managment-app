import logo from "./logo.svg";
import "./App.css";
import StudentSection from "./component/StudentSection";
import { useState } from "react";
import Forms from "./component/Forms";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <div className="App">
      <Forms
        students={students}
        setStudents={setStudents}
        studentName={studentName}
        setStudentName={setStudentName}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
      <StudentSection
        students={students}
        setStudents={setStudents}
        setStudentName={setStudentName}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
    </div>
  );
}

export default App;
