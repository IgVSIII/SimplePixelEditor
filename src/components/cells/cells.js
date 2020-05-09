import React, { useState, useEffect }  from 'react';
import './cells.css';
import Cell from './cell'
import { createArray }  from '../../utilits'
import { changeArray }  from '../../utilits'

function Cells({defaultSize, defaultGrid, color}) {
  const [cellsState, setCellsState] = useState(createArray(defaultSize,defaultSize));

  const updateCell = (index) => {
    setCellsState(changeArray(cellsState, index, color ))
  }

  let addStyles = {
    width: defaultSize*32+"px"
  }

  useEffect(()=> {
    setCellsState(createArray(defaultSize,defaultSize))
  }, [defaultSize])

  return (
    <div className="Cells" style={addStyles}>
      {cellsState.map((elem , index )=> 
          (<Cell 
            key={index} 
            color={elem} 
            getClick = {() => updateCell(index)}
            defaultGrid = {defaultGrid}
            />
          )
        )
      }
    </div>
  );
}

export default Cells;