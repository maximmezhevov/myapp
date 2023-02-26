import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { 
  /*addTodo => addNewdTodo removeTodo => deleteTodo toggleCompletedTodo => toggleStatus,*/ // <- actions
  fetchTodos, deleteTodo, toggleStatus, getTodos, addNewdTodo // <- AsyncThunk... export default
} from "../../features/todoRTAT/todoRTAT3Slice"
// import { v4 } from "uuid"

export const TodoRTAT3 = () => {
  const {todos, fetchStatus, fetchError, interactionError} = useSelector(state => state.todoRTAT3)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos()) || dispatch(getTodos()) //; console.log('render dispatch(fetchTodos2())')
  }, [dispatch])

  return (
    <div>
      <div className='mb-2'>
        <div role='heading' className='text-lg font-bold'>Todo ReduxToolkit AsyncThunk 3</div>
        <div role='heading' className=' text-purple-500'>FULL AsyncThunk</div>
      </div>
      <div id='todoReduxToolkit' className='w-[350px] border p-1'>
        {interactionError && <div className='text-sm text-center text-red-500 mb-1'>An error occured: {interactionError}</div>}
        {/* <button onClick={() => dispatch(getTodos())} title={`...fetch('https://jsonplaceholder.typicode.com/todos?_start=4&_limit=3') ...`} className='w-full mb-1 border px-1 bg-blue-50 hover:bg-blue-100'>
          reload / get todos
        </button> */}
        <TodoForm />
        <div className='h-[250px] overflow-y-scroll'>
        {(fetchStatus === 'pending' || fetchError) &&
          <div className={`h-full flex items-center justify-center text-center ${fetchError && 'text-sm text-red-500'}`}>
            {fetchStatus === 'pending' && 'Loading...'}
            {fetchError && `An error occured: ${fetchError}`}
          </div>
        }
        {fetchStatus === 'fulfilled' &&
          todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
        }
        </div>
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
      dispatch(addNewdTodo(todoValue)
      // dispatch(addTodo({id: v4(), todoValue, completed: false })
      )
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
    dispatch(toggleStatus(id))
  }

  const handlerRemoveTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className='flex justify-between items-center my-1 gap-x-1 border p-1 hover:bg-zinc-50'>
      <input id={`todoRTAT2${todo.id}`} type='checkbox' checked={todo.completed} onChange={() => handlerToggleTodo(todo.id)}className='cursor-pointer' />
      <label htmlFor={`todoRTAT2${todo.id}`} title={todo.title} className={`w-full text-ellipsis overflow-hidden cursor-pointer ${todo.completed && 'line-through text-gray-400'}`}>
        {todo.title}
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