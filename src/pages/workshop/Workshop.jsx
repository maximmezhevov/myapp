import { useRef, useState } from 'react'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'

import { useLayout } from '../../hooks/useLayout'
import { useTheme } from '../../hooks/useTheme'

import { Nav } from './components/Nav'

import { ProjectsList } from './ProjectsList'

export const Workshop = ({projects}) => {
	

	const [Nopen, setNopen] = useState(true)

	const {toggleThemeButton} = useTheme()
	const {resultWindowInnerHeight/*, resultWindowInnerHeight2*/, heightAccordion} = useLayout()



	const [open1, setOpen1] = useState(false)
	const [open2, setOpen2] = useState(false)
	const [open3, setOpen3] = useState(false)


	const toggleOpen1 = (open1) => setOpen1(!open1) & (setOpen2(false) & setOpen3(false) /*& setOpenSherch(false)*/)
	const toggleOpen2 = (open2) => setOpen2(!open2) & (setOpen1(false) & setOpen3(false) /*& setOpenSherch(false)*/)
	const toggleOpen3 = (open3) => setOpen3(!open3) & (setOpen1(false) & setOpen2(false) /*& setOpenSherch(false)*/)


	const [openSherch, setOpenSherch] = useState(false)


// search
	const [searchParams, setSearchParams] = useSearchParams()
	const projectQuery = searchParams.get('project') || '';
// search1
	const hendleSubmitInputSearch = (e) => {
		e.preventDefault()
		const form = e.target
		const query  = form.search.value
		setSearchParams({project: query})
	}
	const inputsearch = () => {
		return (
			<form autoComplete='off' onSubmit={hendleSubmitInputSearch} className='overflow-hidden sticky top-1'>
				<input type='search' name='search' tabIndex={openSherch ? '0' : '-1'} className={`w-full px-1 rounded dark:border-[#444] flex bg-transparent backdrop-blur-md focus:outline-none focus:border-blue-500 focus:dark:border-orange-400 ${openSherch ? 'h-[28px] border-2 mb-2' : 'h-0 border-0 my-0'} transition-height overflow-hidden`} onSubmit={hendleSubmitInputSearch}/>
			{/* <button className='none' type='submit' value='Search' /> */}
			</form>
		)
	}

	return (
		<div id='Workshop' className='flex'>
			<div style={{height: resultWindowInnerHeight}}/*style={resultWindowInnerHeight2}*/ className='basis-1/5 min-w-[250px] sticky top-2 my-2 ml-3 pr-3 border-r-2 border-gray-300 dark:border-[#444] flex justify-between flex-col gap-y-2 transition-border'>
				<header className='flex justify-end items-center'>
					<h1 className='hidden'>workshop</h1>
					{toggleThemeButton}
				</header>
				<Nav projects={projects}/>
				<nav className='grow flex flex-col gap-y-2'> 
				
					<div className='grow flex flex-col'>

						<div className='flex justify-between items-center gap-x-2'>

							<button onClick={() => toggleOpen1(open1)} className='grow flex items-center gap-x-2 overflow-hidden'>
								<svg className={`w-3 h-3 ${open1 ? 'rotate-90 stroke-blue-500 dark:stroke-orange-400' : 'stroke-[#333] dark:stroke-white'} transition-svg1 duration-300`} strokeWidth={3} fill='none' /*stroke="currentColor"*/ viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
								<span>projects</span>
							</button>

							{open1 &&
								<div className='flex gap-x-1'>
									<button title='По алфавиту'>
										<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
										</svg>
									</button>
									<button onClick={() => setOpenSherch(!openSherch)}>
										<svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-4 h-3 
										${openSherch && 'stroke-blue-500 dark:stroke-orange-400 duration-300'}`}
										>
											<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
										</svg>
									</button>
								</div>
							}
						</div>

						<div className={`overflow-y-scroll ml-[5px] scroll`} style={{direction: 'rtl'}}>  
							<ul className={`relative ml-[13px] transition-height duration-300`} // /${open1 ? 'h-[200px]' : 'h-0'}
								style={open1 ? {height: heightAccordion, direction: 'ltr'} : {height: 0, direction: 'ltr'}}
							>
								{inputsearch()}
								{projects
									.filter(project => project.category === 'projects')
									/*search*/.filter(project => project.id.includes(projectQuery))
									.map(project => 
										<li key={project.id}>
											<NavLink className='block' to={`${project.id}${projectQuery && `?${searchParams}`}`}>
												{project.id}
											</NavLink>
										</li>
									)
								}
								{/* <div className='sticky bottom-0 w-full flex justify-end'> 
									<button className='absolute -translate-y-6 flex justify-center items-center bg-red-300 rounded-full w-6 h-6 bg-transparent backdrop-blur-md'>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
										className="w-4 h-4"
										>
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
										</svg>
									</button>
								</div> */}
							</ul>
						</div>

						<div className='flex gap-x-2 cursor-pointer' onClick={() => toggleOpen3(open3)}>
							<div className={`${open3 ? 'rotate-180 ' :'rotate-90'} duration-300`}>A</div>
							workshop
						</div>
						<ul className={`${open3 ? 'grow' : 'h-0 overflow-hidden'} duration-300`}>
							{projects
								.filter(project => project.category === 'workshop')
								.map(project => 
									<li key={project.id}>
										<NavLink to={`${project.id}`}>{project.id}</NavLink>
									</li>
								)
							}
						</ul>
					</div>
				</nav>
			</div>
			<Outlet />
		</div>
	)
} 

// style={{maxHeight: `${resultWindowInnerHeight}px`, top: `${headerHeight}px`}} // nav
// style={{transform: `translateY(-${headerHeight}px)`}} // view