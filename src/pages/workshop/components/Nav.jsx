import { NavLink } from 'react-router-dom'

export const Nav = ({projects}) => {

  const navMain = () => {
    return (
      <ul className='ml-5'>
        {projects
          .filter(project => project.category === 'pages')
          .map(project => 
            <li key={project.id}>
              <NavLink className='block' to={`${project.id}`}>{project.id}</NavLink>
            </li>
          )
        }
      </ul>
    )
  }

  const navProject = () => {
    return (
      <div>
         <div>NavAccordion</div>
      </div>
    )
  }

  return <nav className='flex flex-col gap-y-2'>{navMain()}{navProject()}</nav>
}