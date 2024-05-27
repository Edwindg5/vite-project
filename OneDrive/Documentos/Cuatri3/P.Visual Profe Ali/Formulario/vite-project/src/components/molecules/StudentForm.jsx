import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

function StudentForm(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAge(e) {
    setAge(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddStudent({ name, age });
    setName('');
    setAge('');
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Alta de Estudiantes</h2>
      <Input
        type="text"
        value={name}
        onChange={handleChangeName}
        label="Nombre:"
      />
      <Input
        type="number"
        value={age}
        onChange={handleChangeAge}
        label="Edad:"
      />
      <Button text="Agregar Estudiante" />
    </form>
  );
}

export default StudentForm;