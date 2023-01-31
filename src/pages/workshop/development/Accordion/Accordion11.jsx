import { useContext, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'
import { ContextProjects } from '../../../../ContextProjects'

export const Accordion11 = () => {
  const {projects} = useContext(ContextProjects)
  const boxs = [
    {id: 'box1', title: 'box1', text: 'box1'},
    {id: 'box2', title: 'box2', text: 'box2'},
    {id: 'box3', title: 'box3', text: 'box3'}
  ]

  return (
    <div className='w-[350px]'>
      <h3>Accordion11, CategoryNav,<br />{`{ Transition }`} react-transition-group</h3>
        <AccordionItem>
          <button></button>
          <div></div>
        </AccordionItem>
    </div>
  )
}

const AccordionItem = ({title, children}) => {
  const [activeCategory, setActiveCategory] = useState(false)
  const accordionItem = useRef(null)

  const duration = 150
  const defaultStyle = {transition: `height, ${duration}ms ease-in-out`, overflow: 'hidden'}
  const transitionStyles = {
    entering: {height: '68px'},
    entered:  {height: '68px'},
    exiting:  {height: '0'},
    exited:   {height: '0'}
  }

  return (
    <>
      <button onClick={() => setActiveCategory(!activeCategory)} className='w-full border p-1'>
        {activeCategory ? `close ${title}` : `open ${title}`}
      </button>
      <Transition nodeRef={accordionItem} in={activeCategory} timeout={duration} unmountOnExit>
        {state => (
          <div ref={accordionItem} className='border flex justify-center items-center' style={{...defaultStyle, ...transitionStyles[state]}} >
            {children}
          </div> 
        )}
      </Transition>
    </>
  )
}