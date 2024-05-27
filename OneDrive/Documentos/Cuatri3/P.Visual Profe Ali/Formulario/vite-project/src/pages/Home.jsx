import React, { useState } from 'react';
import StudentForm from '../components/molecules/StudentForm';
import StudentList from '../components/organisms/StudentList';

function Home() {
  const [students, setStudents] = useState([]);

  function handleAddStudent(student) {
    setStudents([...students, student]);
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Registro de Estudiantes</h1>
      <StudentForm onAddStudent={handleAddStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default Home;