import React from 'react'
import Footer from '../src/Footer'
import Sign from './Sign'

function Navbar() {
  return (
    <div>
      <ul className='flex gap-4 p-10'>
        <li>ashamin</li>
        <li>about</li>
        <li>biswas</li>
        <Sign/>
      </ul>
      <Footer/>
    </div>
  )
}

export default Navbar
