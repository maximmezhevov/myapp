import tailwindcss from 'classnames'
import { useState } from 'react'

export const TodoItem = ({todo, todos, setTodos, editMode, setEditMode, abbilityСancelTask}) => {
  
// REMOVE
  function removeTodo(id) { // "onClick={() => removeTodo(todo.id)" in code
    let removeTodo = [...todos].filter(todo => todo.id !== id)
    setTodos(removeTodo) // or setTodos([...todos].filter(todo => todo.id !== id))
  }

// ISCOPMLETED 
  // function isCompleted(id) {
  //   setTodos([...todos]
  //     .filter(todo => {if (todo.id === id) {todo.isCompleted = !todo.isCompleted}; return todo})
  //     // .map(todo => {if (todo.id === id) {return {...todo, isCompleted:!todo.isCompleted}}; return todo})
  //   )
  // }
// ISCOPMLETED 2
  function isCompleted(id) {
    setTodos([...todos]
      .filter(todo => {
        // if (todo.id === id && abbilityСancelTask === true) {
        //   todo.isCompleted = !todo.isCompleted
        // }  else if (todo.id === id && abbilityСancelTask === false && todo.isCompleted === false) {
        //   todo.isCompleted = !todo.isCompleted
        // } else if (todo.id === id && abbilityСancelTask === false && todo.isCompleted === true) {
        //   return todo.isCompleted
        // }
        // return todo
        if (todo.id === id && (abbilityСancelTask || (!abbilityСancelTask && !todo.isCompleted)))
          todo.isCompleted = !todo.isCompleted
        return todo
      })
      // .map(todo => {
      //   if (todo.id === id && (abbilityСancelTask || (!abbilityСancelTask && !todo.isCompleted)))
      //     return {...todo, isCompleted:!todo.isCompleted}
      //   return todo
      // })
    )
  }

// toggleFavorites 
  function toggleFavorites(id) {
    setTodos([...todos]
      .filter(element => {if (element.id === id) {element.favorites = !element.favorites}; return element})
      // .map(element => {if (element.id === id) {return {...element, favorites:!element.favorites}}; return element})
    )
  }

// EDIT
const [editableTodo, setEditableTodo] = useState('')
  function editTodo(id, todo) {setEditMode(id); setEditableTodo(todo); return false}
  function saveTodo(e, id) {
    e.preventDefault()
    if(editableTodo) {
      setTodos([...todos].map(todo => {if (todo.id === id) todo.title = editableTodo; return todo}))
      setEditMode(null) 
    }
  }

  return (
    <li key={todo.id} 
    className={tailwindcss(
      'hover:bg-gray-100 rounded',
      editMode && 'hover:bg-transparent', 
    )}>
    {editMode === todo.id 
    ? <form onSubmit={(e) => saveTodo(e, todo.id)}
      className='flex relative items-center'>
        <input 
          type='text' 
          value={editableTodo} 
          onChange={(e) => setEditableTodo(e.target.value)}
          /*fucus HTML*/autoFocus
          className='py-2 pr-[248px] pl-1.5 grow bg-gray-100 
          rounded border-2 border-transparent focus:outline-none focus:border-blue-600'
        />
        <div className='absolute right-2 flex gap-x-1.5'>
          <button 
            type='submit'
            disabled={!editableTodo}
            className='todo-button'
          >
            Применить изменения
          </button>
          <button 
            type='button' 
            onClick={() => setEditMode(null)}
            className='todo-button'
          >
            Отменить
          </button> 
        </div>
      </form> 
    : <div className='h-[44px] flex items-center gap-x-2 py-2 px-1.5 break-all text-justify rounded border-2 border-transparent'>
        
        <input 
          // id='checkboxIsCompleted'
          type='checkbox' 
          onChange={() => isCompleted(todo.id)} 
          checked={todo.isCompleted} 
          disabled={editMode || (!abbilityСancelTask && todo.isCompleted)}
          className='cursor-pointer disabled:cursor-default' 
        />
        <h3 // label
          // htmlFor='checkboxIsCompleted'
          onClick={() => isCompleted(todo.id)} 
          className={tailwindcss('grow',
            todo.isCompleted && 'line-through decoration-gray-400 ',
            (editMode || todo.isCompleted) && 'text-gray-400',
            editMode || (!abbilityСancelTask && todo.isCompleted) ? 'cursor-default' : 'cursor-pointer'
          )}
        > 
          {todo.title} 
        </h3>
        <button 
          type='button' 
          onClick={() => toggleFavorites(todo.id)} 
          disabled={todo.isCompleted || editMode}
          className={tailwindcss(
            'todo-button',
            // todo.favorites ? 'border-yellow-300' : 'border-gray-300'
          )}
        >
          Избранное
        </button> 
        <button 
          type='button' 
          onClick={() => editTodo(todo.id, todo.title)} 
          disabled={todo.isCompleted || editMode}
          className='todo-button'
        >
          Редактировать
        </button> 
        <button 
          type='button' 
          onClick={() => removeTodo(todo.id)}
          disabled={editMode}
          className='todo-button'
        >
          Удалить
        </button>
      </div>
    }
  </li>
  )
}