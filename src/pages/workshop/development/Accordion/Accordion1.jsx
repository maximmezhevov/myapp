import { useState } from 'react'

export const Accordion1 = () => {
  return (
    <div className='w-[300px]'>
      <h3>Accordion1</h3>
      <AccordionItem title='box1'>box1</AccordionItem>
      <AccordionItem title='box2'>box2</AccordionItem>
      <AccordionItem title='box3'>box3</AccordionItem>
    </div>
    
  )
}

const AccordionItem = ({title, children}) => {
  const [active, setActive] = useState(false)
  return (
    <>
      <button onClick={() => setActive(!active)} className='w-full border p-1'>
        {active ? `close ${title}` : `open ${title}`}
      </button>
      { active && 
        <div className='h-[68px] border p-1 flex justify-center items-center'>
          {children}
        </div> }
    </>
  )
}