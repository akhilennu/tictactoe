import React, { useState } from 'react'
import TableRow from '../TableRow/TableRow'
import './Grid.css'

export default function Grid(props) {
  const table_data = new Array(props.gridSize)
  for (var i = 0; i < table_data.length; i++) {
    table_data[i] = new Array(props.gridSize)
    for (var j = 0; j < table_data[i].length; j++) {
      table_data[i][j] = ''
    }
  }
  console.log(props)

  const onClickEvent = (i, j) => {
    if (table_data[i][j]) {
      table_data[i][j] = value
    }
    if (value === 'X') {
      setValue('O')
    } else {
      setValue('X')
    }
  }

  return (
    <table className='center-table'>
      <tbody>
        {table_data.map((data, index) => (
          <TableRow
            key={index}
            i={index}
            data={data}
            gridSize={props.gridSize}
            onClickEvent={onClickEvent}
          />
        ))}
      </tbody>
    </table>
  )
}
