import { useState } from 'react'

export const Tabs2 = () => {
  const tabs = [
    {id: 'tab1', title: 'tab1', text: 'tab1'},
    {id: 'tab2', title: 'tab2', text: 'tab2'},
    {id: 'tab3', title: 'tab3', text: 'tab3'}
  ]

  const [active, setActive] = useState('tab1')
  return (
    <div className='w-[350px]'>
      <h3>Tabs2, [array]</h3>
      <div className='flex'>
        { tabs.map(tab => 
          <TabsButton key={tab.id} id={tab.id} title={tab.title} active={active} setActive={setActive}>
            {tab.title}
          </TabsButton>
        )}
      </div>
      { tabs.map(tab => 
        <TabsItem key={tab.id} id={tab.id} active={active}>
          {tab.text}
        </TabsItem>
      )}
    </div>
  )
}

const TabsButton = ({id, title, active, setActive}) => {
  return (
    <button onClick={() => setActive(id)} className={`w-full h-[34px] border ${id === active && 'border-b-transparent pointer-events-none'}`}>
      {title}
    </button>
  )
}

const TabsItem = ({id, active, children}) => {
  return (
    <>
      { id === active &&
        <div className='h-[68px] border-x border-b flex justify-center items-center'>
          {children}
        </div>
      }
    </>
  )
}