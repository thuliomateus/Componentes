// src/InputComponent.js
import React, { useState } from 'react';

const InputComponent = ({ onDataChange }) => {
  const [inputData, setInputData] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData(value);
    onDataChange(value);
  };

  return (
    <div>
      <h2>Input Component</h2>
      <input
        type="text"
        placeholder="Digite algo"
        value={inputData}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputComponent;
