import { Tabs1 } from "./Tabs1"
import { Tabs2 } from "./Tabs2"
import { Tabs3 } from "./Tabs3"
import { Tabs4 } from "./Tabs4"

export const TabsApp = () => {
  return (
    <div className='flex flex-col gap-y-2'>
      <div className='flex gap-x-2'>
        <Tabs4 />
      </div>
      <br />
      <Tabs1 />
      <div className='flex gap-x-2'>
        <Tabs2 />
        <Tabs3 />
      </div>
    </div>
  )
}