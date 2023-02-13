import { createContext, Fragment, useContext, useState } from 'react'
import { ContextProjects } from './ContextProjects'
import { Navigate, Route, Routes, Link, Outlet, useParams, useOutletContext } from 'react-router-dom'

import { About } from './pages/About'
import { Contacts } from './pages/Сontacts'

import { AccordionApp } from './pages/workshop/development/Accordion/AccordionApp'
import { useLayout } from './hooks/useLayout'



export const App = () => {
	// const element = useRoutes([ 
	// 	{path: '/', element: <Navigate to='workshop/about' />},
	// 	{path: 'workshop', 
	// 		element: <Workshop/>,
	// 		children: [
	// 			{index: true, element: <Navigate to='about' />},
	// 			{path: ':id', element: <ProjectItemLayout />, 
	// 				children: [
	// 					{index: true, element: <ProjectItem/>},
	// 				]
	// 			},
	// 		]
	// 	},
	// 	// {path: '*', element: /*<Navigate to='workshop/about' />*/ <div>404</div>}
	// ])

	const projects = [
		{id: 'about', JSXElement: <About />, category: 'pages'},
		{id: 'contacts', JSXElement: <Contacts />, category: 'pages'},
		{id: 'accordion', JSXElement: <AccordionApp />, category: 'development'},
		{id: 'project1', JSXElement: <div>project1</div>, category: 'projects'},
		{id: 'accordion2', JSXElement: <AccordionApp />, category: 'development'},
	]

	const reactrouterdom = () => {
		return (
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Navigate to='/about' />} />
					<Route path=':id' element={<ProjectItem />} />
				</Route>
			</Routes>
		)
	}

	return (
		<ContextProjects.Provider value={{projects}}>
			{reactrouterdom()}
		</ContextProjects.Provider>
	)
}

const Layout = () => {
	const [layout, setLayout] = useState(true)
	return (
		<div id='layout' className='relative flex m-10 gap-x-10'>
			<button onClick={() => setLayout(!layout)} className='absolute -top-6 right-0'>{layout ? 'close' : 'open'}</button>
			<Nav layout={layout} />
			<Outlet context={[layout]} />
		</div>
	)
}

const Nav = ({layout}) => {
	const {projects} = useContext(ContextProjects)
	const {heightNav} = useLayout()

	const NavСategory = ({category}) => {
		return (
			<div id={category}>
				{category !== 'pages' && <div role='heading' className='cursor-default'>{category}</div>}
				<ul className={`${category !== 'pages' ? 'ml-3' : ''}`}> 
					{ projects
						.filter(project => project.category === category)
						.map(project => 
							<li key={project.id} className='hover:bg-blue-100 duration-500'>
								<Link to={project.id} className='block'>{project.id}</Link>
							</li>
						)
					}
				</ul>
			</div>
		)
	}

	return (
		<nav className={`sticky top-10 flex flex-col gap-y-[10px] ${layout ? 'w-52 min-w-52' : 'w-0 opacity-0 -translate-x-52 overflow-hidden'} duration-500`}
		style={{height: heightNav}}>
			<NavСategory category='pages' />
			<NavСategory category='projects' />
			<NavСategory category='development' />
		</nav>
	)
}

	const ProjectItem = () => {
		const {projects} = useContext(ContextProjects)
  	const {id} = useParams()
		const [layout] = useOutletContext();

		return projects
			.filter(project => project.id === id)
			.map(project => 
				<div key={project.id} className='min-w-[768px] w-[768px] flex flex-col gap-y-[10px]'>
					<header className={`${layout ? 'h-6' : 'h-0 opacity-0 -translate-y-52 overflow-hidden'} duration-500`}>
						<h1>{id}</h1>
					</header>
					{project.JSXElement}
				</div>
			)
	}