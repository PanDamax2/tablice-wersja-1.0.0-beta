import { getDataFromDatabase } from '../api/getDataFromDatabase.js'
import { startTimer, isSchoolTime } from './timer.js'
import { startSlider } from './slider.js'

const initializeApp = async () => {
	try {
		const hiddenData = await getDataFromDatabase('hidden-sections')
		const headerData = await getDataFromDatabase('headers')

		if (hiddenData.length !== 0) {
			document.querySelector('.loader').classList.add('none')
			document.querySelector('.main-content').classList.remove('none')
		}

		renderHeader(headerData[0])

		if (hiddenData[0].replacements) {
			const replacementsData = await getDataFromDatabase('replacements')
			renderReplacements(replacementsData)
		} else {
			document.querySelector('.add-color').remove()
		}

		if (hiddenData[0].slider) {
			const sliderData = await getDataFromDatabase('sliders')
			renderSlider(sliderData)
		} else {
			document.querySelector('.slider').remove()
		}

		if (hiddenData[0].information) {
			const informationsData = await getDataFromDatabase('informations')
			renderInformations(informationsData[0])
		} else {
			document.querySelector('.news').remove()
		}

		if (hiddenData[0].classrooms && isSchoolTime(getCurrentTime())) {
			const classroomsData = await getDataFromDatabase('classrooms')
			renderClassroom(classroomsData)
		} else {
			document.querySelector('aside').remove()
		}
	} catch (err) {
		throw new Error(`Błąd podzczas pobierania danych: ${err}`)
	}
}

const renderHeader = (data) => {
	const bellSpan = document.querySelector('.bell')
	document.querySelector('.logo').src = data.img_school_logo

	if (!data.bell === 'godzina') {
		bellSpan.textContent = data.bell
	} else {
		startTimer(bellSpan)
		setInterval(startTimer(bellSpan), 60_000)
	}
}

function renderReplacements(data) {
	const table = document.querySelector('.replacements tbody')

	data.forEach((replacementData) => {
		const row = document.createElement('tr')

		const columns = [
			'lesson',
			'replacement',
			'subject',
			'room',
			'teacher',
			'branch',
			'date',
		]

		columns.forEach((columnKey) => {
			const cell = document.createElement('td')
			cell.textContent = replacementData[columnKey] || '---'
			row.appendChild(cell)
		})

		table.appendChild(row)
	})

	const stickyThead = 52
	let containerHeight = 262
	const tbodyHeight = table.clientHeight
	const distance = tbodyHeight - containerHeight + stickyThead

	if (tbodyHeight > containerHeight)
		return table.style.setProperty('--scroll-distance', `${-distance}px`)
	table.style.setProperty('--scroll-distance', `0`)
}

function renderSlider(imagesData) {
	const carousel = document.querySelector('.carousel')

	imagesData.forEach((imageData) => {
		const li = document.createElement('li')
		li.classList.add('card')

		const img = document.createElement('img')
		img.src = imageData.img_slider
		img.alt = 'Picture'
		img.classList.add('img')

		li.appendChild(img)
		carousel.appendChild(li)
	})
	startSlider(carousel)
}

function renderInformations(data) {
	const paragraphPoster = document.querySelector('.text')
	if (!data.show_img) {
		paragraphPoster.style.color = ''
		paragraphPoster.textContent = data.text
	} else {
		paragraphPoster.style.color = '#fff'
		document.querySelector(
			'.text'
		).style.backgroundImage = `url('${data.img_information}')`
	}
}

function renderClassroom(data) {
	const table = document.querySelector('.classroom tbody')

	const findLesson2 = (html, { minute, hour }) => {
		const th = html.querySelectorAll('.g')

		for (let i = 0; i < th.length; i++) {
			const time = th[i].textContent.match(/(\d+:\d+)\s*-\s*(\d+:\d+)/)
			const [startHour, startMinute] = time[1].split(':').map(Number)
			const [endHour, endMinute] = time[2].split(':').map(Number)

			if (
				(hour > startHour || (hour === startHour && minute >= startMinute)) &&
				(hour < endHour || (hour === endHour && minute < endMinute))
			) {
				return { i, isBreak: false }
			} else if (
				hour < startHour ||
				(hour === startHour && minute < startMinute)
			) {
				return { i, isBreak: true }
			}
		}
		return { i: 0, isBreak: false }
	}

	data.forEach(({ html }) => {
		const parser = new DOMParser()
		const doc = parser.parseFromString(html, 'text/html')
		const className = doc.querySelector('.tytulnapis').textContent

		const lessonInfo = findLesson2(doc, getCurrentTime())
		const tabela = doc.querySelectorAll('.tabela tbody tr')

		const { day } = getCurrentTime()
		const actually = tabela[lessonInfo.i + 1].querySelectorAll('.l')

		const room = actually[day].querySelectorAll('.s')
		let sala

		if (room.length === 0) return

		if (room.length === 1) {
			sala = room[0].textContent
		} else {
			sala = `${room[0].textContent} i ${room[1].textContent}`
		}

		const row = document.createElement('tr')

		const cell1 = document.createElement('td')
		cell1.textContent = className.split(' ')[0]

		const cell2 = document.createElement('td')
		cell2.textContent = sala

		row.appendChild(cell1)
		row.appendChild(cell2)
		table.appendChild(row)
	})
}

export const getCurrentTime = () => {
	const now = new Date()
	return {
		day: now.getDay(),
		hour: now.getHours(),
		minute: now.getMinutes(),
		// day: 1,
		// hour: 8,
		// minute: 55,
	}
}

document.addEventListener('DOMContentLoaded', initializeApp)
