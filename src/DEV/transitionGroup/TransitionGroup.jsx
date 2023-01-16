import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'; import './cssTransition.css'
import { Transition } from 'react-transition-group'


export const TransitionGroup = () => {

  const cssTransitionCSS = () => { 
    const [isShowBox, setIsShowBox] = useState(false)
    const box = useRef(null)
    return (
      <div id='cssTransitionCSS'>
        <h2>cssTransitionCSS</h2>
        <button type='button' onClick={() => setIsShowBox(!isShowBox)}>show box</button>
        <CSSTransition nodeRef={box} in={isShowBox} unmountOnExit classNames='showBox1'
          timeout={{/*defaults to the value of enter ?*/ enter: 1000, exit: 1000,}}                                        // ?
        >
          <div ref={box} className='h-20 w-20 bg-red-500'>
            box
          </div>
        </CSSTransition>
      </div>
    )
  }


  const cssTransitionClassNames = () => { 
    const [isShowBox, setIsShowBox] = useState(false)
    const box = useRef(null)
    return (
      <div id='cssTransitionClassName'>
        <h2>cssTransitionClassName</h2>
        <button type='button' onClick={() => setIsShowBox(!isShowBox)}>show box</button>
        <CSSTransition nodeRef={box} in={isShowBox} unmountOnExit timeout={{enter: 1000, exit: 1000,}}
          classNames={{
            // appear: 'my-appear',
            // appearActive: 'my-active-appear',
            // appearDone: 'my-done-appear',
            enter: 'opacity-0',
            enterActive: 'opacity-100 duration-1000', ///
            // enterDone: 'my-done-enter',
            // exit: 'opacity-100',                                                                                      // ???
            exitActive: 'opacity-0 duration-1000',
            // exitDone: 'my-done-exit',
          }}
        >
          <div ref={box} className='h-20 w-20 bg-green-500'>
            box
          </div>
        </CSSTransition>
      </div>
    )
  }

  const transitionStyle = () => {
    const [isShowBox, setIsShowBox] = useState(false)
    const box = useRef(null)

    const duration = 1000;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
      height: '80px',
      width: '80px',
      backgroundColor: 'tomato'
    }
    
    const transitionStyles = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0 }, 
      // exited:  { opacity: 0 },                                                                                          // ?
    };

    return (
      <div id='transitionStyle'>
        <h2>transitionStyle</h2>
        <button type='button' onClick={() => setIsShowBox(!isShowBox)}>show box</button>
        <Transition nodeRef={box} in={isShowBox} unmountOnExit timeout={{enter: 1000, exit: 1000,}}>
          {state => (
          <div ref={box} style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
          >
            I'm a fade Transition!
          </div>
        )}
        </Transition>
      </div>
    )
  }

  return (
    <div id='transitionGroup' className='flex flex-col gap-y-2.5'>
      {cssTransitionCSS()}
      {cssTransitionClassNames()}
      {transitionStyle()}
    </div>
  )
}