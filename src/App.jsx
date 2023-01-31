import { useState } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import { Workshop } from './pages/workshop/Workshop'
// import { Layout } from './Layout'
import { ProjectItem } from './pages/workshop/components/ProjectItem'
import { ProjectItemLayout } from './pages/workshop/components/ProjectItemLayout'

export const App = () => {
	const element = useRoutes([ 
		{path: '/', element: <Navigate to='workshop/about' />},
		{path: 'workshop', 
			element: <Workshop/>,
			children: [
				{index: true, element: <Navigate to='about' />},
				{path: ':id', element: <ProjectItemLayout />, 
					children: [
						{index: true, element: <ProjectItem/>},
					]
				},
			]
		},
		// {path: '*', element: /*<Navigate to='workshop/about' />*/ <div>404</div>}
	])

	return <>{element}</>
}