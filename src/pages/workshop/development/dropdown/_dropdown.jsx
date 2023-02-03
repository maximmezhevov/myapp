import { Dropdown1 } from "./Dropdown1"
import { OutsideClick1 } from "./OutsideClick1"

export const _dropdown = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <OutsideClick1 />
      <Dropdown1 />
    </div>
  )
}