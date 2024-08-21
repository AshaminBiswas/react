import { useState } from 'react'
import { useEffect } from 'react'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)
  // const [first, setfirst] = useState(0)


  // case1: run on every render 

  // useEffect(() => {
  //   alert("Welcome to my page")
  // }, [])



// case2: run only on first render

  useEffect(() => {
    alert("count was change")
    setColor(color + 1)
  }, [count])



  // case3: run only when certain values change
  
  // useEffect(() => {
  //   alert("first --")
  // }, [color])

  return (
    <>
      {/* USE EFFECT HOOK */}

      <Nav color={"blue" + " red" + color} />
      <div className='top-0 m-auto'>count is {count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Update Count</button>

      
    </>
  )
}

export default App
