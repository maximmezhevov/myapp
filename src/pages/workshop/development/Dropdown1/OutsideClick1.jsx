import { useEffect } from 'react'
import { useRef, useState } from 'react'

export const OutsideClick1 = () => {
  const [dropdown, setDropdown] = useState(false)
  const DropdownRef = useRef()

  useEffect(() => {
    const OutsideClick = (event) => {
      if (!DropdownRef.current.contains(event.target)) setDropdown(false)
    }

    document.addEventListener('mousedown', OutsideClick)
    return() => {
      document.removeEventListener('mousedown', OutsideClick)
    } 
  }, [])

  return (
    <>
      <h3>OutsideClick1</h3>
      <div className='w-[700px] h-[200px] p-2 border rounded-[15px] dark:border-[#444]'>
        <header className='flex justify-end'>
          <div ref={DropdownRef} className='relative'>
            <button onClick={() => setDropdown(!dropdown)} className='w-6 h-6 border rounded-full border-black dark:border-white'></button>
            {dropdown &&
              <div className={`absolute top-[30px] right-0 w-[100px] h-[150px] border rounded-[15px] border-black dark:border-white p-2`}></div>
            }
          </div>
        </header>
      </div>
    </>
  )
}