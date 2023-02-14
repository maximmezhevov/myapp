import { useContext, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'
import { ContextProjects } from '../../contexts/ContextProjects'
// import { useCategory } from '../hooks/useCategory'

export const Accordion11 = () => {
  const {projects} = useContext(ContextProjects)
  // const {category2} = useCategory()

  /* COPIED */ const removeDuplicates7 = projects.reduce((accumulator/*result*/, currentValue/*project*/) => {
    if (!accumulator.find(element => element.category === currentValue.category)) {
      accumulator.push(currentValue)
    } return accumulator
  }, []) // (3) [{..., category: 'pages', ...}, {..., category: 'projects', ...}, {..., category: 'development', ...}]
  const category2 = removeDuplicates7
    .filter(category => category.category !== 'pages')
    .map(category => ({ category: category.category }))
  // console.log(category2) // (2) [{category: 'projects'}, {category: 'development'}]

  return (
    <div className='w-[350px]'>
      <h3>Accordion11, CategoryNav [projects],<br />{`{ Transition }`} react-transition-group</h3>
      {category2.map(category => <AccordionItem key={category.category} category2={category.category}/>)}
      {/* {category3.map(category => <AccordionItem key={category} category2={category}/>)} */}
    </div>
  )
}

const AccordionItem = ({category2}) => {
  const {projects} = useContext(ContextProjects)
  const [activeCategory, setActiveCategory] = useState(false)
  const accordionItem = useRef(null)

  const duration = 150
  const defaultStyle = {transition: `height, ${duration}ms ease-in-out`,}
  const transitionStyles = {
    entering: {height: '68px'},
    entered:  {height: '68px'},
    exiting:  {height: '0'},
    exited:   {height: '0'}
  }

  return (
    <>
      <button onClick={() => setActiveCategory(!activeCategory)} className='w-full border p-1 flex items-center gap-x-1'>
        <svg className={`w-5 h-5 ${activeCategory && 'rotate-90'} transition-[transform]`}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
        </svg>
        {category2}
      </button>
      <Transition nodeRef={accordionItem} in={activeCategory} timeout={duration} unmountOnExit>
        {state => (
          <div ref={accordionItem} className='border overflow-y-scroll' style={{...defaultStyle, ...transitionStyles[state]}}>
          {projects
            .filter(category => category.category !== 'pages')
            .filter(category => category.category === category2)
            .map(project => 
              <div key={project.id} className='px-3 py-1'>
                {project.id}
              </div>
            )
          }
          </div> 
        )}
      </Transition>
    </>
  )
}