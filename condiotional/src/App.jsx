import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)

  const [todos, setTodos] = useState([
    {
      title:" title1",
      des:"i am todo one "
    },
    {
      title:"title2",
      des:" i am todo two",

    },
    {
      title:"title3",
      des:" i an todo three"
    }
  ])

  const Todo = ({todo}) =>{
    return (<>
        <div className='m-4 border border-1 border-purple-400'>
          <div className="todo">{todo.title}</div>
          <div className='todo'> {todo.des} </div>
        </div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {showbtn?<button>If  true show else false</button>:"false"}


      {todos.map(todo=>{
        return <Todo key={todo.title} todo={todo}/>
      })}


      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          toggle button {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
