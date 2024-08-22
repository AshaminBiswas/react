import React from 'react'

function Nav() {
  return (
    <div className='bg-purple-400 h-12 flex justify-between items-center px-9'>
      <div className='font-bold text-3xl cursor-pointer'>Logo</div>
      <ul className='flex gap-8 text-xl font-semibold '>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Json</li>
        <li className='cursor-pointer'>Data</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
    </div>
  )
}

export default Nav
