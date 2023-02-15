import { Fragment, useContext, useEffect, useRef, useState } from 'react'
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
	console.log(dropdownNav)
	return (
		<div id='layout' className='flex m-10'>
			<Nav layout={layout} dropdownNav={dropdownNav}>
				<NavСategory category='pages' />
				<NavСategory category='projects' />
				<NavСategory category='development' />
			</Nav>
			<button onClick={() => (
				(!layout && dropdownNav)
					? (setDropdownNav(false), setTimeout(() => {setLayout(!layout)}, '500'))
					: setLayout(!layout)
			  )} 
				className={
				`${ layout 
						? 'absolute top-[42px] left-[250px] rotate-0' 
						: 'fixed top-[10px] left-[10px] rotate-180'
				} duration-500`}
				disabled={dropdownNav}>
				<svg className='w-[21px] h-5'
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M14.78 14.78a.75.75 0 01-1.06 0L6.5 7.56v5.69a.75.75 0 01-1.5 0v-7.5A.75.75 0 015.75 5h7.5a.75.75 0 010 1.5H7.56l7.22 7.22a.75.75 0 010 1.06z" clipRule="evenodd" />
				</svg>
			</button>
			<DropdownNavButton layout={layout} dropdownNav={dropdownNav} setDropdownNav={setDropdownNav}/>
			<DropdownNav dropdownNav={dropdownNav} setDropdownNav={setDropdownNav}>
				<NavСategory category='pages' />
				<NavСategory category='projects' />
				<NavСategory category='development' />
			</DropdownNav>
			<Outlet context={[layout]} /> {/* ProjectLayout */} 
		</div>
	)
}

// const NavANDdrop = ({layout, dropdownNav, children}) => {
// 	const {heightNav} = useLayout()
// 	const navRef = useRef()
// 	const duration = 500
//   const defaultStyle = {
// 		height: `${heightNav}px`, position: 'sticky', top: '40px', display: 'flex', flexDirection: 'column', rowGap: '10px', transition: `${duration}ms`
// 	}
// 	const position = () => {
// 		if (dropdownNav) return 'fixed'
// 	}

// 	const dropdownNavDefaultStyle = () => {if (dropdownNav) return {
// 		backgroundColor: 'white', border: '1px solid red', padding: '10px', borderRadius: '20px'
// 	};	return {}}
// 	// const transform = () => {if (dropdownNav) return '-34px'; return '0'}

//   const transitionStyles = {
// 		exited:   {width: '0', marginRight: '0', transform: `translate(-210px)`, opacity: '0', position: `${position()}`},
//     entering: {width: '200px', marginRight: '30px', transform: 'translate(0)', opacity: '1', position: `${position()}`},
//     entered:  {width: '200px', marginRight: '30px', transform: 'translate(0)', opacity: '1', position: `${position()}`},
//     exiting:  {width: '0', marginRight: '0', transform: `translate(-210px)`, opacity: '0', position: `${position()}`}
//   }

// 	return (
// 		<Transition nodeRef={navRef} in={layout || dropdownNav} timeout={duration} unmountOnExit>
// 			{state => (
// 				<nav ref={navRef} style={{...defaultStyle, ...dropdownNavDefaultStyle(), ...transitionStyles[state]}}>
// 					{children}
// 				</nav>
// 			)}
// 		</Transition>
// 	)
// }

const Nav = ({layout, children}) => {
	const {heightNav} = useLayout()
	const navRef = useRef()
	const duration = 500
  const defaultStyle = {
		height: `${heightNav}px`, position: 'sticky', top: '40px', display: 'flex', flexDirection: 'column', rowGap: '10px', transition: `${duration}ms`
	}
  const transitionStyles = {
		exited:   {width: '0', marginRight: '0', transform: `translate(-210px, -34px`, opacity: '0'},
    entering: {width: '200px', marginRight: '40px', transform: 'translate(0)', opacity: '1'},
    entered:  {width: '200px', marginRight: '40px', transform: 'translate(0)', opacity: '1'},
    exiting:  {width: '0', marginRight: '0', transform: `translate(-210px, -34px`, opacity: '0'}
  }
	return (
		<Transition nodeRef={navRef} in={layout} timeout={duration} unmountOnExit>
			{state => (
				<nav ref={navRef} style={{...defaultStyle, ...transitionStyles[state]}}>
					{children}
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

const DropdownNavButton = ({layout, dropdownNav, setDropdownNav}) => {
	const dropdownNavButtonRef = useRef()
	const duration = 500
  const defaultStyle = {position: 'fixed', top: '42px', left: '10px', transition: `${duration}ms`}

	// const ... = dropdownNav ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}
	// const ... = dropdownNav && {transform: 'rotate(180deg)'}
	// const ... = {transform: `rotate(${dropdownNav ? 180 : 0 }deg)`}
	// const ... = {transform: `rotate(${dropdownNav && 180}deg)`}

  const transitionStyles = {
		exited:   {opacity: '0', transform: 'translate(-22px)'},
    entering: {opacity: '1', transform: 'translate(0)'},
    // entered:  {opacity: '1', transform: `${dropdownNav ? 'translate(220px, -30px) rotateY(180deg)' : 'translate(0)'}`},
		entered:  {opacity: '1', transform: `translate(0)`},
    exiting:  {opacity: '0', transform: 'translate(-22px)'}
  }
	return (
		<Transition nodeRef={dropdownNavButtonRef} in={!layout} timeout={duration} unmountOnExit>
			{ state => (
				<button ref={dropdownNavButtonRef} onClick={() => setDropdownNav(!dropdownNav)} style={{...defaultStyle, ...transitionStyles[state]}}>
					<svg className='w-5 h-5'
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
					</svg>
				</button>
			)}
		</Transition>
	)
}

const DropdownNav = ({dropdownNav, setDropdownNav, children}) => {
	const {windowInnerHeight} = useLayout()
	const resultwindowInnerHeight = windowInnerHeight - 8
	const dropdownNavRef = useRef()
	const duration = 500
  const defaultStyle = {
		height: `${resultwindowInnerHeight}px`, // width: '220px', position: 'fixed', top: '40px', display: 'flex', flexDirection: 'column', rowGap: '10px', transition: `${duration}ms`, backgroundColor: 'white', padding: '10px', border: '1px solid black'
	}  
	const transitionStyles = {
		exited:   {transform: 'translateX(-260px)'},
    entering: {transform: 'translate(0)'},
    entered:  {transform: `translate(0)`},
    exiting:  {transform: 'translateX(-260px)'}
  }
	useEffect(() => {
    const OutsideClick = (event) => {
			if (!dropdownNavRef.current.contains(event.target)) setDropdownNav(false)
    }

    document.addEventListener('mousedown', OutsideClick)
    return() => {
      document.removeEventListener('mousedown', OutsideClick)
    } 
  }, [])
	return (
		<Transition nodeRef={dropdownNavRef} in={dropdownNav} timeout={duration} unmountOnExit>
			{ state => (
				<nav ref={dropdownNavRef} 
				style={{...defaultStyle, ...transitionStyles[state]}}
				// className='absolute top-[27px] bg-white border p-3 shadow'
				className='w-[220px] fixed top-1 left-1 flex flex-col gap-y-[10px] duration-500 bg-white p-[10px] border rounded-[10px] shadow-lg'>
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
	// const defaultStyle = {transition: `${duration}ms`}
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
					<header ref={headerRef} 
						style={{/*...defaultStyle,*/ ...transitionStyles[state]}} 
						className='duration-500'>
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