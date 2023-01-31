import { useContext } from 'react'
import { ContextProjects } from '../../ContextProjects'

import { Outlet } from 'react-router-dom'

import { useTheme } from '../../hooks/useTheme'
import { useLayout } from '../../hooks/useLayout'

import { Nav } from './components/Nav'

export const Workshop = () => {
	const {projects} = useContext(ContextProjects)
	
	const {toggleThemeButton} = useTheme()
	const {windowInnerHeight} = useLayout()

	return (
		<div id='workshop' className='flex gap-x-2 mx-2'>
			<div style={{height: windowInnerHeight-16}} className='min-w-[250px] sticky top-2 flex flex-col gap-y-2 my-2'>
				<div className='min-h-[24px] flex justify-end ml-5'> 
					{toggleThemeButton}
				</div>
				<Nav projects={projects}/>
			</div>
			<Outlet />
		</div>
	)
} 

// style={{maxHeight: `${resultWindowInnerHeight}px`, top: `${headerHeight}px`}} // nav
// style={{transform: `translateY(-${headerHeight}px)`}} // view

// leading-5