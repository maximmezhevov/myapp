import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'; import './Accordion7.css'

export const Accordion7 = () => {
  const boxs = [
    {id: 'box1', title: 'box1', text: 'box1'},
    {id: 'box2', title: 'box2', text: 'box2'},
    {id: 'box3', title: 'box3', text: 'box3'}
  ]

  return (
    <div className='w-[300px]'>
      <h3>Accordion7, [array],<br />{`{ CSSTransition }`} react-transition-group</h3>
      { boxs.map(box => 
          <AccordionItem key={box.id} title={box.title}>{box.text}</AccordionItem>
        )
      }
    </div>
  )
}

const AccordionItem = ({title, children}) => {
  const [active, setActive] = useState(false)
  const accordionItem = useRef(null)

  return (
    <>
      <button onClick={() => setActive(!active)} className='w-full border p-1'>
        {active ? `close ${title}` : `open ${title}`}
      </button>
      <CSSTransition nodeRef={accordionItem} in={active} timeout={150} classNames='accordion7' unmountOnExit >
          <div ref={accordionItem} className='h-[68px] overflow-hidden border flex justify-center items-center'>
            {children}
          </div> 
      </CSSTransition>
    </>
  )
}