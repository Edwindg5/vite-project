import React from 'react';

function StudentList(props) {
  return (
    <div className="student-list">
      <h2>Listado de Estudiantes</h2>
      {props.students.length === 0 ? (
        <p>No hay estudiantes registrados.</p>
      ) : (
        <ul>
          {props.students.map((student, index) => (
            <li key={index}>
              <span>{student.name}</span> , <span>{student.age} años</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;