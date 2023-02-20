import { useEffect } from 'react'
import { useRef, useState } from 'react'

export const OutsideClick2 = () => {
  const [dropdown, setDropdown] = useState(false)
  const ButtonRef = useRef(null)
  const DropdownRef = useRef(null)

  useEffect(() => {
    const OutsideClick = (event) => {
      if (DropdownRef.current) {
        if (!DropdownRef.current.contains(event.target) && !ButtonRef.current.contains(event.target)) {
          // console.log('outside clicked') 
          setDropdown(false)
        } // else console.log('inside clicked') 
      }
    }

    document.addEventListener('click', OutsideClick)
    return() => {
      document.removeEventListener('click', OutsideClick)
    } 
  }, [])

  return (
    <header className='flex justify-end'>
      <div className='relative'>
        <button ref={ButtonRef} onClick={() => setDropdown(!dropdown)} className='w-6 h-6 border rounded-full border-black dark:border-white'></button>
        {dropdown &&
          <div ref={DropdownRef} className={`absolute top-[30px] right-0 w-[100px] h-[150px] border rounded-[15px] border-black dark:border-white p-2`}>
        </div>
        }
      </div>
    </header>
  )
}