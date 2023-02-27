import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeAllTodo, removeCompletedTodo, removeTodo, toggleCompletedTodo } from "../../features/todoReduxToolkit/todoReduxToolkit3Slice"
import { v4 } from "uuid"

export const TodoReduxToolkit3 = () => {
  const todos = useSelector((state) => state.todoReduxToolkit3.todos)

  return (
    <div>
      <div className='mb-2'>
        <div role='heading' className='text-lg font-bold'>Todo ReduxToolkit 3</div>
        <div className=' text-purple-500'>FULL ReduxToolkit</div>
        <div className='flex gap-x-2'>
            <a href='https://github.com/maximmezhevov/myapp/blob/master/src/_development/reduxToolkit/TodoRTAT3.jsx' target='_blank' className='hover:text-blue-500'>app
              <span className={`text-xs before:content-['_↗']`}>(github)</span>
            </a>
            <a href='https://github.com/maximmezhevov/myapp/blob/master/src/_development/reduxToolkit/TodoReduxToolkit3.jsx' target='_blank' className='hover:text-blue-500'>slice
              <span className={`text-xs before:content-['_↗']`}>(github)</span>
            </a>
          </div>
      </div>
      <div id='todoReduxToolkit' className='w-[350px] border p-1'>
        <TodoForm/>
        <Filter todos={todos}/>
        <div /*TodoList*/ className='h-[200px] overflow-y-scroll'>
          {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
        <Remove todos={todos}/>
      </div>
    </div>
  )
}

const TodoForm = () => {
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = useState('')
  const [focusedInputAddTodo, setFocusedInputAddTodo] = useState(false) // onFocus={() => ..(true)} onBlur={() => ...(false)}

  const inputAddTodoRef = useRef(null)
  const focusInputAddTodo = () => {
    inputAddTodoRef.current.focus()
  }

  const handlerAddTodo = () => {
    if (todoValue.trim().length) {
      dispatch(addTodo({todoValue, id: v4(), completed: false}))
      setTodoValue('')
      focusInputAddTodo()
    } else { 
      focusInputAddTodo()
    }
  }

  const handlerClearInputAddTodo = () => {
    setTodoValue('')
    focusInputAddTodo()
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className='relative flex items-center gap-x-1'>
      <input type='text' value={todoValue} ref={inputAddTodoRef} placeholder='todo...'
      onChange={(e) => setTodoValue(e.target.value)} 
      onFocus={() => setFocusedInputAddTodo(true)} onBlur={() => setFocusedInputAddTodo(false)} 
      className={`w-full pl-1 pr-5 border ${todoValue.trim().length ? 'focus:bg-green-50' : 'focus:bg-red-50'} hover:bg-zinc-50`} />
      {todoValue && 
        <button type='button' onClick={handlerClearInputAddTodo} className='absolute right-[34px]'>
          <svg className="w-4 h-4" 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      }
      <button type='submit' onClick={() => handlerAddTodo()} className={`w-[26px] h-[26px] border px-1 
      ${focusedInputAddTodo 
        ? todoValue.trim().length 
          ? 'bg-green-50 hover:bg-green-100' 
          : 'bg-red-50 hover:bg-red-100' 
        : 'hover:bg-zinc-50'}`}>
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

  const handlerToggleTodo = (id) => {
    dispatch(toggleCompletedTodo(id))
  }

  const handlerRemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div className='flex justify-between items-center my-1 gap-x-1 border p-1 hover:bg-zinc-50'>
      <input id={`completed_${todo.id}`} type='checkbox' checked={todo.completed} onChange={() => handlerToggleTodo(todo.id)}className='cursor-pointer' />
      <label htmlFor={`completed_${todo.id}`} title={todo.text} className={`w-full text-ellipsis overflow-hidden cursor-pointer ${todo.completed && 'line-through text-gray-400'}`}>
        {todo.text}
      </label>
      <button onClick={() => handlerRemoveTodo(todo.id)}>
        <svg className="w-4 h-4" 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  )
}

const Button = ({name, className, ...props}) => {
  return <button {...props} className={`w-full border px-1 hover:bg-zinc-50 disabled:bg-zinc-50/50 disabled:text-zinc-400 ${className}`}>{name}</button>
}

const Remove = ({todos}) => {
  const dispatch = useDispatch()
  const completedTodoLength = todos.filter(todo => todo.completed === true).length
  return (
    <div className='flex mt-1 gap-x-1'>
      <Button onClick={() => dispatch(removeCompletedTodo())} name='removeCompleted' disabled={completedTodoLength == ''} />
      <Button onClick={() => dispatch(removeAllTodo())} name='removeAll' disabled={todos.length == ''} />
    </div>
  )
}

const Filter = ({todos}) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const completedTodoTrueLength = todos.filter(todo => todo.completed === true).length
  const completedTodoFalseLength = todos.filter(todo => todo.completed === false).length
  return (
    <div className='flex mt-1 gap-x-1'>
      <Button name='all' onClick={() => setActiveFilter('all')} className={activeFilter === 'all' && 'bg-sky-50 hover:bg-sky-100'} />
      <Button name='completed' onClick={() => setActiveFilter('completed')} disabled={completedTodoTrueLength == ''} className={activeFilter === 'completed' && 'bg-sky-50 hover:bg-sky-100'}/>
      <Button name='unfinished' onClick={() => setActiveFilter('unfinished')} disabled={completedTodoFalseLength == ''} className={activeFilter === 'unfinished' && 'bg-sky-50 hover:bg-sky-100'} />
    </div>
  )
}