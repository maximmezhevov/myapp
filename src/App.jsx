import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { ContextProjects } from './contexts/ContextProjects'
import { Navigate, Route, Routes, Link, Outlet, useParams, useOutletContext } from 'react-router-dom'

import { useLayout } from './hooks/useLayout'
import { Transition } from 'react-transition-group'
import './components/cssTransition.css'

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

		{id: 'project1', JSXElement: <div>project1</div>, category: 'projects'},
		{id: 'project2', JSXElement: <div>project2</div>, category: 'projects'},
		{id: 'project3', JSXElement: <div>project3</div>, category: 'projects'},

		{id: 'accordion', JSXElement: <AccordionApp />, category: 'development'},
		{id: 'tabs', JSXElement: <TabsApp />, category: 'development'},
		{id: 'search', JSXElement: <Search />, category: 'development'},
    {id: 'sectionLeyout3', JSXElement: <SectionLeyout3 />, category: 'development'},
    {id: 'sectionLeyout4', JSXElement: <SectionLeyout4 />, category: 'development'},
    {id: '_dropdown', JSXElement: <_dropdown />, category: 'development'},
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
	const [dropdownNav, setDropdownNav] = useState(false)
	const dropdownNavButtonRef = useRef(null)
	return (
		<div id='layout' className='flex m-10'>
			<button  onClick={() =>
				((!layout && dropdownNav)
						? (setDropdownNav(false), setTimeout(() => {setLayout(!layout)}, '500'))
						: setLayout(!layout)
				)} 
				className={`fixed top-[10px] left-[10px] ${!layout && 'rotate-180'} duration-500`}> 
				<svg className='w-[21px] h-5'
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M14.78 14.78a.75.75 0 01-1.06 0L6.5 7.56v5.69a.75.75 0 01-1.5 0v-7.5A.75.75 0 015.75 5h7.5a.75.75 0 010 1.5H7.56l7.22 7.22a.75.75 0 010 1.06z" clipRule="evenodd" />
				</svg>
			</button>
			<Nav layout={layout}>
				<NavСategory category='pages' />
				<NavСategory category='projects' />
				<NavСategory category='development' />
			</Nav>
			<DropdownNavButton layout={layout} dropdownNav={dropdownNav} setDropdownNav={setDropdownNav} dropdownNavButtonRef={dropdownNavButtonRef}/>
			<DropdownNav dropdownNav={dropdownNav} setDropdownNav={setDropdownNav} dropdownNavButtonRef={dropdownNavButtonRef}>
				<NavСategory category='pages' setDropdownNav={setDropdownNav}/>
				<NavСategory category='projects' setDropdownNav={setDropdownNav}/>
				<NavСategory category='development' setDropdownNav={setDropdownNav}/>
			</DropdownNav>
			<Outlet context={[layout]} /> {/* ProjectLayout */} 
		</div>
	)
}

const Nav = ({layout, children}) => {
	const navRef = useRef(null)
	const duration = 500
	const {heightNav} = useLayout(); const height = {height: `${heightNav}px`}
  const defaultStyle = {
		transition: `${duration}ms`
		// position: 'sticky', top: '40px', display: 'flex', flexDirection: 'column', rowGap: '10px'
	}
  const transitionStyles = {
		exited:   { width: '0', transform: 'translate(-220px, -24px)', marginRight: '0', /*opacity: '0'*/},
    entering: { width: '200px', transform: 'translate(0)', marginRight: '20px', /*opacity: '1'*/},
    entered:  { width: '200px', transform: 'translate(0)', marginRight: '20px', /*opacity: '1'*/},
    exiting:  { width: '0', transform: 'translate(-220px, -24px)', marginRight: '0', /*opacity: '0'*/}
  }
	return (
		<Transition nodeRef={navRef} in={layout} timeout={duration} unmountOnExit>
			{state => (
				<nav ref={navRef} style={{...height, ...defaultStyle, ...transitionStyles[state]}} 
				className='sticky top-[40px] flex flex-col gap-y-[10px]'>
					{children}
				</nav>
			)}
		</Transition>
	)
}

