import React, {useState} from 'react'
import Data from './data'
import BirdsList from './Components/BirdsList/BirdsList'
import './App.css';

function App() {
  const [birdsData, setBirdsData] = useState(Data)
  return (
    <div className="App">
      <h1>Birds View </h1>
      <BirdsList birdsData={birdsData}/>
    </div>
  );
}

export default App;
