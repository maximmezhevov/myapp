import { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextProjects } from '../../../ContextProjects'

export const ProjectItem = () => {
  const {projects} = useContext(ContextProjects)
  const { id } = useParams()
  return (
    <>
      {[...projects]
        .filter(project => project.id === id)
        .map(project => <Fragment key={project.id}>{project.app}</Fragment>)
      }
    </>
  )
}