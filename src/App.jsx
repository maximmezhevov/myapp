import { createContext, Fragment, useContext, useRef, useState } from 'react'
import { ContextProjects } from './ContextProjects'
import { Navigate, Route, Routes, Link, Outlet, useParams, useOutletContext } from 'react-router-dom'

import { About } from './pages/About'
import { Contacts } from './pages/Сontacts'

import { AccordionApp } from './pages/workshop/development/Accordion/AccordionApp'
import { useLayout } from './hooks/useLayout'
import { Transition } from 'react-transition-group'



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
		<div id='layout' className='relative flex m-10'>
			<button onClick={() => setLayout(!layout)} className='absolute -top-6 right-0'>{layout ? 'close' : 'open'}</button>
			<Nav layout={layout} />
			<Outlet context={[layout]} />
		</div>
	)
}

const Nav = ({layout}) => {
	const {projects} = useContext(ContextProjects)

	const navСategory = (category) => {
		return (
			<div id={category} >
				{category !== 'pages' && <div role='heading' className='cursor-default'>{category}</div>}
				<ul className={`${category !== 'pages' ? 'ml-3' : ''}`}> 
					{ projects
						.filter(project => project.category === category)
						.map(project => 
							<li key={project.id} className='hover:bg-blue-100 duration-[2000ms]'>
								<Link to={project.id} className='block'>{project.id}</Link>
							</li>
						)
					}
				</ul>
			</div>
		)
	}

	const {heightNav} = useLayout()
	const navRef = useRef()
	const duration = 1000; const width = 200; const marginRight = 0;
  const defaultStyle = {
		height: `${heightNav}px`, 
		position: 'sticky', top: '40px', 
		display: 'flex', flexDirection: 'column', rowGap: '10px', 
		transition: `${duration}ms ease`
	}
  const transitionStyles = {
    entering: {width: `${width}px`, marginRight: `${marginRight}px`, transform: 'translate(0)'}, 									// 1
    entered:  {width: `${width}px`, marginRight: `${marginRight}px`, transform: 'translate(0)'}, 									// 2 ...defaultStyle
    exiting:  {width: '0', 					marginRight: '0', 							 transform: `translate(-${width}px, -34px)`},	// 3
		exited:   {width: '0', 					marginRight: '0', 							 transform: `translate(-${width}px, -34px)`}	// 0
  }

	return (
		<Transition nodeRef={navRef} in={layout} timeout={duration} unmountOnExit>
			{state => (
				<nav ref={navRef} style={{...defaultStyle, ...transitionStyles[state]}}>
					{navСategory('pages')}
					{navСategory('projects')}
					{navСategory('development')}
				</nav>
			)}
		</Transition>
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
					<header className={`${layout ? 'h-6' : 'h-0 opacity-0 -translate-x-12 -translate-y-12 overflow-hidden'} duration-[1000ms]`}>
						<h1>{id}</h1>
					</header>
					{project.JSXElement}
				</div>
			)
	}