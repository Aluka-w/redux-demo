import React, { useState } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./index.css"

function App() {
  const [list, setList] = useState([])
  return (
    <>
      <TransitionGroup>
        {list.map((item, index) => (
          <CSSTransition 
            key={index} 
            timeout={300} 
            classNames="fade"
          >
            <li>{item}</li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <button onClick={() => setList([...list, "item"])}>toggle</button>
    </>
  )
}

export default App
