import { useSection } from './OtherIndex'

export const Other3 = ({basis, heading, description, commentary}) => {
  const {header2, border, commentary2} = useSection()
  return (
    <div id={heading} className={`${basis}`}>
      {header2(heading, description)}
      <div className={border}>
        content {heading}
      </div>
      {commentary2(commentary)}
    </div>
  )
}