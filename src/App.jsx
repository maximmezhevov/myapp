import { useState } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import { Workshop } from './pages/workshop/Workshop'
import { Layout } from './Layout'
import { ProjectItem } from './pages/workshop/components/ProjectItem'
import { ProjectItemLayout } from './pages/workshop/components/ProjectItemLayout'

import { About } from './pages/About'

import { TodoProps } from './projects/todoProps/TodoProps'
import { Contacts } from './pages/Сontacts'

import { TransitionGroup } from './DEV/transitionGroup/TransitionGroup'
import { Search } from './DEV/Search'
import { Accordion } from './DEV/Accordion'


export const App = () => {

	const [projects] = useState([
		{id: 'about', category: 'pages', app: <About />},
		{id: 'contacts', category: 'pages', app: <Contacts />},

		{id: 'todoProps', category: 'projects', app: <TodoProps />},

		{id: 'button', category: 'uicomponents', app: <div>UI components</div>},

		{id: 'transitionGroup', category: 'workshop', app: <TransitionGroup />},
		{id: 'Search', category: 'workshop', app: <Search />},
		{id: 'Accordion', category: 'workshop', app: <Accordion />},



		{id: 'pdfsdfsdf', category: 'projects', app: <div>asdasda</div>},



		// {id: 'sdfsdsdf234fsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfsd234fsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sd2423fsdfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: '4234',category: 'projects', app: <div>asdasda</div>},
		// {id: '234',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssdfs324df3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: '1dfgdfgdg', category: 'projects',app: <div>asdasda</div>},
		// {id: 'sdfsf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssdfsdf3dfsd123f',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssdfsdfsdfs123df3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: '42424',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdf3234234',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssdfsdf3dfsd12313f',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssdfs23424df3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssdsdfsdf343fsdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssdfsdfsdfsdf3dfsdf', category: 'projects',app: <div>asdasda</div>},
		// {id: 'sdfssdfsd234d2f3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssdfsdf4234d3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssd44d44d14fsdf3dfsdf', category: 'projects',app: <div>asdasda</div>},
		// {id: 'sdfssd11d1d1dfsdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'd14',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssdf1414cdsdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: '1231', category: 'projects',app: <div>asdasda</div>},
		// {id: 'sdfssdfd141sdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssd44d44d99fsdf3dfsdf', category: 'projects',app: <div>asdasda</div>},
		// {id: 'sdfssd48844d14fsdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdf1231ssdfsdf3dfsdf', category: 'projects',app: <div>asdasda</div>},
		// {id: 'sdf3d44d44d14fsdf3dfsdf', category: 'projects',app: <div>asdasda</div>},
		// {id: 'sdfssd44d14d14fsdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
		// {id: 'sdfssd44d44d14fsd13dfsdf',category: 'projects', app: <div>asdasda</div>},



	])
 
	const element = useRoutes([ 
		{path: '/', element: <Navigate to='workshop/about' />},
		{path: 'workshop', 
			element: <Workshop projects={projects} />,
			children: [
				{index: true, element: <Navigate to='about' />},
				{path: ':id', element: <ProjectItemLayout />, 
					children: [
						{index: true, element: <ProjectItem projects={projects} />},
					]
				}
			]
		},
		{path: '*', element: /*<Navigate to='workshop/about' />*/ <div>404</div>}
	])

	return <Layout>{element}</Layout>
}