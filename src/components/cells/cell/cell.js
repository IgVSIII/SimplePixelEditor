import React from 'react';
import './cell.css';

function Cell({color, getClick, defaultGrid }) {

  const cellStyle = {
    backgroundColor: color,
    border: defaultGrid ? "0.1px solid black": "none"
  }

  const mouseController = () => {
    if (window.event.buttons === 1) getClick();
  }
  return (
    <div className="Cell" style={cellStyle} 
      onMouseUp= { getClick }
      onMouseMove = { mouseController } 
      onTouchMove = { getClick }
      >
    </div>
  );
}

export default Cell;