import cn from 'classnames'
export const Navigation = ({todos, tab, setTab, editMode}) => {

  let isActive = function(isActive) {if (tab === isActive) return 'bg-gray-100'}

  let lengthTodos = todos.length
  let lengthIsCompletedFalse = [...todos].filter(element => element.isCompleted === false).length
  let lengthIsCompletedTrue = [...todos].filter(element => element.isCompleted === true).length

  let button_disabled = editMode

  return (
    <nav className='flex items-center p-2 '>
      <button className={cn('todo-button basis-1/3 rounded-none rounded-l', isActive('all'))} 
        onClick={() => setTab('all')}
        disabled={button_disabled}
      >
        Все ({lengthTodos})
      </button>
      <button className={cn('todo-button basis-1/3 rounded-none border-x-0 border-y', isActive('planned'))}
        onClick={() => setTab('planned')}
        disabled={button_disabled}
      >
        Заплонированыые ({lengthIsCompletedFalse})
      </button>
      <button className={cn('todo-button basis-1/3 rounded-none rounded-r', isActive('completed'))}
        onClick={() => setTab('completed')}
        disabled={button_disabled}
      >
        Завершрнные ({lengthIsCompletedTrue})
      </button>
    </nav>
  )
}