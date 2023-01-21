import { useState } from 'react'

export const Test = () => {
  const projrcts = [
    {id: '1', category: 'projects'},
    {id: '2', category: 'projects'},
    {id: '3', category: 'projects'},
    {id: '1sd2', category: 'projects'},
    {id: '2sdf3', category: 'projects'},
    {id: '3sdfs31', category: 'projects'},
    {id: '1hga2', category: 'projects'},
    {id: '2hsdsvb', category: 'projects'},
    {id: '3sdf', category: 'projects'},
    {id: '1sdf', category: 'projects'},
    {id: '2d342', category: 'projects'},
    {id: '3sdf32', category: 'projects'},
    {id: '1zx3', category: 'projects'},
    {id: 'xzzxc2', category: 'projects'},
    {id: 'zxc3', category: 'projects'},
    {id: '1zxc5', category: 'projects'},
    {id: 'cvvz2', category: 'projects'},
    {id: '3ds34', category: 'projects'},
    {id: '1zx45', category: 'projects'},
    {id: '2sdf32', category: 'projects'},
    {id: '3nbm2', category: 'projects'},
    {id: '13zx23', category: 'projects'},
    {id: 'z21234d', category: 'projects'},
    {id: '3asd33', category: 'projects'},
    {id: '3nbm22', category: 'projects'},
    {id: '13zx232', category: 'projects'},
    {id: 'z21234d2', category: 'projects'},
    {id: '3asd332', category: 'projects'},
    {id: '13zx212332', category: 'projects'},
    {id: 'z21212334d2', category: 'projects'},
    {id: '3a123sd332', category: 'projects'},
    {id: '4', category: 'workshop'},
    {id: '5', category: 'workshop'},
    {id: '6', category: 'workshop'},
    {id: '7', category: 'null'},
    {id: '8', category: 'null'},
    {id: '9', category: 'null'}
  ]

  const categoryNav = () => {
    const [active, setActive] = useState(null)
    return(
      <div className='flex flex-col max-h-screen'>
        <CategoryNav 
          projrcts={projrcts} category='projects' 
          active={active} setActive={setActive} />
        <CategoryNav 
          projrcts={projrcts} category='workshop' 
          active={active} setActive={setActive} />
        <CategoryNav 
          projrcts={projrcts} category='null' 
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
    <ul className={active === category ? 'h-[700px] overflow-y-scroll overflow-hidden bg-violet-900' : ''}>
      <button onClick={activeCategory}>{category}</button>
      {active === category &&
        <li className={active && ''}>
          {projrcts
            .filter(p => p.category === category)
            .map(p => 
              <div key={p.id}>id: {p.id}, category: {p.category}</div>
            )}
        </li>  
      }
    </ul>
  )
}