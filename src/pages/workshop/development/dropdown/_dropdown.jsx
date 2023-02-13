import { ContentLayout } from '../sectionLeyout4/SectionLeyout4'
import { OutsideClick1 } from './OutsideClick1'

export const _dropdown = () => {
  const array = [
    { 
      id: 'OutsideClick1',
      JSXElement : <OutsideClick1 />,
      height: 200,
    },

  ]
  return <ContentLayout array={array} />
}