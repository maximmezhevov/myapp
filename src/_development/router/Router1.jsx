import { Link, Navigate, Outlet, Route, Routes,
  // useRoutes
} from 'react-router-dom'

// const Router = () => {
//   const routes = useRoutes([
//     {path: '/*', element: <Outlet />, children: [
//       {index: true, element: <Navigate to='page1' />},
//       {path: 'page1', element: <div>page 1</div>},
//       {path: 'page2', element: <div>page 2</div>},
//       {path: 'page3', element: <div>page 3</div>},
//     ]}
//   ])
//   return routes
// }

export const Router1 = () => {

  // const routes = useRoutes([
  //   {path: '/*', element: <Outlet />, children: [
  //     {index: true, element: <Navigate to='page1' />},
  //     {path: 'page1', element: <div>page 1</div>},
  //     {path: 'page2', element: <div>page 2</div>},
  //     {path: 'page3', element: <div>page 3</div>},
  //   ]}
  // ])

  return (
    <div>
      <div className='flex gap-x-3'>
        <Link to='page1'>page 1</Link>
        <Link to='page2'>page 2</Link>
        <Link to='page3'>page 3</Link>
      </div>

      {/* <Router /> */}

      {/* {routes} */}

      <Routes>
        <Route path='/*' element={<Outlet />}>
          <Route index element={<Navigate to='page1' />} />
          <Route path='page1' element={<div>page 1</div>} />
          <Route path='page2' element={<div>page 2</div>} />
          <Route path='page3' element={<div>page 3</div>} />
        </Route>
      </Routes>
    </div>
  )
}