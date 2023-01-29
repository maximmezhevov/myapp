import { useState } from 'react'

export const Accordion3 = () => {
  const boxs = [
    {id: 'box1', title: 'box1', text: 'box1'},
    {id: 'box2', title: 'box2', text: 'box2'},
    {id: 'box3', title: 'box3', text: 'box3'}
  ]

  return (
    <div className='w-[200px]'>
      <h3>Accordion3, [array]</h3>
      { boxs.map(box => 
          <AccordionItem key={box.id} title={box.title}>{box.text}</AccordionItem>
        )
      }
    </div>
  )
}

const AccordionItem = ({title, children}) => {
  const [active, setActive] = useState(false)
  return (
    <div>
      <button onClick={() => setActive(!active)} className='w-full border p-1'>
        {active ? `close ${title}` : `open ${title}`}
      </button>
      { active && 
        <div className='h-[68px] border p-1 flex justify-center items-center'>
          {children}
        </div> }
    </div>
  )
}