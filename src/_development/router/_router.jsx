import { Content } from '../../components/Content'

import { Router1 } from './Router1'
import { Router2 } from './Router2'
import { Animation1 } from './Animation1'


export const _router = () => {
  const array = [
    {id: '1', heading: 'Router1', JSXElement: <Router1 />},
    {id: '2', heading: 'Router2', JSXElement: <Router2 />},
    {id: '3', heading: 'Animation1', JSXElement: <Animation1 />}
  ]
  return <Content array={array} />
}
