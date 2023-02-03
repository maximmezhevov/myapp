import { Other1 } from './Other1'
import { Other2 } from './Other2'
import { Other3 } from './Other3'

export const OtherIndex = () => {
  const {basis} = useSection()
  const apps = [
    { id: '1',
      heading: 'other1', 
      description: 'description',
      commentary: 'commentary',
      app: <Other1 />,
    },
    { id: '2', basis: true,
    heading: 'other2, other3', 
    description: 'description',
    commentary: 'commentary',
    app: <>
            <Other2 heading='other2' description='description' commentary='commentary' basis={basis(true)} />
            <Other3 heading='other3' description='description' commentary='commentary' basis={basis(true)} />
          </>,
    },
    
  ]
  return (
    <div id='other'>
      {apps.map(app => <Section key={app.id} app={app}/>)}
    </div>
  )
}

const Section = ({app}) => {
  const {header1, flex} = useSection()
  return (
    <section className='mb-4'>
      {header1(app)}
      {flex(app)}
      {/* { app.basis !== true && 
        <>
          <h3>{app.heading}</h3>
          // {app.commentary && <p>{app.commentary}</p>}
          {<p>{app.commentary}</p>}
        </>
      }
      { app.basis === true
        ? <div className='flex gap-x-2'>{app.app}</div>
        : <div className='basis-full'>{app.app}</div>
      } */}
    </section>
  )
}

export const useSection = () => {
  const basis = (basis) => { if (basis === true) return 'basis-1/2';}

  const header1 = (app) => {
    // if (app.basis !== true) { 
      return (
        <header>
          <h3>{app.heading}</h3>
          {app.description && <p>{app.description}</p>}
        </header>
      )
    // }
  }

  const flex = (app) => { 
    if (app.basis === true) {
      return (
        <>
          <div className={`${border} flex gap-x-2`}>{app.app}</div>
          <footer>{app.commentary}</footer>
        </>
      )
    } return (
      <>
        <div className={`${border} basis-full`}>{app.app}</div>
        <footer>{app.commentary}</footer>
      </>
    )
  }

  const header2 = (heading, description) => {
    return (
      <header>
        <h3>{heading}</h3>
        {description && <p>{description}</p>}
      </header>
    )
  }

  const commentary2 = (commentary) => {
    return <>{commentary &&  <footer>{commentary}</footer>}</>
  }

  const border = 'border dark:border-[#444] rounded my-1 p-2'

  return {
    basis,
    flex,
    header1,
    header2,
    border,
    commentary2,
  }
}