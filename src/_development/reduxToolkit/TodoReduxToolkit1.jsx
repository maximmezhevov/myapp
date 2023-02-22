import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, toggleCompletedTodo } from "../../features/todoReduxToolkit1/todoSlice"
import { v4 } from "uuid"

export const TodoReduxToolkit1 = () => {
  const todos = useSelector((state) => state.todo.todos)

  return (
    <div id='todoReduxToolkit' className='w-[300px] border p-1'>
      <TodoForm />
      <div /*TodoList*/ className='max-h-[200px] overflow-y-scroll'>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    </div>
  )
}

const TodoForm = () => {
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = useState('')
  const inputAddTodoRef = useRef(null)

  // FOCUS
  // const focusInputAddTodo2 = document.activeElement === inputAddTodoRef.current
  // console.log(focusInputAddTodo2) // работает некорректно
  // c ...disabled={...focused...}... тоже некорректно
  const [focused, setFocused] = useState(false)
  // const onFocus = () => setFocused(true)
  // const onBlur = () => setFocused(false)

  const focusInputAddTodo = () => {
    inputAddTodoRef.current.focus()
  }

  const addTodoHandler = () => {
    if (todoValue) {
      const todo = {
      id: v4(),
      text: todoValue,
      completed: false
      }
      dispatch(addTodo(todo))
      setTodoValue('')
      focusInputAddTodo()
    } else { 
      focusInputAddTodo()
    }
  }

  const clearInputAddTodoHandler = () => {
    setTodoValue('')
    focusInputAddTodo()
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className='relative flex items-center gap-x-1'>
      <input ref={inputAddTodoRef} type='text' value={todoValue} onChange={(e) => setTodoValue(e.target.value)} placeholder='todo...' onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className={`w-full pl-1 pr-5 border ${todoValue ? 'focus:bg-green-50' : 'focus:bg-red-50'} hover:bg-zinc-50`} />
      {todoValue &&
        <button type='button' onClick={clearInputAddTodoHandler} className='absolute right-[34px]'>
          <svg className="w-4 h-4" 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      }
      <button type='submit' onClick={() => addTodoHandler()} className={`w-[26px] h-[26px] border px-1 ${focused ? (todoValue ? 'bg-green-50 hover:bg-green-100' : 'bg-red-50 hover:bg-red-100') : 'hover:bg-zinc-50'}`}
      >
        <svg className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </button>
    </form>
  )
}

const TodoItem = ({todo}) => {
  const dispatch = useDispatch()

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id))
  }

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div className='flex justify-between items-center my-1 gap-x-1 border p-1 hover:bg-zinc-50'>
      <input id={`completed_${todo.id}`} type='checkbox' checked={todo.completed} onChange={() => toggleTodoHandler(todo.id)}className='cursor-pointer' />
      <label htmlFor={`completed_${todo.id}`} title={todo.text} className={`w-full text-ellipsis overflow-hidden cursor-pointer ${todo.completed && 'line-through text-gray-400'}`}>
        {todo.text}
      </label>
      <button onClick={() => removeTodoHandler(todo.id)}>
        <svg className="w-4 h-4" 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  )
}