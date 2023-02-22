import { useRef } from 'react'

import { useDispatch } from 'react-redux'
import { setFirstName, setLastName } from '../../features/user/userSlice'

import { useSelector } from 'react-redux'

export const StateChange1 = () => {
  const dispatch = useDispatch()

  const firstName = useSelector((state) => state.user.firstName)
  const firstInputRef = useRef(null)
  const firstClear = () => {
    firstInputRef.current.value = ''
    dispatch(setFirstName(''))
  }

  const lastName = useSelector((state) => state.user.lastName)
  const lastInputRef = useRef(null)
  const lastClear = () => {
    lastInputRef.current.value = ''
    dispatch(setLastName(''))
  }

  return (
    <div>
      <div>state change 1</div>
      <div className='w-[300px] flex flex-col gap-y-1 border p-1'>

        <form onChange={(e) => dispatch(setFirstName(e.target.value))} className='relative flex items-center gap-x-1'>
          <label htmlFor='firstInput' className='cursor-pointer'>firstname: </label>
          <input id='firstInput' ref={firstInputRef} type='text' placeholder='firstname...' maxLength='10' className='w-full border px-1' />
          {firstName &&
            <button type='button' onClick={firstClear} className='absolute right-1'>
              <svg className="w-4 h-4" 
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          }
        </form>
        <div>firstname: <span className='ml-1'>{firstName}</span></div>

        <div className='relative flex items-center gap-x-1'>
          <label htmlFor='lastInput' className='cursor-pointer'>lastname: </label>
          <input id='lastInput' ref={lastInputRef} type='text' placeholder='lastname...' maxLength='10' onChange={(e) => dispatch(setLastName(e.target.value))} className='w-full border px-1' />
          {lastName &&
            <button type='button' onClick={lastClear} className='absolute right-1'>
              <svg className="w-4 h-4" 
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          }
        </div>
        <div>lastname: <span className='ml-1'>{lastName}</span></div>

      </div>
    </div>
  )
}