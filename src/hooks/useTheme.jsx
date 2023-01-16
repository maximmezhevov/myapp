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
		// onClick: () => setTheme(`${theme === 'light' ? 'dark' : 'light'}`),
		toggleThemeButton: 
			<button onClick={() => setTheme(toggleTheme)}>
				{/* {theme === 'dark' ? 
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
						<path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
					</svg>
				: 
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
						<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
					</svg>
				} */}
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> 
					<path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
				</svg>
			</button>
		// toggleThemeButton: <button onClick={() => setTheme(`${theme === 'light' ? 'dark' : 'light'}`)}>{theme}</button>
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

