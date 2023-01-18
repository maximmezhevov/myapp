import { useState } from 'react'

export const Test = () => {
  const projrcts = [
    {id: '1', category: 'projects'},
    {id: '2', category: 'projects'},
    {id: '3', category: 'projects'},
    {id: '4', category: 'workshop'},
    {id: '5', category: 'workshop'},
    {id: '6', category: 'workshop'}
  ]

  const categoryNav = () => {
    const [active, setActive] = useState(null)
    return(
      <div className='h-24'>
        <CategoryNav 
          projrcts={projrcts} category='projects' 
          active={active} setActive={setActive} />
        <CategoryNav 
          projrcts={projrcts} category='workshop' 
          active={active} setActive={setActive} />
      </div>
    )
  }

  return categoryNav()
}

const CategoryNav = ({projrcts, category, active, setActive, }) => {

  const activeCategory = () => {
    if (active === category) {
      return setActive(null)
    } return setActive(category)
  }
  return (
    <div>
      <button onClick={activeCategory}>{category}</button>
      {active === category &&
        <div>
          {projrcts
            .filter(p => p.category === category)
            .map(p => 
              <div key={p.id}>id: {p.id}, category: {p.category}</div>
            )}
        </div>  
      }
    </div>
  )
}