import React from 'react';
import './App.css';
import Bikes from './bikes';
import Cars from './cars';
import Food from './food';
import './components.css';

function App() {
  return (
    <div>
      <h1>Component Render</h1>
      <Bikes/>
      <Cars/>
      <Food/>
    </div>
  );
}

export default App;
