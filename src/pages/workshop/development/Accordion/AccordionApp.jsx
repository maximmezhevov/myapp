import { Accordion1 } from './Accordion1'
import { Accordion2 } from './Accordion2'
import { Accordion3 } from './Accordion3'
import { Accordion4 } from './Accordion4'
import { Accordion5 } from './Accordion5'
import { Accordion6 } from './Accordion6'
import { Accordion7 } from './Accordion7'
import { Accordion9 } from './Accordion9'

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
      <div className='flex gap-x-2'>
        <Accordion5 />
        <Accordion6 />
      </div>
      <div className='flex gap-x-2'>
        <Accordion7 />
      </div>
      <div className='flex gap-x-2'>
        <Accordion9 />
      </div>
    </div>
  )
}
