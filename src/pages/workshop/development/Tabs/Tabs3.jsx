import { useState } from 'react'

export const Tabs3 = () => {
  const tabs = [
    {id: 'tab1', title: 'tab1', text: 'tab1'},
    {id: 'tab2', title: 'tab2', text: 'tab2'},
    {id: 'tab3', title: 'tab3', text: 'tab3'}
  ]

  const [active, setActive] = useState('tab1')
  return (
    <div className='w-[350px]'>
      <h3>Tabs3, [array],</h3>
      <div className='flex'>
        { tabs.map(tab => 
            <button key={tab.id} onClick={() => setActive(tab.id)} className={`w-full h-[34px] border ${tab.id === active && 'border-b-transparent pointer-events-none'}`}>
              {tab.title}
            </button>
          )
        }
      </div>
      { tabs
        .filter(tab => tab.id === active)
        .map(tab => 
          <div key={tab.id} className='h-[68px] border-x border-b flex justify-center items-center'>
            {tab.text}
          </div>
        )
      }
    </div>
  )
}