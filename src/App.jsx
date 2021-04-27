import { hot } from 'react-hot-loader'
import React from 'react'
import './App.css'
import TicTacToe from './TicTacToe/TicTacToe'

const App = () => (
  <div className='App'>
    <TicTacToe />
  </div>
)

export default hot(module)(App)
