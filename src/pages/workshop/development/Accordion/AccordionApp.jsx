import { Accordion1 } from './Accordion1'
import { Accordion2 } from './Accordion2'
import { Accordion3 } from './Accordion3'
import { Accordion4 } from './Accordion4'

export const AccordionApp = () => {
  return (
    <div className='flex flex-col gap-y-2'>
      <div className='flex gap-x-2'>
        <Accordion1 />
        <Accordion2 />
      </div>
      <div className='flex gap-x-2'>
        <Accordion3 />
        <Accordion4 />
      </div>
    </div>
  )
}
