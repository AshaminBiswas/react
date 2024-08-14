import { useState } from 'react'
import { useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setpassword] = useState("")

  const PasswordGenerator = useCallback( () =>{
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwnyz"

      if (numberAllowed) string+= "0123456789"
      if (numberAllowed) string+= "!@#$%^&*?"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * string.length +1) 
        pass = string.charAt(char)
        
      }
      setpassword(pass)

  }, [length, numberAllowed, charAllowed, setpassword])

  

  return (
    <>
   
    <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-green-400'>
    <h1 className='text-center text-4xl text-black font-semibold py-4'  >Password Generator</h1>
      <div className='flex  rounded-lg overflow-hidden mb-4'>
        
        <input type="text"
          value={Password}
          className='outline-none w-full my-3 py-1 px-3'
          placeholder='Password'
        />
        <button className='outline-none bg-slate-300 font-semibold px-3 shrink-0 h-8 mt-3'>Copy</button>
      </div>
        <div className=' flex text-sm gap-x-2'>
          <div className='flex items-center gap-x- my-2 '>
              <input type="range" 
              min={6}
              max={20}
              value={length}
              onChange={(e) => {setlength(e.target.value)}}
              />
              <label> length : {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
                <input type="checkbox" 
                  defaultChecked={numberAllowed}
                  id='numberInput'
                  onChange={ () => {
                    setnumberAllowed((prev) => !prev)
                  }}
                />
                <label htmlFor="numberTnput">Number</label>
          </div>
          <div className='flex items-center gap-x-2'>
                <input type="checkbox" 
                  defaultChecked={charAllowed}
                  id='charInput'
                  onChange={ () => {
                    setcharAllowed((prev) => !prev)
                  }}
                />
                <label htmlFor="charInput">Character</label>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default App
