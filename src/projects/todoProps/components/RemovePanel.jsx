export const RemovePanel = ({todos, setTodos, editMode}) => {
  
  function removeIsCompleted() {
    setTodos([...todos].filter(todo => todo.isCompleted !== true))
  }
  function removeTodos() {setTodos([])}

  let lengthTodos = todos.length
  let lengthisCompletedTrue = [...todos].filter(element => element.isCompleted === true).length

  let buttonRemoveIsCompleted_disabled = !todos.length || !lengthisCompletedTrue || editMode
  let buttonRemoveTodos_disabled = !todos.length || editMode

  return (
    <div className='flex items-center justify-between p-2'>
      <button className='todo-button' 
      onClick={() => removeIsCompleted()}
      disabled={buttonRemoveIsCompleted_disabled}
      >
        Удалить завершенные ({lengthisCompletedTrue})
      </button>
      <button className='todo-button'
        onClick={() => removeTodos()}
        disabled={buttonRemoveTodos_disabled}
      >
        Удалить все ({lengthTodos}) запланированные
      </button>
    </div>
  )
}