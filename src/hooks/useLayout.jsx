import { useLayoutEffect, useState } from 'react'

export const useLayout = () => {
	const [windowInnerHeight, setWindowInnerHeight] = useState(window.innerHeight)
	useLayoutEffect(() => {
		const resizewindowInnerHeight = () => {setWindowInnerHeight(window.innerHeight)}

		window.addEventListener('resize', resizewindowInnerHeight)
		return () => {window.removeEventListener('resize', resizewindowInnerHeight)}
	}, [])

	const heightNav  = windowInnerHeight - 80 

	return {
		windowInnerHeight,
		// windowInnerHeight: {height: windowInnerHeight},
		heightNav,
	}
}