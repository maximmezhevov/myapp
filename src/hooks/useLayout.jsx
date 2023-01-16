import { useLayoutEffect, useState } from 'react'

export const useLayout = () => {

	const headerHeight = (8 * 2/*margin*/) + 16/*heder*/ + (24 * 2/*pages list*/) + (8 * 2/*gap*/) + 8 + 24 + 8 + (24*3)
	// console.log(headerHeight)
	// const headerHeight = 208

	const heightH2 = 16

	const [windowInnerHeight, setWindowInnerHeight] = useState(window.innerHeight)
	useLayoutEffect(() => {
		const resizewindowInnerHeight = () => {setWindowInnerHeight(window.innerHeight)}

		window.addEventListener('resize', resizewindowInnerHeight)
		return () => {window.removeEventListener('resize', resizewindowInnerHeight)}
	}, [])

	// const resultWindowInnerHeight = windowInnerHeight - (headerHeight + marginBotton)
	const resultWindowInnerHeight = windowInnerHeight - heightH2
	const heightAccordion = windowInnerHeight - headerHeight


	return {
		headerHeight, 
		windowInnerHeight,

		resultWindowInnerHeight,
		resultWindowInnerHeight2: {minHeight: resultWindowInnerHeight},

		heightAccordion
	}
}