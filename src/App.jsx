import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div className='container'>
      <div className='panel active' style="background-image: url('./assets/Anime-1.jpg')">
        <h3>I don't remember the name</h3>
      </div>
      <div className='panel' style="background-image: url('./assets/Anime-2.jpg')">
        <h3>Sword art online</h3>
      </div>
      <div className='panel' style="background-image: url('./assets/Anime-3.jpg')">
        <h3>Forgot the name tbh</h3>
      </div>
      <div className='panel' style="background-image: url('./assets/Anime-4.jpg')">
        <h3>Demon Slayer : Tanjiro</h3>
      </div>
      <div className='panel' style="background-image: url('./assets/Anime-5.jpg')">
        <h3>One and Only : Naruto</h3>
      </div>
    </div>
  )
}

export default App
