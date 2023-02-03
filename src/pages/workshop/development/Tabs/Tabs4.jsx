import { useContext, useState } from 'react'
import { ContextProjects } from '../../../../ContextProjects'

export const Tabs4 = () => {
  const {projects} = useContext(ContextProjects)
  const [activeCategory, setActiveCategory] = useState('projects')

  /* COPIED */ const removeDuplicates7 = projects.reduce((accumulator/*result*/, currentValue/*project*/) => {
    if (!accumulator.find(element => element.category === currentValue.category)) {
      accumulator.push(currentValue)
    } return accumulator
  }, []) // (3) [{..., category: 'pages', ...}, {..., category: 'projects', ...}, {..., category: 'development', ...}]
  const category2 = removeDuplicates7
    .filter(category => category.category !== 'pages')
    .map(category => ({ category: category.category }))
  // console.log(category2) // (2) [{category: 'projects'}, {category: 'development'}]

  // const category = [
  //   {category: 'projects'},
  //   {category: 'development'}
  // ]

  return (
    <div className='w-[350px]'>
      <h3>Tabs4, CategoryNav [projects]</h3>
      <div className='flex'>
        { category2
            .map(category => 
            <button key={category.category} onClick={() => setActiveCategory(category.category)} className={`w-full h-[34px] border ${category.category === activeCategory && 'border-b-transparent pointer-events-none'}`}>
              {category.category}
            </button>
          )
        }
      </div>
      <div className='h-[68px] border-x border-b overflow-y-scroll'>
        { projects
          .filter(project => project.category === activeCategory)
          .map(project => 
            <div key={project.id} className='px-3 py-1'>
              {project.id}
            </div>
          )
        }
      </div>
    </div>
  )
}