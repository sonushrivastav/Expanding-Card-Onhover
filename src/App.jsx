import React,{ useEffect } from 'react'
import { useRef } from 'react'
import './App.css'
import img1 from "./assets/Anime-1.jpg"
import img2 from "./assets/Anime-2.jpg"
import img3 from "./assets/Anime-3.jpg"
import img4 from "./assets/Anime-4.jpg"
import img5 from "./assets/Anime-5.jpg"

function App() {
  const hoverRef = useRef()
  let panels = hoverRef.current
  //  console.log(hoverRef.current.classList)
    panels?.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveclasses();
        panel.classList.add("active")
     })
   })

  const removeActiveclasses = () => {
    panels?.forEach((panel) => {
      panel.classList.remove("active")
    })
  }
  // useEffect(() => {
  //   onhoverOnCard()
  // },[])

  return (
    <div className='container'>
      <div className='panel active' ref={hoverRef} style={{backgroundImage: `url(${img1})`}}>
        <h3>I don't remember the name</h3>
      </div>
      <div className='panel' ref={hoverRef} style={{backgroundImage: `url(${img2})`}}>
        <h3>Sword art online</h3>
      </div>
      <div className='panel' ref={hoverRef} style={{backgroundImage: `url(${img3})`}}>
        <h3>Forgot the name tbh</h3>
      </div>
      <div className='panel' ref={hoverRef} style={{backgroundImage: `url(${img4})`}}>
        <h3>Demon Slayer : Tanjiro</h3>
      </div>
      <div className='panel' ref={hoverRef} style={{backgroundImage: `url(${img5})`}}>
        <h3>One and Only : Naruto</h3>
      </div>
    </div>
  )
}

export default App
