
import React, { useEffect, useRef, useState } from 'react'
import "./UseRef.css"

export default function UseRef(props) {
  const [name, setName] = useState("")
  // const renderCount = useRef(0)
  const inputRef = useRef("")
  const inputRefName = useRef("")


  useEffect(() => {
    // renderCount.current = renderCount.current+1
    console.log("name is renders")
    inputRefName.current = name
  }, [name])

  function focus() {
    inputRef.current.focus()
  }
  return (
    <div className="ref">
      <h1>useRef Hook</h1>
      <h3>really good hook to learn</h3>
      <input ref={inputRef} type="text" onChange={e => setName(e.target.value)} />
      <span>my name is {name}</span>
      <p>perv name was {inputRefName.current}</p>
      <button onClick={focus}>focus</button>
      {/* <p>the component is render {renderCount.current}</p> */}

    </div>
  )
}