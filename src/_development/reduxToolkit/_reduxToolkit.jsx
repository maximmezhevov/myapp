import { StateChange1 } from './StateChange1'
import { TodoReduxToolkit1 } from './TodoReduxToolkit1'
import { AsyncThunk1 } from './AsyncThunk1'

export const _reduxToolkit = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      <StateChange1 />
      <div>
        <div>todo redux toolkit</div>
          <div className=''>
            <TodoReduxToolkit1 />
          </div>
      </div>
      <AsyncThunk1 />
    </div>
  )
}