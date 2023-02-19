import { useEffect, useRef, useState } from 'react'

export const OutsideClick2 = () => {
  const [box, setBox] = useState(false);

  const buttonRef = useRef(null)

  return (
    <div className='flex flex-col gap-y-1'>
      <button ref={buttonRef} className='w-[100px] border rounded-full border-black' onClick={() => setBox(!box)}>
        {box ? 'close box2' : 'open box2'}
      </button>
      <Box box={box} setBox={setBox} buttonRef={buttonRef} /*onClose={onClose}*/ />
    </div>
  )
}

const Box = ({box, setBox, buttonRef}) => {
  const boxRef = useRef(null)

  useEffect(() => {

    const handleClick = (e) => {
      if (boxRef.current) {
        if (!boxRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
          setBox(false)
          console.log('clicked outside...') 
        } else {
          console.log('clicked inside DIV...')
        }
      }
    }

    document.addEventListener('click', handleClick)
    return() => {document.removeEventListener('click', handleClick)}
  }, [box, setBox])



  return box && 
    <div ref={boxRef} className='w-[100px] h-[75px] border rounded-[15px] border-black flex justify-center items-center'>
      box2
    </div>
}