import { useState } from 'react'

export const  Accordion = () => {

  const Accordion1 = () => {  
    const [box1, setbox1] = useState(false)
    const [box2, setbox2] = useState(false)
    const [box3, setbox3] = useState(false)
  
    const [mode, setMode] = useState(true)
    const handleMode = () => {setMode(!mode); setbox1(false); setbox2(false); setbox3(false)}

    const handlebox1 = () => {setbox1(!box1); {mode && setbox2(false) & setbox3(false)}}
    const handlebox2 = () => {setbox2(!box2); {mode && setbox1(false) & setbox3(false)}}
    const handlebox3 = () => {setbox3(!box3); {mode && setbox1(false) & setbox2(false)}}

    return (
      <div>
        <h2>accordion1</h2>
        <form className='w-full flex items-center gap-x-1 mb-[6px]'>
          <input id='checkbox' type='checkbox' checked={mode} onChange={handleMode} className='cursor-pointer' />
          <label htmlFor='checkbox' className='w-full cursor-pointer'>mode</label>
        </form>
        <div className='w-[200px] flex flex-col gap-y-1'>
          <div onClick={handlebox1} className='w-full border p-1 cursor-pointer'>open 1</div>
          {box1 && <div className='w-full h-[100px] border'>box 1</div>}
          <div onClick={handlebox2} className='w-full border p-1 cursor-pointer'>open 2</div>
          {box2 && <div className='w-full h-[100px] border'> box 2</div>}
          <div onClick={handlebox3} className='w-full border p-1 cursor-pointer'>open 3</div>
          {box3 && <div className='w-full h-[100px] border'> box 3</div>}
        </div>
      </div>
    )
  }

  const Accordion2 = () => {
    const projrcts = [
      {id: '1', category: 'pages'},
      {id: '2', category: 'pages'},
      {id: '3', category: 'projects'},
      {id: '4', category: 'projects'},
      {id: '5', category: 'workshop'},
      {id: '6', category: 'workshop'}
    ]

    return (
      <div>
        <h2>accordion2 (component)</h2>
        <div className='w-[200px] flex flex-col gap-y-1'>
          <AccordionUIcomponent projrcts={projrcts} category='pages' />
          <AccordionUIcomponent projrcts={projrcts} category='projects' />
          <AccordionUIcomponent projrcts={projrcts} category='workshop' />
        </div>
      </div>
    )
  }

  const Accordion3 = () => {
    const projrcts = [
      {id: '1', category: 'pages'},
      {id: '2', category: 'pages'},
      {id: '3', category: 'projects'},
      {id: '4', category: 'projects'},
      {id: '5', category: 'workshop'},
      {id: '6', category: 'workshop'}
    ]

    const [active, setActive] = useState(null)

    return (
      <div>
        <h2>accordion3 (component)</h2>
        <div className='w-[200px] flex flex-col gap-y-1'>
          <AccordionUIcomponent2 projrcts={projrcts} category='pages' 
          // isActive='pages' 
          active={active} setActive={setActive} 
        />
          <AccordionUIcomponent2 projrcts={projrcts} category='projects' 
          // isActive='projects' 
          active={active} setActive={setActive} 
        />
          <AccordionUIcomponent2 projrcts={projrcts} category='workshop' 
          // isActive='workshop' 
          active={active} setActive={setActive} 
        />
        </div>
      </div>
    )
  }

  const Accordion4 = () => {
    const projrcts = [
      {id: '1', category: 'pages'},
      {id: '2', category: 'pages'},
      {id: '3', category: 'projects'},
      {id: '4', category: 'projects'},
      {id: '5', category: 'workshop'},
      {id: '6', category: 'workshop'}
    ]
    // const [active, setActive] = useState(null)
    return (
      <div>
        <h2>accordion3 (uicomponent)</h2>
        <div className='w-[200px] flex flex-col gap-y-1'>
          <AccordionUIcomponent3 projrcts={projrcts} category='pages' 
          isActive='pages' 
          // active={active} setActive={setActive} 
        />
          <AccordionUIcomponent3 projrcts={projrcts} category='projects' 
          isActive='projects' 
          // active={active} setActive={setActive} 
        />
          <AccordionUIcomponent3 projrcts={projrcts} category='workshop' 
          isActive='workshop' 
          // active={active} setActive={setActive} 
        />
        </div>
      </div>
    )
  }

  // const Accordion5 = () => {
  //   const FAQ = [
  //     {id: '1', question: 'question1', answer: 'answer1'},
  //     {id: '2', question: 'question2', answer: 'answer2'},
  //     {id: '3', question: 'question3', answer: 'answer3'},
  //     {id: '4', question: 'question4', answer: 'answer4'}
  //   ]
  //   const [isOpen, setIsOpen] = useState(-1)
  //   const handleIsOpne = (index) => {setIsOpen(index)}
  //   return (
  //     <div>
  //       <h2>FAQ (accordion4)</h2>
  //       <div className='w-[200px] flex flex-col gap-y-1'>
  //         {FAQ.map((item, index) =>
  //           <div key={item.index} onClick={handleIsOpne(index)}>
  //             <div className='w-full border p-1'>
  //               {item.question}
  //             </div>
  //             <div className='w-full border'>
  //               {item.answer}
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   )
  // }


  return (
    <div className='flex flex-col gap-y-4'>
      {Accordion1()}
      {Accordion2()}
      <div className='flex gap-x-4'>
        {Accordion3()}
        {Accordion4()}
      </div>
      {/* {Accordion5()} */}
    </div>
  )
}



const AccordionUIcomponent = ({projrcts, category}) => {

  const [Active, setActive] = useState(false)

  return (
    <div className='w-[200px] flex flex-col gap-y-1'>
      <div className='border px-1 cursor-pointer' onClick={() => setActive(!Active)}>{category}</div>
      {Active && 
        <div className='border px-1'>
          {projrcts
            .filter(projrct => projrct.category === category)
            .map((projrct) => <div key={projrct.id}>id: {projrct.id}, category: {projrct.category}</div>)
          }
        </div>
      }
    </div>
  )
}

const AccordionUIcomponent2 = ({
  projrcts, category, 
  // isActive, 
  active, setActive
}) => { 

  // const [active, setActive] = useState(false)

  return (
    <div className='w-[200px] flex flex-col gap-y-1'>
      <button className='border px-1 cursor-pointer' onClick={() => setActive(category)}>{category}</button>
      {active === category &&
        <div className='border px-1'>
          {projrcts
            .filter(projrct => projrct.category === category)
            .map((projrct) => <div key={projrct.id}>id: {projrct.id}, category: {projrct.category}</div>)
          }
        </div>
      }
    </div>
  )
}

const AccordionUIcomponent3 = ({
  projrcts, category, 
  isActive, 
  // active, setActive
}) => { 
  // console.log(category)
  // console.log(isActive)

  const [active, setActive] = useState(null)

  // const ghghgh = (
  //   // category
  //   ) => {
  //   if (category === isActive)
  //      return setActive(!active)
  //   // return setActive(isActive)

  // }

  return (
    <div className='w-[200px] flex flex-col gap-y-1'>
      <button className='border px-1 cursor-pointer' onClick={() => setActive(!active)}>{category}</button>
      {active &&
        <div className='border px-1'>
          {projrcts
            .filter(projrct => projrct.category === category)
            .map((projrct) => <div key={projrct.id}>id: {projrct.id}, category: {projrct.category}</div>)
          }
        </div>
      }
    </div>
  )
}