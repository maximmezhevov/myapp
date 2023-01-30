import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export const Accordion9 = () => {
  const boxs = [
    {id: 'box1', title: 'box1', text: 'box1'},
    {id: 'box2', title: 'box2', text: 'box2'},
    {id: 'box3', title: 'box3', text: 'box3'}
  ]

  return (
    <div className='w-[300px]'>
      <h3>Accordion9, [array],<br />{`{ CSSTransition }`} react-transition-group<br />tailwindcss</h3>
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
      <CSSTransition nodeRef={accordionItem} in={active} timeout={{enter: 0, exit: 150}}
        classNames={{
          enter:        'h-0',
          // enterActive:  '',
          enterDone:    'h-[68px] transition-[height] duration-150',
          exit:         'h-[68px]',
          exitActive:   'h-[0px] transition-[height] duration-150',
          // exitDone:     ''
        }}
      unmountOnExit>
          <div ref={accordionItem} className='overflow-hidden border flex justify-center items-center'>
            {children}
          </div>
      </CSSTransition>
    </>
  )
}