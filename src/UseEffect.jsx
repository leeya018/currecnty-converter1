// few examples of useEffect hooks that can be use for lot of stuff 
// onMount - so it called only once 
// addEventListener so we can track change , including the cleanup
import React, { useEffect, useState } from 'react'

export default function UseEffect() {

  const [data, setData] = useState("")
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {//called only once because there is no param to change inoder to call it again
    console.log("on mount")
  }, [])

  useEffect(() => {//called each time the window width is changing 
    console.log("width is changing")
  }, [windowWidth])


  function handleResize() {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    //event listener
    console.log("event listener is get called")
    window.addEventListener("resize", handleResize) // resize is an existable var so just need the function
// this is the cleaup function it is gettign invokes each time that data is changed
    return ()=>{
      console.log("remove event lister")
      window.removeEventListener("resize",handleResize)
    }
  }, [data])


  useEffect(() => {
    console.log("data is changing")
  }, [data])
  return (
    <div>
      <input type="text" onChange={e => setData(e.target.value)} />
      <p>{windowWidth}</p>
    </div>
  )
}
