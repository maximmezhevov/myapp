import { useLayoutEffect, useState } from 'react'

export const useLayout = () => {
	const [windowInnerHeight, setWindowInnerHeight] = useState(window.innerHeight)
	useLayoutEffect(() => {
		const resizewindowInnerHeight = () => {setWindowInnerHeight(window.innerHeight)}

		window.addEventListener('resize', resizewindowInnerHeight)
		return () => {window.removeEventListener('resize', resizewindowInnerHeight)}
	}, [])

	const HeightCategoryNavList = windowInnerHeight - ((24 * 4 + (8 * 5)) + (24 * 2)) 

	return {
		windowInnerHeight,
		// windowInnerHeight: {height: windowInnerHeight},
		HeightCategoryNavList
	}
}