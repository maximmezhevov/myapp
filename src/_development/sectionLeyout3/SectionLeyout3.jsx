import { Fragment } from 'react'

export const SectionLeyout3 = () => {
  const applications = [
    { id: 'JSXElement1', 
      JSXElement: <Fragment>JSXElement1</Fragment>,
      order: '',
      // height: 300, 
      heading: '',
      description: '',
      topSpace: 'topSpace',
      bottomSpace: 'bottomSpace'
    },
    { id: 'children [{... JSXElement2 ...}, {... JSXElement3 ...}]',
      order: 3,
      heading: '',
      description: 'description',
      topSpace: 'topSpace',
      bottomSpace: 'bottomSpace',
      children: [	
        { id: 'JSXElement2',
          order: 2,
          // height: 300,
          JSXElement: <Fragment>JSXElement2</Fragment>,
          heading: '',
          description: 'description',
          topSpace: 'topSpace',
          bottomSpace: 'bottomSpace'
        }, 
        { id: 'JSXElement3', 
          order: 1,
          // height: 300,
          JSXElement: <Fragment>JSXElement3</Fragment>,
          heading: '',
          description: 'description',
          topSpace: 'topSpace',
          bottomSpace: 'bottomSpace'
        }
      ]
    },
    { id: 'children [{... JSXElement4 ...}, {... JSXElement5 ...}, {... JSXElement6 ...}]',
      order: 4,
      children: [	
        { id: 'JSXElement4',
          JSXElement: <Fragment>JSXElement4</Fragment>,
        }, 
        { id: 'JSXElement5', 
          JSXElement: <Fragment>JSXElement5</Fragment>,
        },
        { id: 'JSXElement6', 
        JSXElement: <Fragment>JSXElement6</Fragment>,
        }
      ]
    },
    { id: 'children [{... JSXElement7 ...}]',
      order: 2,
      children: [	
        { id: 'JSXElement7',
          JSXElement: <Fragment>JSXElement7</Fragment>,
        }, 
      ]
    }
  ]

  return <Article array={applications} />
}

export const Article = ({array}) => {
  const arrayInitialization = () => {
    return (
      <div className='flex flex-col gap-y-2'>
        {array.map(element => 
          <section key={element.id} style={{order : `${element.order}`}}>
            <Spase element={element}>
              {childrenElementInitialization(element)}
            </Spase>
          </section>
        )}
      </div>
    )
  }
  
  const childrenElementInitialization = (element) => {
    if (element.children) {
      const amountChildElementsInChildren = element.children.length
      const Flex = ({children}) => {
        if (amountChildElementsInChildren > 1 && amountChildElementsInChildren <= 4 ) {
          return <div className='flex gap-x-2'>{children}</div>
        } else if (amountChildElementsInChildren === 1) {
          return <Fragment>{children}</Fragment>
        }
      }
      // const basis = () => { // ? некорректно работает basis-1/2 после коммита и автодеплоя на vercel (basis-1/3, basis-1/4 и basis-full(w-full) работают корректно
      //   if (quantityElementsInGroup > 1 && quantityElementsInGroup <= 4 ) {
      //     return `basis-1/${quantityElementsInGroup}`
      //   } else if (quantityElementsInGroup === 1) {
      //     return 'w-full'
      //   }
      // }
      const basis2 = () => { // ! basis2(style) работает корректно
        if      (amountChildElementsInChildren === 1) return {width: '100%'}
        else if (amountChildElementsInChildren === 2) return {flexBasis: '50%'}
        else if (amountChildElementsInChildren === 3) return {flexBasis: '33.333%'}
        else if (amountChildElementsInChildren === 4) return {flexBasis: '25%'}
      }
      return (
        <Flex>
          {element.children.map(element => 
            <Fragment key={element.id}>
              <div style={{...basis2(), order : `${element.order}`}} /* className={basis()}*/> 
                <Spase element={element}>
                  {element.JSXElement}
                </Spase>
              </div>
            </Fragment>
          )}
        </Flex>
      )
    }	return element.JSXElement
  }

  const Spase = ({children, element}) => {
    const Border = ({children}) => {
      if (element.children) {
        return <Fragment>{children}</Fragment>
      } return <div style={{height: `${element.height}px`}} className='border rounded-[15px] dark:border-[#444] p-2 my-2'>{children}</div>
    }
    return (
      <>
        <div className='border-l dark:border-[#444] pl-3'>
          <header>
            <h2 className=''>{element.heading === '' || element.heading === undefined ? element.id : element.heading}</h2>
            {element.description && <div>{element.description}</div>}
          </header>
          {element.topSpace && <div>{element.topSpace}</div>}
          <Border>{children}</Border>
          {element.bottomSpace && <div>{element.bottomSpace}</div>}
        </div>
      </>
    )
  }

  return (arrayInitialization())
}