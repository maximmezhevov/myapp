import classnames from 'classnames'
import { useState } from 'react'

export const Settings = ({abbilityСancelTask, setAbbilityСancelTask}) => {
  return (
    <>
      {/* <main className='grow overflow-y-auto'> */}
        <div className='p-2.5 border border-transparent rounded hover:bg-gray-100 flex flex-col gap-y-2'>
          <label className='flex gap-x-2 justify-between items-center cursor-pointer'>
            <h2>Возможность возобновлять завершенные задачи</h2>
            <input
              type='checkbox' 
              checked={abbilityСancelTask}
              onChange={() => setAbbilityСancelTask(!abbilityСancelTask)}
            />
          </label>
          <Exemple1 abbilityСancelTask={abbilityСancelTask}/>
        </div>
      {/* </main> */}
    </>
  )
}

const Exemple1 = ({abbilityСancelTask}) => {
  const [examples, setExamples] = useState([{id: 'example', title: '...', isCompleted: true}])
  return (
    <>
      {examples.map(example => 
        <label key={example.id} 
          className={classnames('grow flex gap-x-2 items-center',
            (!abbilityСancelTask && example.isCompleted) ? 'cursor-default' : 'cursor-pointer'
          )}
        >
          <span 
            className={classnames('text-xs text-gray-500',
              (!abbilityСancelTask && example.isCompleted) ? 'cursor-default' : 'cursor-pointer'
            )} 
          >Пример:</span>
          <input 
            type='checkbox' 
            checked={example.isCompleted} 
            onChange={() => setExamples([...examples].filter(example => {
              if (example.id === 'example' && (abbilityСancelTask || (!abbilityСancelTask && !example.isCompleted)))
              example.isCompleted = !example.isCompleted
              return example
            }))}
            disabled={(!abbilityСancelTask && example.isCompleted)}
            className={classnames((!abbilityСancelTask && example.isCompleted) ? 'cursor-default' : 'cursor-pointer')}
          />
          {/* {example.title} */}
        </label>
      )}
    </>
  )
}
