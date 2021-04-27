import { number } from 'prop-types'
import React, { useState } from 'react'
import Grid from './Grid/Grid'
import './TicTacToe.css'
import Slider from '@material-ui/core/Slider'

export default function TicTacToe(props) {
  let [value, setValue] = useState('X')
  let [gridSize, setGridSize] = useState(3)
  let [winSize, setWinSize] = useState(3)

  function changeGridSize(e) {
    if (!e.target.value) {
      setGridSize(3)
      return
    }
    let val = parseInt(e.target.value)
    if (val < 3) {
      val = 3
    } else if (val > 7) {
      val = 7
    }
    setGridSize(val)
  }

  return (
    <div className='center'>
      <h1>
        Play with grid size {gridSize}
        <input min={3} max={7} type={'number'} value={gridSize} onChange={changeGridSize} />
      </h1>
      <h1>Connect {winSize} to win</h1>
      <Grid key={gridSize} gridSize={gridSize} winSize={winSize} />
    </div>
  )
}
