import { Fragment, useContext, useRef, useState } from 'react'
import { ContextProjects } from './contexts/ContextProjects'
import { Navigate, Route, Routes, Link, Outlet, useParams, useOutletContext } from 'react-router-dom'

import { useLayout } from './hooks/useLayout'
import { Transition } from 'react-transition-group'

import { About } from './_pages/About'
import { Contacts } from './_pages/Сontacts'
import { AccordionApp } from './_development/Accordion/AccordionApp'
import { TabsApp } from './_development/Tabs/TabsApp'
import { Search } from './_development/Search'
import { SectionLeyout3 } from './_development/sectionLeyout3/SectionLeyout3'
import { SectionLeyout4 } from './_development/sectionLeyout4/SectionLeyout4'
import { _dropdown } from './_development/dropdown/_dropdown'



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

		{id: 'project1', JSXElement: <div>project2</div>, category: 'projects'},
		{id: 'project2', JSXElement: <div>project2</div>, category: 'projects'},
		{id: 'project3', JSXElement: <div>project2</div>, category: 'projects'},

		{id: 'accordion', JSXElement: <AccordionApp />, category: 'development'},
		{id: 'tabs', JSXElement: <TabsApp />, category: 'development'},
		{id: 'search', JSXElement: <Search />, category: 'development',},
    {id: 'sectionLeyout3', JSXElement: <SectionLeyout3 />, category: 'development',},
    {id: 'sectionLeyout4', JSXElement: <SectionLeyout4 />, category: 'development',},
    {id: '_dropdown', JSXElement: <_dropdown />, category: 'development',},
	]

	const Router = () => {
		return (
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Navigate to='/about' />} />
					<Route path=':id' element={<ProjectLayout />}>
						<Route index element={<ProjectItem />}/>
					</Route>
				</Route>
			</Routes>
		)
	}

	return (
		<ContextProjects.Provider value={{projects}}>
			<Router />
		</ContextProjects.Provider>
	)
}

const Layout = () => {
	const [layout, setLayout] = useState(true)
	return (
		<div id='layout' className='relative flex m-10'>
			<Nav layout={layout} />
			<Outlet context={[layout]} />

			<button onClick={() => setLayout(!layout)} className='absolute -top-6 right-0'>{layout ? 'close' : 'open'}</button>

		</div>
	)
}

const Nav = ({layout}) => {
	const {heightNav} = useLayout()
	const navRef = useRef()
	const duration = 500
  const defaultStyle = {
		height: `${heightNav}px`, position: 'sticky', top: '40px', display: 'flex', flexDirection: 'column', rowGap: '10px', transition: `${duration}ms`
	}
  const transitionStyles = {
		exited:   {width: '0', marginRight: '0', transform: `translate(-210px, -34px)`, opacity: '0'},
    entering: {width: '200px', marginRight: '10px', transform: 'translate(0)', opacity: '1'},
    entered:  {width: '200px', marginRight: '10px', transform: 'translate(0)', opacity: '1'},
    exiting:  {width: '0', marginRight: '0', transform: `translate(-210px, -34px)`, opacity: '0'}
  }

	return (
		<Transition nodeRef={navRef} in={layout} timeout={duration} unmountOnExit>
			{state => (
				<nav ref={navRef} style={{...defaultStyle, ...transitionStyles[state]}}>
					<NavСategory category='pages' />
					<NavСategory category='projects' />
					<NavСategory category='development' />
				</nav>
			)}
		</Transition>
	)
}

const NavСategory = ({category}) => {
	const {projects} = useContext(ContextProjects)
	return (
		<div id={category} >
			{category !== 'pages' && <div role='heading' className='cursor-default'>{category}</div>}
			<ul className={`${category !== 'pages' ? 'ml-3' : ''}`}> 
				{ projects
					.filter(project => project.category === category)
					.map(project => 
						<li key={project.id}>
							<Link to={project.id} className='block'>{project.id}</Link>
						</li>
					)
				}
			</ul>
		</div>
	)
}

const ProjectLayout = () => {
	const {id} = useParams()
	const [layout] = useOutletContext();
	const headerRef = useRef()
	const duration = 500
	const defaultStyle = { 
		transition: `${duration}ms`
	}
  const transitionStyles = {
		exited:   {height: '0', marginBottom: '0', transform: `translate(-1px, -24px)`, opacity: '0'},
    entering: {height: '24px', marginBottom: '0', transform: 'translate(0)', opacity: '1'},
    entered:  {height: '24px', marginBottom: '0', transform: 'translate(0)', opacity: '1'},
    exiting:  {height: '0', marginBottom: '0', transform: `translate(-1px, -24px)`, opacity: '0'}
  }

	return (
		<div className='min-w-[768px] w-[768px] flex flex-col'>
			<Transition nodeRef={headerRef} in={layout} timeout={duration} unmountOnExit>
				{state => (
					<header ref={headerRef} style={{...defaultStyle, ...transitionStyles[state]}}>
						<h1>{id}</h1>
					</header>
				)}
			</Transition>
			<Outlet />
		</div>

	)
}

const ProjectItem = () => {
	const {projects} = useContext(ContextProjects)
	const {id} = useParams()

	return projects
		.filter(project => project.id === id)
		.map(project => <Fragment key={project.id}>{project.JSXElement}</Fragment>)
}