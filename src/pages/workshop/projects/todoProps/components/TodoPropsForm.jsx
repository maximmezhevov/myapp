import { useState } from 'react'
// import {v4 as uuid} from 'uuid'

export const TodoPropsForm = ({todos, setTodos, editMode}) => {
  const [todo, setTodo] = useState('')

  function createTodo(e) {  
    e.preventDefault() 
    if(todo) {
      setTodos([{
        // id: uuid(), 
        id: Date.now(), title: todo, isCompleted: false, favorites: false, }, ...todos])
      setTodo('')
    }
  }

  let clearInput1 = function() {
    if (todo) 
      return <button type='button' className='todo-button' onClick={() => setTodo('')}>Очистить</button>
  }
  // let clearInput2 = function() {setTodo('')}

  const input_disabled = editMode
  const button_disabled = !todo

  return (
    <form role='interface element' className='relative flex items-center' onSubmit={createTodo}>
      <input className='pr-[168px] pl-2 py-2 grow bg-gray-100 rounded border-2 border-transparent placeholder:text-gray-500 placeholder:disabled:text-gray-400 focus:outline-none focus:border-blue-600'
        type='text' 
        value={todo} onChange={(e) => setTodo(e.target.value)} 
        placeholder='Какие планы на сегодня?' 
        disabled={input_disabled}
      />
      {/* <label className='absolute left-[10px]'>
        Какие планы на сегодня?
      </label> */}
      <div className='absolute right-2 flex gap-x-1.5'> 
      
        {clearInput1()}
        {/* {todo && <button className='todo-button' type='button' onClick={() => clearInput2()}>Очистить</button>} */}
        {/* {todo && <button className='todo-button' type='button' onClick={() => setTodo('')}>Очистить</button>} */}

        <button className='todo-button' type='submit'  disabled={button_disabled}>Добавить</button>
      </div>
    </form>
  )
}
