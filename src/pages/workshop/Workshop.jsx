import { Outlet } from 'react-router-dom'

import { useLayout } from '../../hooks/useLayout'
import { useTheme } from '../../hooks/useTheme'

import { Nav } from './components/Nav'

export const Workshop = ({projects}) => {
	const {toggleThemeButton} = useTheme()
	const {windowInnerHeight} = useLayout()


	return (
		<div id='Workshop' className='flex'>
			<div style={{height: windowInnerHeight-16/*my-2*/}} 
					 className='min-w-[240px] sticky top-2 flex flex-col gap-y-2 my-2 ml-2 mr-3 transition-border'>
				<header>
					<h1 className='hidden'>workshop</h1>
					{toggleThemeButton}
				</header>
				<Nav projects={projects}/>
			</div>
			<Outlet />
		</div>
	)
} 

// style={{maxHeight: `${resultWindowInnerHeight}px`, top: `${headerHeight}px`}} // nav
// style={{transform: `translateY(-${headerHeight}px)`}} // view