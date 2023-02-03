import { useContext, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'
import { ContextProjects } from '../../../../ContextProjects'
// import { useCategory } from '../hooks/useCategory'

export const Accordion12 = () => {
  const {projects} = useContext(ContextProjects)
  // const {category3} = useCategory()

  const category3 = projects
    .filter(category => category.category !== 'pages')
    .map(category => ({ category: category.category }))
    .reduce((accumulator, currentValue) =>  
      accumulator.includes(currentValue.category) ? accumulator : [...accumulator, currentValue.category]
  , [])
  // console.log(category3) // (2) ['projects', 'development']

  const [activeCategory, setActiveCategory] = useState(null)
  return (
    <div className='w-[350px]'>
      <h3>Accordion12, CategoryNav [projects],<br />{`{ Transition }`} react-transition-group</h3>
      {/* { boxs.map(box => 
          <AccordionItem key={box.id} title={box.title} active={active} setActive={setActive}>
            {box.text}
          </AccordionItem>
        )
      } */}
      { category3.map(category => 
        <AccordionItem key={category} category2={category} 
          activeCategory={activeCategory} setActiveCategory={setActiveCategory}
        />
      )}
    </div>
  )
}

const AccordionItem = ({category2, activeCategory, setActiveCategory}) => {
  const {projects} = useContext(ContextProjects)

  const isActiveCategory = () => {
    if (activeCategory === category2) {
      return setActiveCategory(null)
    } return setActiveCategory(category2)
  }

  const accordionItem = useRef(null)

  const duration = 150
  const defaultStyle = {transition: `height ${duration}ms ease-in-out`}
  const transitionStyles = {
    entering: {height: '68px'},
    entered:  {height: '68px'},
    exiting:  {height: '0'},
    exited:   {height: '0'}
  }
  return (
    <>
      <button onClick={isActiveCategory} className='w-full border p-1 flex items-center gap-x-1'>
        <svg className={`w-5 h-5 ${activeCategory === category2 && 'rotate-90'} transition-[transform]`}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
        </svg>
        {category2}
      </button>
      <Transition nodeRef={accordionItem} in={activeCategory === category2} timeout={duration} unmountOnExit>
        {state => (
          <div ref={accordionItem} className='border overflow-y-scroll' style={{...defaultStyle, ...transitionStyles[state]}} >
            { projects
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