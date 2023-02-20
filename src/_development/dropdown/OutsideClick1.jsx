import { useEffect } from 'react'
import { useRef, useState } from 'react'

export const OutsideClick1 = () => {
  const [dropdown, setDropdown] = useState(false)
  const DropdownRef = useRef(null)

  useEffect(() => {
    const outsideClick = (event) => {
      if (!DropdownRef.current.contains(event.target)) {
        // console.log('outside clicked')
        setDropdown(false)
      } // else console.log('inside clicked')
    }

    document.addEventListener('click', outsideClick)
    return() => {
      document.removeEventListener('click', outsideClick)
    } 
  }, [])

  return (
    <header className='flex justify-end'>
      <div ref={DropdownRef} className='relative'>
        <button onClick={() => setDropdown(!dropdown)} className='w-6 h-6 border rounded-full border-black dark:border-white'></button>
        {dropdown &&
          <div className={`absolute top-[30px] right-0 w-[100px] h-[150px] border rounded-[15px] border-black dark:border-white p-2`}></div>
        }
      </div>
    </header>
  )
}