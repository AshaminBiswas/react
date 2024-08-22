import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [card, setcard] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcard(data)
    console.log(data);

  }

  useEffect(() => {

    fetchData()
  }, [])

  return (
    <>
      <Nav />
      <div className='flex justify-between items-end flex-wrap p-10'>
        {card.map((card)=>{
          return (<div className='card border border-1 border-purple-500 w-72 h-72 p-3 mb-10 rounded-2xl flex flex-col justify-between items-center' key={card.id}>
            <h1 className='font-bold text-purple-500 text-center text-xl '>{card.title}</h1>
            <p className='text-cyan-700'> {card.body}</p>
            <span>User Id: {card.userId}</span>
          </div>)
        })}
      </div>
    </>
  )
}

export default App
