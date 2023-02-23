import { StateChange1 } from './StateChange1'
import { TodoReduxToolkit1 } from './TodoReduxToolkit1'
import { AsyncThunk1 } from './AsyncThunk1'
import { TodoRTAT } from './TodoRTAT'
import { TodoReduxToolkit2 } from './TodoReduxToolkit2'
import { TodoRTAT2 } from './TodoRTAT2'

export const _reduxToolkit = () => {
  return (
    <div className='flex flex-col-reverse gap-y-5'>
      <StateChange1 />
      <TodoReduxToolkit1 />
      <AsyncThunk1 />
      <TodoReduxToolkit2 />
      <TodoRTAT />
      <TodoRTAT2 />
    </div>
  )
}