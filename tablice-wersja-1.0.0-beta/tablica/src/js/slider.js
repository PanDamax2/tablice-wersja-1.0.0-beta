import { settings } from './contants.js'

export function startSlider(carousel) {
	let timeoutId
	const firstCardWidth = carousel.querySelector('.carousel .card').offsetWidth

	const autoPlay = () => {
		timeoutId = setTimeout(() => {
			if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
				carousel.scrollLeft = 0
			} else {
				carousel.scrollLeft += firstCardWidth
			}
			autoPlay()
		}, settings.slider_time_scroll)
	}

	carousel.addEventListener('mouseenter', () => clearTimeout(timeoutId))
	carousel.addEventListener('mouseleave', autoPlay)

	autoPlay()
}
