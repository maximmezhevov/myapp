import { NavLink } from 'react-router-dom'

export const ProjectsList = ({projects}) => {
  return (
    <>
      {[...projects].map(project => 
        <li key={project.id}>
            <NavLink to={`${project.id}`}>{project.id}</NavLink>
        </li>
      )}
    </>
  )
}