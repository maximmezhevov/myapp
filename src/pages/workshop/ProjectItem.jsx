import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

export const ProjectItem = ({projects}) => {
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