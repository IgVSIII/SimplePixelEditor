export const createArray = (sizeX = 1, sizeY = 1) => {
  const color = "#fff"; 
  return Array(sizeX*sizeY).fill(color)
}

export const changeArray = (oldArray, elem, color) => {
    return oldArray.map((el, index)=> ( index===elem ? color : el))
}

