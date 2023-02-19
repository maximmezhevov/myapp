import { ContentLayout } from '../sectionLeyout4/SectionLeyout4'
import { OutsideClick1 } from './OutsideClick1'
import { OutsideClick2 } from './OutsideClick2'

export const _dropdown = () => {
  const array = [
    { 
      id: 'OutsideClick1',
      JSXElement : <OutsideClick1 />,
      height: 200,
    },
    {
      id: 'OutsideClick2',
      JSXElement: <OutsideClick2 />,
      height: 200,
    }

  ]
  return <ContentLayout array={array} />
}