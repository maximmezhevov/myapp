import { Link } from "react-router-dom"

export const _firebase = () => {
  return (
    <div id='_firebase' className='w-full'>
      <header className='text-xl font-bold text-orange-500'>Firebase</header>
      <div>
        <Link to='/authFirebase' className='text-xl font-bold text-blue-500'>Authorization Firebase 👉</Link>
      </div>
    </div>
  )
}