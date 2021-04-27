import { number } from 'prop-types'
import React, { useState } from 'react'
import Grid from './Grid/Grid'
import './TicTacToe.css'
import Slider from '@material-ui/core/Slider'

export default function TicTacToe(props) {
  let [value, setValue] = useState('X')
  let [gridSize, setGridSize] = useState(3)
  let [winSize, setWinSize] = useState(3)

  return (
    <div className='center'>
      <h1>
        Play with grid size {gridSize}
        <input
          min={3}
          max={7}
          type={'number'}
          value={gridSize}
          onChange={(e) => setGridSize(parseInt(e.target.value))}
        />
      </h1>
      <h1>Connect {winSize} to win</h1>
      <Grid key={gridSize} gridSize={gridSize} winSize={winSize} />
    </div>
  )
}
