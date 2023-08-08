
import { useState } from 'react';
import './App.css';
import Tooltip from './Tooltip';

function App() {
  const[position,setPosition]=useState("left");

  const handlebottomToolkit=()=>{setPosition("bottom")}
  const handletopToolkit=()=>{setPosition("top")}
  const handlerightToolkit=()=>{setPosition("right")}
  const handleleftToolkit=()=>{setPosition("left")}
  
  return (
    <>
    <div className='buttons'>
        <button onClick={handlerightToolkit}>Right Tooltip</button>
        <button onClick={handleleftToolkit}>Left Tooltip</button>
        <button onClick={handletopToolkit}>Top Tooltip</button>
        <button onClick={handlebottomToolkit}>Bottom Tooltip</button>
      </div>
      <div className="App">
         <Tooltip position={position}/>
      </div>
    </>
    
  );
}

export default App;
