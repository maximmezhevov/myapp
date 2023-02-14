import { useState } from 'react'

export const Tabs1 = () => {
  const [active, setActive] = useState('tab1')
  return (
    <div className='w-[350px]'>
      <h3>Tabs1</h3>
      <div className='flex'>
        <TabsButton tab='tab1' active={active} setActive={setActive}>tab1</TabsButton>
        <TabsButton tab='tab2' active={active} setActive={setActive}>tab2</TabsButton>
        <TabsButton tab='tab3' active={active} setActive={setActive}>tab3</TabsButton>
      </div>
      <TabsItem tab='tab1' active={active}>tab1</TabsItem>
      <TabsItem tab='tab2' active={active}>tab2</TabsItem>
      <TabsItem tab='tab3' active={active}>tab3</TabsItem>
    </div>
  )
}

const TabsButton = ({tab, active, setActive}) => {
  return (
    <button onClick={() => setActive(tab)} className={`w-full h-[34px] border ${active === tab && 'border-b-transparent pointer-events-none'}`}>
      {tab}
    </button>
  )
}

const TabsItem = ({tab, active, children}) => {
  return (
    <>
      {active === tab &&
        <div className='h-[68px] border-x border-b flex justify-center items-center'>
          {children}
        </div>
      }
    </>
  )
}