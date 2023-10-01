import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

const todoList = [
  { id: 1, title: 'Learn about CRA way to initiate React app' },
  { id: 2, title: 'Learn about Vite'},
  { id: 3, title: 'Create app using CRA' },
  { id: 4, title: 'Create app using Vite' },
  { id: 4, title: 'Stick with Vite version' },
]


function App() {
  return (
      <div>

        <h1>My TODO List</h1>
        <ul>
          { todoList.map(item => <li key={item.id}>{item.title}</li>) }
        </ul>
      </div>
  )
}

export default App
