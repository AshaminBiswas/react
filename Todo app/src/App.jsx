import { RiDeleteBin6Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';



const App = () => {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }

  }, [])


  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }


  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    saveToLocalStorage()
  }

  const handleDelete = (e, id) => {

    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLocalStorage()

  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)

    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLocalStorage()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLocalStorage()
  }


  return (



    <div class="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className='relative md:w-[80%] w-full  md:mx-auto mt-10 rounded-3xl'>
        <div className='absolute top-0 flex w-full justify-center '>
          <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000 text-white' />
        </div>
        <div className=' rounded-md border border-gray-800 bg-gradient-to-b from-gray-950 to-black px-6 py-2 min-h-[70vh] '>
          <h2 className='text-xl font-semibold text-gray-200'>Add Task</h2>
          <div className="form flex justify-between items-center gap-5 pb-5 pt-5">
            <div className='relative w-full'>
              <div className='absolute top-0 flex w-full justify-center'>
                <div className='h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
              </div>
              <input
                onChange={handleChange} value={todo}
                className='text-white block h-12 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50'
                placeholder='Enter Text Here'
              />
            </div>
            <button onClick={handleAdd} className='relative inline-flex h-11 overflow-hidden rounded-full p-[1px] '>
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-semibold text-gray-50 backdrop-blur-3xl'>
                SAVE
              </span>
            </button>
          </div>

          <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
          <label className='mx-2 text-white' htmlFor="show">Show Finished</label>
          <div className='h-[1px] bg-slate-200 opacity-15 w-[90%] mx-auto my-2'></div>
          <h2 className='text-xl font-semibold text-gray-200'>Your Todo</h2>


          {todos.length === 0 && <div className="text-slate-400 text-center">Todo list is empty</div>}


          {todos.map(item => {

            return (showFinished || !item.isCompleted) &&  <div key={uuidv4()} className="todos" >
              <div className="todo flex justify-between items-center w-full my-5 gap-3">
                <input onChange={handleCheckbox}
                  className="h-5 w-5 " type="checkbox" name={item.id} id="" checked={item.isCompleted} />


                <div className="text-white text-lg ">
                  <p className={item.isCompleted ? "line-through text-slate-400" : ""}>{item.todo}</p>
                </div>
                <div className="buttons flex items-center gap-2">
                  <button onClick={(e) => { handleEdit(e, item.id) }} className='relative inline-flex h-8 overflow-hidden rounded-full p-[1px] '>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-4 py-1 text-xl font-medium text-gray-50 backdrop-blur-3xl'>
                      <TiEdit />
                    </span>
                  </button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='relative inline-flex h-8  overflow-hidden rounded-full p-[1px] '>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-4 py-1 text-xl font-medium text-gray-50 backdrop-blur-3xl'>
                      <RiDeleteBin6Line />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          })}


        </div>
      </div>
    </div>
  );
};

export default App;
