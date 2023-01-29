export const FavoritesListHeader = ({todos, tab}) => {
  let listHeaderStyles = 'text-xs text-gray-500'

  let favoritesTrue = [...todos].filter(element => element.favorites === true).length

  let favoritesTrueOFisCompletedFalse = [...todos]
    .filter(element => element.isCompleted === false)
    .filter(element => element.favorites === true).length
  let favoritesTrueOFisCompletedTrue = [...todos]
    .filter(element => element.isCompleted === true)
    .filter(element => element.favorites === true).length


  // let favoritesListHeader = function() {
  //   if (tab === 'all' && favoritesTrue !== 0) {
  //     return <header>
  //       <h2 className={listHeaderStyles}>Избранные ({favoritesTrue})</h2>
  //     </header>
  //   } else if (tab === 'planned' && favoritesTrueOFisCompletedFalse !== 0) {
  //     return <header>
  //       <h2 className={listHeaderStyles}>Избранные ({favoritesTrueOFisCompletedFalse})</h2>
  //     </header>
  //   } else if (tab === 'completed' && favoritesTrueOFisCompletedTrue !== 0) {
  //     return <header>
  //       <h2 className={listHeaderStyles}>Избранные ({favoritesTrueOFisCompletedTrue})</h2>
  //     </header>
  //   }
  // }

  return (
    <>
      {/* {favoritesListHeader()} */}
      {/* {tab === 'all' && favoritesTrue !== 0 &&  
        <header>
          <h2 className={listHeaderStyles}>Избранные ({favoritesTrue})</h2>
        </header>
      }
      {tab === 'planned' && favoritesTrueOFisCompletedFalse !== 0 && 
        <header>
          <h2 className={listHeaderStyles}>Избранные ({favoritesTrueOFisCompletedFalse})</h2>
        </header>
      }
      {tab === 'completed' && favoritesTrueOFisCompletedTrue !== 0 &&
        <header>
          <h2 className={listHeaderStyles}>Избранные ({favoritesTrueOFisCompletedTrue})</h2>
        </header>
      } */}
      
      {(
        (tab === 'all' && favoritesTrue !== 0) ||
        (tab === 'planned' && favoritesTrueOFisCompletedFalse !== 0) ||
        (tab === 'completed' && favoritesTrueOFisCompletedTrue !== 0)
      ) &&
        <header>
          <h2 className={listHeaderStyles}>
            {tab === 'all' && `Избранные (${favoritesTrue})`}
            {tab === 'planned' && `Избранные (${favoritesTrueOFisCompletedFalse})`}
            {tab === 'completed' && `Избранные (${favoritesTrueOFisCompletedTrue})`}
          </h2>
        </header>
      }
    </>
  )
}