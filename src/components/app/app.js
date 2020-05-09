import React, {useState} from 'react';
import './app.css';
import Cells from '../cells'
import Header from '../header'
import Toolkit from '../toolkit'

function App() {

  const [size, setSize] = useState(16);
  const [grid, setGrid] = useState(true);
  const [color, setColor] = useState("#ccc");

  return (
    <div className="App">
      <Header></Header>
      <Toolkit defaultSize={size} changeSize={setSize}
               defaultGrid={grid} changeGrid={setGrid}
               color={color} changeColor={setColor} >
      </Toolkit>
      <Cells defaultSize={size} defaultGrid={grid} color={color}></Cells>
    </div>
  );
}

export default App;


