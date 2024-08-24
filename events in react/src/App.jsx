import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({email:"", phone:""})

  const handleClick = () => {
    alert("I am clicked")
  }

  const handelMouse = () => {
    alert(" Mouse hover in side the red div")
  }

  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form);
    
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div onMouseOver={handelMouse} className="red bg-red-600 h-52 w-52 flex justify-center items-center">
        <p>I am a div</p>
      </div>

      <input
       className='mt-6 bg-green-600 text-black border border-1 border-black' 
       type="text" name="email" id="" value={form.email} onChange={handleChange}/>
      <input
       className='mt-6 bg-green-600 text-black border border-1 border-black' 
       type="text" name="phone" id="" value={form.phone} onChange={handleChange}/>
    </>
  )
}
 
export default App
