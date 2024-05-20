import React from 'react';
import './TextInput.css';

function TextInput({ value, onChange, placeholder }) {
  return <input className="text-input" type="text" value={value} onChange={onChange} placeholder={placeholder} />;
}

export default TextInput;
