import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = ({projects}) => {

  const pagesNav = () => {
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

  const categoryNav = () => {
    const [categoryProjects, setCategoryProjects] = useState(false)
    const [categoryWorkshop, setCategoryWorkshop] = useState(false)

    const projectsCategory = () => {
      return (
        <>
          <div className='flex justify-between items-center gap-x-2'>
            <button onClick={() => setCategoryProjects(!categoryProjects) & setCategoryWorkshop(false)} className='grow flex items-center gap-x-2 cursor-pointer' tabIndex='0'>
              <svg 
              className={`w-3 h-3 ${categoryProjects ? 'rotate-90 stroke-blue-500 dark:stroke-orange-400' : 'stroke-[#333] dark:stroke-white'} transition-svg1 duration-300`} strokeWidth={3} fill='none' /*stroke="currentColor"*/ viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              projects
            </button>
            {categoryProjects &&
              <div>
                1
              </div>
            }
          </div>
          {categoryProjects && 
            <ul>
              {projects
                .filter(project => project.category === 'projects')
                .map(project => 
                  <li key={project.id}>
                    <NavLink className='block' to={`${project.id}`}>
                      {project.id}
                    </NavLink>
                  </li>
                )
              }
            </ul>
          }
        </>
      )
    }
    const workshopCategory = () => {
      return (
        <>
          <div className='flex justify-between items-center gap-x-2'>
            <div onClick={() => setCategoryWorkshop(!categoryWorkshop) & setCategoryProjects(false)} className='grow flex items-center gap-x-2 cursor-pointer' tabIndex='0'>
              <svg 
              className={`w-3 h-3 ${categoryWorkshop ? 'rotate-90 stroke-blue-500 dark:stroke-orange-400' : 'stroke-[#333] dark:stroke-white'} transition-svg1 duration-300`} strokeWidth={3} fill='none' /*stroke="currentColor"*/ viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              workshop
            </div>
            {categoryWorkshop &&
              <div>
                1
              </div>
            }
          </div>
          {categoryWorkshop &&
            <ul>
              {projects
                .filter(project => project.category === 'workshop')
                .map(project => 
                  <li key={project.id}>
                    <NavLink className='block' to={`${project.id}`}>
                      {project.id}
                    </NavLink>
                  </li>
                )
              }
            </ul>
          }
        </>
      )
    }

    return (
      <div>
        {projectsCategory()}
        {workshopCategory()}
      </div>
    )
  }

  return (
    <nav className='flex flex-col gap-y-2'>
      {pagesNav()}
      {categoryNav()}
    </nav>
  )
}