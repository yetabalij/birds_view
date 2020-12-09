import React, {useState} from 'react'
import Data from './data'
import BirdsList from './Components/BirdsList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Birds View </h1>
      <BirdsList/>
    </div>
  );
}

export default App;
