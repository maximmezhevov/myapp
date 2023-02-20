import { Fragment } from 'react'
import { Link, Navigate, Outlet, Route, Routes, useParams,
  // useRoutes 
} from 'react-router-dom'

// const Router = ({pages}) => {
//   const routes = useRoutes([
//     {path: '/*', element: <Outlet />, children: [
//       {index: true, element: <Navigate to='page1' />},
//       {path: ':id', element: <Page pages={pages}/>},
//     ]}
//   ])
//   return routes
// }

export const Router2 = () => {
  const pages = [
    {id: 'page1', h: 'page 1', jsx: <div>page 1</div>},
    {id: 'page2', h: 'page 2', jsx: <div>page 2</div>},
    {id: 'page3', h: 'page 3', jsx: <div>page 3</div>},
  ] 

  // const routes = useRoutes([
  //   {path: '/*', element: <Outlet />, children: [
  //     {index: true, element: <Navigate to='page1' />},
  //     {path: ':id', element: <Page pages={pages}/>},
  //   ]}
  // ])

  return (
    <div>
      <div className='flex gap-x-3'>
        {pages.map(page => 
          <Fragment key={page.id}>
            <Link to={page.id}>{page.h}</Link>
          </Fragment>
        )}
      </div>

      {/* <Router pages={pages}/> */}

      {/* {routes} */}

      <Routes>
        <Route path='/*' element={<Outlet />}>
          <Route index element={<Navigate to='page1' />} />
          <Route path=':id' element={<Page pages={pages}/>} />
        </Route>
      </Routes>
    </div>
  )
}

const Page = ({pages}) => {
	const {id} = useParams()
	return pages
		.filter(page => page.id === id)
		.map(page => <Fragment key={page.id}>{page.jsx}</Fragment>)
}