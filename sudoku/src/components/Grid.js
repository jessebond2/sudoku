import React from 'react'
import PropTypes from 'prop-types'
import './Grid.css'

function Grid({ size }) {
  let arr = []
  for (let i = 0; i < size; i++) {
    arr.push(i)
  }
  
  let content = []
  for (let r = 0; r < rows; r++) {
    let row
    let column = []
    for (let c = 0; c < columns; c++) {
      column.push(
        <div key={`${c}::${r}`} className='Grid-cell'>{`${c}::${r}`}</div>,
      )
    }

    row = <div className='Grid-row'>{column}</div>
  }

  return <div className='grid'></div>
}

Grid.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
}

export default Grid
