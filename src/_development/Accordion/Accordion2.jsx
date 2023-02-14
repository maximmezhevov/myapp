import { useState } from 'react'

export const Accordion2 = () => {
  const [active, setActive] = useState(null)
  return (
    <div className='w-[350px]'>
      <h3>Accordion2</h3>
      <AccordionItem title='box1' active={active} setActive={setActive}>box1</AccordionItem>
      <AccordionItem title='box2' active={active} setActive={setActive}>box2</AccordionItem>
      <AccordionItem title='box3' active={active} setActive={setActive}>box3</AccordionItem>
    </div>
  )
}

const AccordionItem = ({title, active, setActive, children}) => {
  
  const isActive = () => {
    if (active === title) {
      return setActive(null)
    } return setActive(title)
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