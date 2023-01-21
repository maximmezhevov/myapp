import { useLayoutEffect, useState } from 'react'

export const useTheme = () => {

	const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
	const systemTheme = isDarkTheme ? 'dark' : 'light'

	// const [theme, setTheme] = useState(systemTheme)
	// useLayoutEffect(() => {
	// 	document.documentElement.setAttribute('data-theme', theme)
	// }, [theme])

	const [theme, setTheme] = useState(localStorage.getItem('app-theme') || systemTheme)
	useLayoutEffect(() => {
	  document.documentElement.setAttribute('data-theme', theme)
	  localStorage.setItem('app-theme', theme)
	}, [theme])

	const toggleTheme = (theme) => {
		if (theme === 'light')
			return 'dark'
		return 'light'
	}

	return {
		theme,
		setTheme,
		onClick: () => setTheme(toggleTheme),
		
		toggleThemeButton: 
			<button onClick={() => setTheme(toggleTheme)}>
				{theme === 'dark' 
				? <svg className='w-4 h-4 opacity-25 hover:opacity-100'
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  					<path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
					</svg>
				: <svg className='w-4 h-4 opacity-25 hover:opacity-100'
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
					</svg>
				}
			</button>
	}
}

	/* COPY tailwind documentation */ 

	// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
	// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	//   document.documentElement.classList.add('dark')
	// } else {
	//   document.documentElement.classList.remove('dark')
	// }

	// // Whenever the user explicitly chooses light mode
	// localStorage.theme = 'light'

	// // Whenever the user explicitly chooses dark mode
	// localStorage.theme = 'dark'

	// // Whenever the user explicitly chooses to respect the OS preference
	// localStorage.removeItem('theme')

