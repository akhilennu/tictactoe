import React, { useState } from 'react'
import './Block.css'

export default function Block(props) {
  let [value, setValue] = useState(props.value ? '' : props.value)
  let setValueParam = () => {
    setValue('X')
    props.onClickEvent(props.i, props.j)
  }
  let totalSize = 30
  let [size, setSize] = useState(totalSize / props.gridSize)
  console.log(props)
  return (
    <td>
      <input
        className='block'
        type='button'
        value={value}
        style={{ height: size + 'em', width: size + 'em' }}
        onClick={setValueParam}
      ></input>
    </td>
  )
}
