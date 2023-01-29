export const TodosListHeader = ({todos, tab}) => {
  let listHeaderStyles = 'text-xs text-gray-500'

  let favoritesTrue = [...todos].filter(element => element.favorites === true).length
  let favoritesFalse = [...todos].filter(element => element.favorites === false).length
  
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

  // let todosListHeader = function() {
  //   if (tab === 'all' && favoritesFalse !== 0 && favoritesTrue !== 0) {
  //     return <header>
  //       <h2 className={listHeaderStyles}>Все ({favoritesFalse})</h2>
  //     </header>
  //   } else if (tab === 'planned' && favoritesFalseOFisCompletedFalse !== 0 && favoritesTrueOFisCompletedFalse !== 0) {
  //     return <header>
  //       <h2 className={listHeaderStyles}>Заплонированные ({favoritesFalseOFisCompletedFalse})</h2>
  //     </header>
  //   } else if (tab === 'completed' && favoritesFalseOFisCompletedTrue !== 0 && favoritesTrueOFisCompletedTrue !== 0) {
  //     return <header>
  //       <h2 className={listHeaderStyles}>Завершенные ({favoritesFalseOFisCompletedTrue})</h2>
  //     </header>
  //   }
  // }
  return (
    <>
      {/* {todosListHeader()} */}
      
      {/* {(tab === 'all' && favoritesFalse !== 0 && favoritesTrue !== 0) &&  
        <header className={listHeaderStyles}>Все ({favoritesFalse})</header>
      }
      {(tab === 'planned' && favoritesFalseOFisCompletedFalse !== 0 && favoritesTrueOFisCompletedFalse !== 0) && 
        <header className={listHeaderStyles}>Заплонированные ({favoritesFalseOFisCompletedFalse})</header>
      }
      {(tab === 'completed' && favoritesFalseOFisCompletedTrue !== 0 && favoritesTrueOFisCompletedTrue !== 0) &&
        <header className={listHeaderStyles}>Завершенные ({favoritesFalseOFisCompletedTrue})</header>
      } */}

      {(
        (tab === 'all' && favoritesFalse !== 0 && favoritesTrue !== 0) ||
        (tab === 'planned' && favoritesFalseOFisCompletedFalse !== 0 && favoritesTrueOFisCompletedFalse !== 0) ||
        (tab === 'completed' && favoritesFalseOFisCompletedTrue !== 0 && favoritesTrueOFisCompletedTrue !== 0)
      ) &&
        <header className={listHeaderStyles}>
          <h2>
            {tab === 'all' && `Все (${favoritesFalse})`}
            {tab === 'planned' && `Заплонированные (${favoritesFalseOFisCompletedFalse})`}
            {tab === 'completed' && `Завершенные (${favoritesFalseOFisCompletedTrue})`}
          </h2>
        </header>
      }
    </>
  )
}