const NavСategory = ({category, setDropdownNav}) => {
	const onClick = (setDropdownNav) => {
		if (setDropdownNav !== undefined) {
			setDropdownNav(false)
		}
	}
	const { projects } = useContext(ContextProjects)
	return (
		<div id={category}>
			{category !== 'pages' && <div role='heading' className='cursor-default'>{category}</div>}
			<ul className={`${category !== 'pages' ? 'ml-3' : ''}`}>
				{projects
					.filter(project => project.category === category)
					.map(project => <li key={project.id}>
						<Link to={project.id} className='block' onClick={() => onClick(setDropdownNav)}>{project.id}</Link>
					</li>
					)}
			</ul>
		</div>
	)
}

const DropdownNavButton = ({layout, dropdownNav, setDropdownNav, dropdownNavButtonRef}) => {
	const duration = 500
  const defaultStyle = {
		transition: `${duration}ms`
		// position: 'fixed', top: '42px', left: '10px'
	}

	// const ... = dropdownNav ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}
	// const ... = dropdownNav && {transform: 'rotate(180deg)'}
	// const ... = {transform: `rotate(${dropdownNav ? 180 : 0 }deg)`}
	// const ... = {transform: `rotate(${dropdownNav && 180}deg)`}

  const transitionStyles = {
		exited:   {transform: 'translate(-28px)', opacity: '0'},
    entering: {transform: 'translate(0)', opacity: '1'}, 
    entered:  {transform: `${dropdownNav ? 'rotateY(180deg)' : 'translate(0)'}`, opacity: '1'},
    exiting:  {transform: 'translate(-28px)', opacity: '0',}
  }
	return (
		<Transition nodeRef={dropdownNavButtonRef} in={!layout} timeout={duration} unmountOnExit>
			{state => (
				<button ref={dropdownNavButtonRef} onClick={() => setDropdownNav(!dropdownNav)} style={{...defaultStyle, ...transitionStyles[state]}} className='fixed top-[42px] left-[10px]'>
					<svg className='w-5 h-5'
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
					</svg>
				</button>
			)}
		</Transition>
	)
}

const DropdownNav = ({dropdownNav, setDropdownNav, dropdownNavButtonRef, children}) => {
	const dropdownNavRef = useRef(null)
	const duration = 500
	const {windowInnerHeight} = useLayout(); const height = windowInnerHeight - 60
  const defaultStyle = {
		transition: `${duration}ms`
		// width: '220px', position: 'fixed', top: '10px', display: 'flex', flexDirection: 'column', rowGap: '10px'
	}
	const transitionStyles = {
		exited:   {transform: 'translateX(-260px)'},
    entering: {transform: 'translate(0)'},
    entered:  {transform: `translate(0)`},
    exiting:  {transform: 'translateX(-260px)'}
  }
	// const width = 220
	
	useEffect(() => {
		const outsideClick = (event) => {
			if (dropdownNavRef.current) {
				if (!dropdownNavRef.current.contains(event.target) && !dropdownNavButtonRef.current.contains(event.target)) {
					setDropdownNav(false)
				}
			}
		}
		
		document.addEventListener('click', outsideClick);
    return () => {
      document.removeEventListener('click', outsideClick);
    }
	}, [dropdownNav, setDropdownNav])

	return (
		<Transition nodeRef={dropdownNavRef} in={dropdownNav} timeout={duration} unmountOnExit>
			{state => (
				<nav ref={dropdownNavRef} style={{height: `${height}px`, ...defaultStyle, ...transitionStyles[state]}} className={`w-[220px] fixed top-[30px] flex flex-col gap-y-[10px] bg-white p-[10px] border rounded-[10px] shadow-md`}> {/* w-[${width}px] */}
					{children}
				</nav>
			)}
		</Transition>
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
		exited:   {height: '0', marginBottom: '0', transform: 'translate(-1px, -24px)', opacity: '0'},
    entering: {height: '24px', marginBottom: '0', transform: 'translate(0)', opacity: '1'},
    entered:  {height: '24px', marginBottom: '0', transform: 'translate(0)', opacity: '1'},
    exiting:  {height: '0', marginBottom: '0', transform: 'translate(-1px, -24px)', opacity: '0'}
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
			<Outlet /> {/* ProjectItem */}
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