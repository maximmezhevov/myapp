import { Outlet, useParams } from 'react-router-dom'

export const ProjectItemLayout = () => {
  const { id } = useParams()
  return (
    <div className='basis-4/5 my-10 flex flex-col gap-y-2 border-l dark:border-[#444] pl-3 mr-3 transition-borderColors duration-300'>
      <h1 className='text-5xl'>{id}</h1>
      <Outlet />
    </div>
  )
}