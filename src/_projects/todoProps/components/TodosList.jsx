import { TodoItem } from './TodoItem'

export const TodosList = ({todos, setTodos, editMode, setEditMode, abbilityСancelTask, tab}) => {

  let lengthFavoritesFalse = [...todos].filter(element => element.favorites === false).length
  let lengthTodos = [...todos].length
  
  let favoritesTrueOFisCompletedFalse = [...todos]
  .filter(element => element.isCompleted === false)
  .filter(element => element.favorites === true).length
  let favoritesTrueOFisCompletedTrue = [...todos]
    .filter(element => element.isCompleted === true)
    .filter(element => element.favorites === true).length
  let favoritesFalseOFisCompletedFalse = [...todos]
    .filter(element => element.isCompleted === false)
    .filter(element => element.favorites === false).length
  let favoritesFalseOFisCompletedTrue = [...todos]
    .filter(element => element.isCompleted === true)
    .filter(element => element.favorites === false).length

  return (
    <> 
    
      {/* {todos.length 
      ? <ul className='grow overflow-y-auto flex flex-col'>
          {tab === 'all' && 
            todos.map(todo => {
              return (
                <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} editMode={editMode} setEditMode={setEditMode} abbilityСancelTask={abbilityСancelTask}/>
              );
            })
          }
          {tab === 'planned' &&
          (isCompletedTrue
            ? todos.map(todo =>  {
                return (
                  todo.isCompleted === false && (
                    <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} editMode={editMode} setEditMode={setEditMode} abbilityСancelTask={abbilityСancelTask}/>
                  )
                );
              })
            : <div className='grow flex justify-center items-center'>
              Заплонированых нет
              </div>
          )
          }
          {tab === 'completed' &&
            (isCompletedTrue
            ? todos.map(todo =>  {
                return (
                  todo.isCompleted === true && (
                    <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} editMode={editMode} setEditMode={setEditMode} abbilityСancelTask={abbilityСancelTask}/>
                  )
                );
              })
            : <div className='grow flex justify-center items-center'>
              Завершенных нет
              </div>
            )
          }
        </ul>
      : <div className='grow flex justify-center items-center'>
          {(tab === 'all' || tab === 'planned') && 'Заплонированых нет'}
          {tab === 'completed' && 'Завершенных нет'}
        </div>
      } */}
      
      {(
        (tab === 'all' && lengthFavoritesFalse !== 0) ||
        (tab === 'planned' && favoritesFalseOFisCompletedFalse !== 0) ||
        (tab === 'completed' && favoritesFalseOFisCompletedTrue !== 0)
      ) 
      ? <ul className='grow flex flex-col'>
          {[...todos]
            .filter(element => element.favorites === false )
            .map(todo =>  {
              return ((
                tab === 'all' || 
                (tab === 'planned' && todo.isCompleted === false) ||
                (tab === 'completed' && todo.isCompleted === true)
              ) && 
                <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} editMode={editMode} setEditMode={setEditMode} abbilityСancelTask={abbilityСancelTask}/>
              )
            })
          }
        </ul>
      : ((
          (tab === 'all' && lengthTodos === 0) ||
          (tab === 'planned' && favoritesTrueOFisCompletedFalse === 0) ||
          (tab === 'completed' && favoritesTrueOFisCompletedTrue === 0) 
        ) &&
          <div className='grow flex justify-center items-center'>
            {(tab ==='all' || tab === 'planned') && 'Заплонированых нет' }
            {(tab === 'completed') && 'Завершенных нет' }
          </div>
        ) 
      }
    </>
  )
}