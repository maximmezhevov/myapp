import { TodoItem } from "./TodoItem"

export const FavoritesList = ({todos, setTodos, editMode, setEditMode, abbilityСancelTask, tab}) => {

  let favoritesTrue = [...todos].filter(element => element.favorites === true).length
  
  let favoritesTrueOFisCompletedFalse = [...todos]
    .filter(element => element.isCompleted === false)
    .filter(element => element.favorites === true).length
  let favoritesTrueOFisCompletedTrue = [...todos]
    .filter(element => element.isCompleted === true)
    .filter(element => element.favorites === true).length

  return (
    <>
      {(
        (tab === 'all' && favoritesTrue !== 0) ||
        (tab === 'planned' && favoritesTrueOFisCompletedFalse !== 0) ||
        (tab === 'completed' && favoritesTrueOFisCompletedTrue !== 0)
      ) &&
        <ul>
          {([...todos]
            .filter(element => element.favorites === true )
            .map(todo =>  {
              return ((
                (tab === 'all' && favoritesTrue !== 0) || 
                (tab === 'planned' && todo.isCompleted === false && favoritesTrue !== 0) ||
                (tab === 'completed' && todo.isCompleted === true && favoritesTrue !== 0)
              ) && 
                <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} editMode={editMode} setEditMode={setEditMode} abbilityСancelTask={abbilityСancelTask}/>
              )
            })
          )}
        </ul>
      }
    </>
  )
}