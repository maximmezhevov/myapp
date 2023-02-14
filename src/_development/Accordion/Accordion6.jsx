import { useRef, useState } from 'react'
import { Transition } from 'react-transition-group'

export const Accordion6 = () => {
  const boxs = [
    {id: 'box1', title: 'box1', text: 'box1'},
    {id: 'box2', title: 'box2', text: 'box2'},
    {id: 'box3', title: 'box3', text: 'box3'}
  ]

  const [active, setActive] = useState(null)
  return (
    <div className='w-[350px]'>
      <h3>Accordion6, [array],<br />{`{ Transition }`} react-transition-group</h3>
      { boxs.map(box => 
          <AccordionItem key={box.id} title={box.title} active={active} setActive={setActive}>
            {box.text}
          </AccordionItem>
        )
      }
    </div>
  )
}

const AccordionItem = ({title, active, setActive, children}) => {

  const isActive = () => {
    if (active === title) {
      return setActive(null)
    } return setActive(title)
  }

  const accordionItem = useRef(null)

  const duration = 150
  const defaultStyle = {transition: `height ${duration}ms ease-in-out`, overflow: 'hidden'}
  const transitionStyles = {
    entering: {height: '68px'},
    entered:  {height: '68px'},
    exiting:  {height: '0'},
    exited:   {height: '0'}
  }
  return (
    <>
      <button onClick={isActive} className='w-full border p-1'>
        {active === title ? `close ${title}` : `open ${title}`}
      </button>
      <Transition nodeRef={accordionItem} in={active === title} timeout={duration} unmountOnExit>
        {state => (
          <div ref={accordionItem} className='border flex justify-center items-center' style={{...defaultStyle, ...transitionStyles[state]}} >
            {children}
          </div>
        )}
      </Transition>
    </>
  )
}