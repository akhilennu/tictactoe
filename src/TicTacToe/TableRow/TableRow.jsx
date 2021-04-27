import React, { useState } from 'react'
import Block from '../Block/Block'
export default function TableRow(props) {
  return (
    <tr>
      {props.data.map((value, j) => (
        <Block
          key={value + ':' + j}
          i={props.i}
          j={j}
          value={value}
          gridSize={props.gridSize}
          onClickEvent={props.onClickEvent}
        />
      ))}
    </tr>
  )
}
