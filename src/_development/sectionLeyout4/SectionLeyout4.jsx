import { Fragment } from 'react'

export const SectionLeyout4 = () => {
  const applications = [
    { id: 'JSXElement1', JSXElement: <div>JSXElement1</div>, height: 100},
    { id: 'children1',
      children: [	
        { id: 'JSXElement2', JSXElement: <Fragment>JSXElement2</Fragment>, height: 150}, 
        { id: 'JSXElement3', JSXElement: <Fragment>JSXElement3</Fragment>, height: 150},
        { id: 'JSXElement4', JSXElement: <Fragment>JSXElement4</Fragment>, height: 150},
        // { id: 'JSXElement5', JSXElement: <Fragment>JSXElement5</Fragment>, height: 150},
        // { id: 'JSXElement6', JSXElement: <Fragment>JSXElement6</Fragment>, height: 150},
      ]
    },
    // { id: 'children [{... JSXElement4 ...}, {... JSXElement5 ...}, {... JSXElement6 ...}]',
    //   order: 4,
    //   children: [	
    //     { id: 'JSXElement4',
    //       JSXElement: <Fragment>JSXElement4</Fragment>,
    //     }, 
    //     { id: 'JSXElement5', 
    //       JSXElement: <Fragment>JSXElement5</Fragment>,
    //     },
    //     { id: 'JSXElement6', 
    //     JSXElement: <Fragment>JSXElement6</Fragment>,
    //     }
    //   ]
    // },
    // { id: 'children [{... JSXElement7 ...}]',
    //   order: 2,
    //   children: [	
    //     { id: 'JSXElement7',
    //       JSXElement: <Fragment>JSXElement7</Fragment>,
    //     }, 
    //   ]
    // }
  ]

  return <ContentLayout array={applications} />
}

export const ContentLayout = ({array}) => {

  const arrayInitialization = (array) => {

    const initializingChildElements = (object) => {
      if (object.children) {
        const childElementsInChildren = object.children.length
        const Flex = ({children}) => {
          if (childElementsInChildren > 1 && childElementsInChildren <= 4 ) {
            return <div className='flex gap-x-2'>{children}</div>
          } else if (childElementsInChildren === 1 || childElementsInChildren >= 5) {
            return children
          }
        }

        const basis = () => {
          if (childElementsInChildren === 2) 
            return {flexBasis: '50%'}
          else if (childElementsInChildren === 3) 
            return {flexBasis: '33.333%'}
          else if (childElementsInChildren === 4) 
            return {flexBasis: '25%'}
        }

        return (
          <Flex>
            {object.children.map(child => 
              <div key={child.id} id={child.id} style={{...basis(), order: `${child.order}`}}>
                <Spase element={child} childElement={child}>
                  {child.JSXElement}
                </Spase>
              </div>
            )}
          </Flex>
        )
      } return object.JSXElement
    }

    return (
      array.map(object => 
        <div key={object.id} id={object.id} style={{order: `${object.order}`}}> 
          <Spase element={object} parentElement={object}>
            {initializingChildElements(object)}
          </Spase>
        </div>
      )
    )
  }



  const Spase = ({children, element, parentElement, childElement}) => {

    const Heading = ({children}) => {
      if (parentElement) {
        return <h2>{children}</h2>
      } else if (childElement) {
        return <h3>{children}</h3>
      }
    }

    const Border = ({children}) => {
      if (element.children) {
        return children
      } return (
        <div style={{height: `${element.height}px`}} 
             className={`p-2 my-1 rounded-[15px] border dark:border-[#444] `/*dark:bg-[#444]*/}>
          {children}
        </div>
      )
    }

    return (
      <>
        <Heading>
          {element.heading === '' || element.heading === undefined ? element.id : element.heading}
        </Heading>
        {element.description && <div>{element.description}</div>}
        {element.topSpace && <div>{element.topSpace}</div>}
        <Border>
          {children}
        </Border>
        {element.bottomSpace && <div>{element.bottomSpace}</div>}
      </>
    )
  }

  return arrayInitialization(array)
}