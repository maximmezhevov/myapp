import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useLayout } from '../../../hooks/useLayout'

export const Nav = ({projects}) => {

	const pagesNav = () => {
		return (
			<ul id='pagesNav' className='ml-5'>
				{projects
					.filter(project => project.category === 'pages')
					.map(project => 
						<li key={project.id}>
							<NavLink className='block font-semibold' to={`${project.id}`}>{project.id}</NavLink>
						</li>
					)
				}
			</ul>
		)
	}

	const categoryNav = () => {
		const [active, setActive] = useState(null)
		return(
			<div id='categoryNav' className='grow'>
				<CategoryNav projects={projects} category='projects' active={active} setActive={setActive} />
				<CategoryNav projects={projects} category='development' active={active} setActive={setActive} />
			</div>
		)
	}

	return (
		<nav className='grow flex flex-col gap-y-2'>
			{pagesNav()}
			{categoryNav()}
		</nav>
	)
}

// components

const CategoryNav = ({projects, category, active, setActive, }) => {
	const {HeightCategoryNavList} = useLayout()

	const [toggleSort, setToggleSort] = useState(false)
	const [toggleSearch, setToggleSearch] = useState(false)

	const activeCategory = () => {
		const defaultActive = (setToggleSort(false), setToggleSearch(false))
		if (active === category) {
			return (setActive(false), defaultActive)
		} return (setActive(category), defaultActive)
	}

	const sortingProjects = () => {
		const filteredProjects = projects.filter(project => project.category === category)
		const sortedProjects = filteredProjects
		if (toggleSort) {
			return sortedProjects.sort((a,b) => a.id.toLowerCase() > b.id.toLowerCase() ? 1 : -1)
		} return filteredProjects
	}
	const [searchQuery, setSearchQuery] = useState('')
	const searchedProjects = sortingProjects().filter(project => project.id.toLowerCase().includes(searchQuery.toLowerCase()))

	return (
		<>
			<div className='flex items-center gap-x-1'>

				<button onClick={activeCategory} className='w-full flex items-center'>
					<svg className={`w-4 h-4 ${active === category ? 'rotate-90 opacity-100' : 'opacity-50'}`}
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
					</svg>
					<span className='pl-1 font-semibold'>{category}</span>
				</button>

				{active === category && 
					<div className='flex gap-x-1'>
						<button className={toggleSort ? 'opacity-100' : 'opacity-50'} onClick={() => setToggleSort(!toggleSort)} title={`sort alphabetically (default(index) or descending order) by ${category}`}>
							<svg className='w-4 h-4'
							xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h7.508a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.75.75v6.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V7.75A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75h4.562a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
							</svg>
						</button>
						<button className={toggleSearch ? 'opacity-100' : 'opacity-50'} onClick={() => (setToggleSearch(!toggleSearch), setSearchQuery(''))} title={`search by ${category}`}>
							<svg className='w-4 h-4'
							xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
							</svg>
						</button>
					</div>
				}
			</div>
			{active === category &&
				// <div className='border-l mx-2'>
				<>
		 			{/* <div className=''> */}
						{toggleSearch &&
							<div className='flex items-center sticky top-0'>
								<input autoFocus 
									className='w-full ml-[7px] mr-2 my-0.5 pl-1 pr-5 border rounded dark:border-[#444] dark:bg-[#333]
									focus:outline-none' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder='search...' maxLength='13'/>
								{searchQuery.length > 0 &&
									<button className='absolute right-[13px]' onClick={() => setSearchQuery('')} title='click to clear the search input field' tabIndex='-1'>
										<svg className='w-3 h-3'
										xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
											<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
										</svg>
									</button>
								}
							</div>
						}
					{/* </div> */}
					<ul id={`${category}List`} className='overflow-scroll max-h-[500px] ml-5'>
						{searchedProjects.length > 0 
						? (searchedProjects 
								.map(project => 
									<li key={project.id} className=''>
										<NavLink to={`${project.id}`} className='block'>
											{project.id}
										</NavLink>
									</li>
								)
							)
						: <button className='w-full text-center' onClick={() => setSearchQuery('')} title='click to clear the search input field'>
							<span className='block text-red-400'>no matches</span> 
							<span className='block text-xs'>click to clear the search input field</span>
						</button>
						}

					</ul> 
				</>
			}
		</>
	)
}