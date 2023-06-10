import React, {useState} from 'react'
import { MdOutlineDone } from 'react-icons/md'
import Tippy from '@tippyjs/react';
import { AiOutlinePlus } from 'react-icons/ai'
import 'tippy.js/dist/tippy.css'; 

function App() {

  const [todo, setTodo ] = useState([]);
  const [todoName, setTodoName ] = useState('');
  const [warnMessage, setWarnMessage ] = useState('');


  const AddTodo = (event) => {
    event.preventDefault();
    if(todoName) {
      if(!todo.find((e) => e.name === todoName)) {
        const newTodo = { id: todo.length + 1, name: todoName}
        setTodo([...todo, newTodo]);
        setTodoName('');
        setWarnMessage('');
      } else {
        setWarnMessage('Please enter a different name.')
      }
    } else {
      setWarnMessage('Name is cannot be empty.')
    }
  }

  const RemoveTodo = (id) => {
    const newTodo = todo.filter(obj => obj.id !== id)
    setTodo(newTodo)
  }

  return (
    <>
        <div className=" max-w-[70rem] min-h-screen todocontainer mx-auto items-center bg-neutral-900 flex flex-col px-2 py-4">
          <h1 className='font-semibold text-2xl uppercase text-neutral-100'>To Do App</h1>
          <hr className='w-full my-4 h-[1px] opacity-25'/>
          <form onSubmit={AddTodo} action="" className='flex w-full gap-2' >
            <input
            onChange={(e) => setTodoName(e.target.value)}
            value={todoName}
            type="text"
            placeholder='To do ismi girin.'
            className='w-full outline-none focus:placeholder-transparent font-medium placeholder:text-neutral-600 h-10 text-lg bg-neutral-800 text-neutral-300 rounded px-2' />
            <button
            type='submit'
            className=' w-10 h-10 flex items-center justify-center border outline-none border-green-500 text-green-500 rounded focus:bg-green-500 focus:text-white transition'><AiOutlinePlus/></button>
          </form>
            {warnMessage && <p className='text-white rounded-sm mt-4 w-full bg-red-950 border-red-900 border px-2 py-1'>{warnMessage}</p>}

          <hr  className='w-full opacity-25 my-4 h-[.6px] bg-gray-300'/>
          <div className="flex w-full flex-col gap-4">
          {todo.length !== 0 ? (
            todo.map(to => 
              <div className='bg-neutral-800 rounded-sm flex justify-between w-full px-2 transition items-center py-2' key={to.id}>
               <div className="relative">
               <small className='absolute top-[-4px] text-sm font-medium  text-neutral-600'>{to.id}</small><p className='ml-7 text-neutral-300 font-medium'>{to.name}</p>
               </div>
                  <Tippy content="Done">
                      <button onClick={() => RemoveTodo(to.id)} className="delete bg-green-500 text-white text-lg p-1 rounded"><MdOutlineDone/></button>
                  </Tippy>
                
              </div>
            )
          ) : <p className='text-neutral-600 text-xl rounded-sm mt-4 w-full text-center px-2 py-1'>The to-do list is empty.</p>}
          </div>

        </div>
        <div className='bg-neutral-800 text-neutral-300 px-2 py-4'><div className='max-w-[70rem] mx-auto '><a href="https://github.com/kivance/React-Exercises-1-To-Do-App" className='mx-auto text-neutral-500 hover:underline underline-offset-2  text-[.9rem]'>This website is open-source on GitHub</a></div></div>
    </>
  );
}

export default App;
