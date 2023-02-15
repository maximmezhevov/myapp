import { useContext } from 'react'
import { ContextProjects } from '../../../../ContextProjects'

export const useCategory = () => {
  const {projects} = useContext(ContextProjects)

  /* COPIED */ const removeDuplicates7 = projects.reduce((accumulator/*result*/, currentValue/*project*/) => {
    if (!accumulator.find(element => element.category === currentValue.category)) {
      accumulator.push(currentValue)
    } return accumulator
  }, []) // (3) [{..., category: 'pages', ...}, {..., category: 'projects', ...}, {..., category: 'development', ...}]
  const category2 = removeDuplicates7
    .filter(category => category.category !== 'pages')
    .map(category => ({ category: category.category }))
  // console.log(category2) // (2) [{category: 'projects'}, {category: 'development'}]

  const category3 = projects
    .filter(category => category.category !== 'pages')
    .map(category => ({ category: category.category }))
    .reduce((accumulator, currentValue) =>  
      accumulator.includes(currentValue.category) ? accumulator : [...accumulator, currentValue.category]
    , [])
  // console.log(category2) // (2) [{category: 'projects'}, {category: 'development'}]
  
  return {
    category2, // (2) [{category: 'projects'}, {category: 'development'}]
    category3 // (2) [{category: 'projects'}, {category: 'development'}]
  }
} 