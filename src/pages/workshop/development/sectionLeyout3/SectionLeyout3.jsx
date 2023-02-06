import { Fragment } from 'react'

export const SectionLeyout3 = () => {
  const applications = [
    { id: '1', 
      JSXElement: <Fragment>JSXElement1</Fragment>,
      order: '',
      // height: 300, 
      heading: 'heading Other1',
      description: 'description',
      topSpase: 'topSpase',
      bottomSpase: 'bottomSpase'
    },
    { id: '2',
      order: '',
      heading: 'heading Other1 and Other2',
      description: 'description Other1 and Other2',
      topSpase: 'topSpase Other1 and Other2',
      bottomSpase: 'bottomSpase Other1 and Other2',
      groupedJSXElements: [	
        { id: '3',
          order: '',
          // height: 300,
          JSXElement: <Fragment>JSXElement2</Fragment>,
          heading: 'heading Other2',
          description: 'description',
          topSpase: 'topSpase',
          bottomSpase: 'bottomSpase'
        }, 
        { id: '4', 
          order: '',
          // height: 300,
          JSXElement: <Fragment>JSXElement3</Fragment>,
          heading: 'heading Other3',
          description: 'description',
          topSpase: 'topSpase',
          bottomSpase: 'bottomSpase'
        }
      ]
    },
    { id: 'groupedJSXElements 4 5 6',
      groupedJSXElements: [	
        { id: 'JSXElement4',
          JSXElement: <Fragment>JSXElement4</Fragment>,
        }, 
        { id: 'JSXElement5', 
          JSXElement: <Fragment>JSXElement5</Fragment>,
        },
        { id: 'JSXElement6', 
        JSXElement: <Fragment>JSXElement5</Fragment>,
        }
      ]
    }
  ]
  
  const array = (element) => {
    if (element.groupedJSXElements) {
      const Flex = ({children}) => {
        if (quantityElementsInGroup > 1 && quantityElementsInGroup <= 4 ) {
          return <div className='flex gap-x-2'>{children}</div>
        } else if (quantityElementsInGroup === 1) {
          return <Fragment>{children}</Fragment>
        }
      }
      const quantityElementsInGroup = element.groupedJSXElements.length
      const basis = () => {
        // const basis2 = (basisv) = {
        //   if (basisv === 1) {return {}}
        // }
        if (quantityElementsInGroup > 1 && quantityElementsInGroup <= 4 ) {
          return `basis-1/${quantityElementsInGroup}`
        } else if (quantityElementsInGroup === 1) {
          return 'w-full'
        }
      }
      return (
        <Flex>
          {element.groupedJSXElements.map(element => 
            <Fragment key={element.id}>
              <div className={basis()} style={{order : `${element.order}`}}>
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
    // const height = (heightElement) => {
    //   return {height: `${heightElement}`}
    // }
    const Border = ({children}) => {
      if (element.groupedJSXElements) {
        return <Fragment>{children}</Fragment>
      } return <div style={{height: `${element.height}px`}} className='border dark:border-[#444] py-1 px-2'>{children}</div>
    }
    return (
      <>
        <header>
          <h3 className='bg-violet-900'>{element.heading === '' || element.heading === undefined ? element.id : element.heading}</h3>
          {element.description && <div className='bg-blue-900'>{element.description}</div>}
        </header>
        {element.topSpase && <div className='bg-red-900'>{element.topSpase}</div>}
        <Border>{children}</Border>
        {element.bottomSpase && <div className='bg-green-900'>{element.bottomSpase}</div>}
      </>
    )
  }

  return (
    <div className='flex flex-col gap-y-2'>
      {applications.map(element => 
        <section key={element.id} style={{order : `${element.order}`}}>
          <Spase element={element}>
            {array(element)}
          </Spase>
        </section>
      )}
    </div>
  )
}