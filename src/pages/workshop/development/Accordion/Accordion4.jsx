import { useState } from 'react'

export const Accordion4 = () => {
  const boxs = [
    {id: 'box1', title: 'box1', text: 'box1'},
    {id: 'box2', title: 'box2', text: 'box2'},
    {id: 'box3', title: 'box3', text: 'box3'}
  ]

  const [active, setActive] = useState(null)
  return (
    <div className='w-[350px]'>
      <h3>Accordion4, [array]</h3>
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
    if (active === title)
      return setActive(null)
    return setActive(title)
  }

  return (
    <>
      <button onClick={isActive} className='w-full border p-1'>
        {active === title ? `close ${title}` : `open ${title}`}
      </button>
      { active === title && 
        <div className='h-[68px] border p-1 flex justify-center items-center'>
          {children}
        </div> }
    </>
  )
}