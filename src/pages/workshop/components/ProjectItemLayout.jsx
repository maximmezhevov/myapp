import { Outlet, useParams } from 'react-router-dom'

export const ProjectItemLayout = () => {
  const { id } = useParams()
  return (
    <div className='w-full mt-10 mb-10 flex flex-col gap-y-2 border-l dark:border-[#444] pl-3'>

      <h1 className='text-5xl'>{id}</h1>
      <Outlet />
    </div>
  )
}