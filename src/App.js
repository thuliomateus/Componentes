// src/App.js
import React, { useState } from 'react';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';

function App() {
  const [data, setData] = useState('');

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div className="App">
      <h1>React Component Props Example</h1>
      <InputComponent onDataChange={handleDataChange} />
      <DisplayComponent data={data} />
    </div>
  );
}

export default App;
