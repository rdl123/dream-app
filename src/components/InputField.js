import React from 'react';
import '../styles/InputField.css';

const InputField = ({ label, value, onChange, id }) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input 
        type="text" 
        id={id} 
        value={value} 
        onChange={onChange} 
        required 
      />
    </div>
  );
};

export default InputField;
