// src/DisplayComponent.js
import React from 'react';

const DisplayComponent = ({ data }) => {
  return (
    <div>
      <h2>Display Component</h2>
      <p>Dados recebidos: {data}</p>
    </div>
  );
};

export default DisplayComponent;
