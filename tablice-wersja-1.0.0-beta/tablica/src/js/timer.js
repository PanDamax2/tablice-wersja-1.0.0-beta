import { lessons, settings } from './contants.js'
import { getCurrentTime } from './main.js'

export function startTimer(element) {
	const timeSpan = document.querySelector('.time')
	const currentTime = getCurrentTime()

	if (isSchoolTime(currentTime)) {
		const lessonIndex = findCurrentLessonIndex(currentTime)
		updateRemainingTime(lessonIndex, currentTime, timeSpan)
		updateColorBell(lessonIndex)
	} else {
		// element.style.backgroundColor = settings.colorEnd
		element.textContent = 'Brak aktualnie lekcji'
	}
}

function getLessonTime(lessonIndex) {
	const lessonTime = lessons[lessonIndex + 1].match(/(\d+:\d+)\s*-\s*(\d+:\d+)/)
	const [startHour, startMinute] = lessonTime[1].split(':').map(Number)
	const [endHour, endMinute] = lessonTime[2].split(':').map(Number)
	return { startHour, startMinute, endHour, endMinute }
}

function findCurrentLessonIndex({ minute, hour }) {
	for (let i = 0; i < Object.keys(lessons).length; i++) {
		const { startHour, startMinute, endHour, endMinute } = getLessonTime(i)

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
}

const updateRemainingTime = ({ i, isBreak }, { minute, hour }, timeSpan) => {
	const { startHour, startMinute, endHour, endMinute } = getLessonTime(i)
	const currentTime = hour * 60 + minute

	let remainingMinutes
	if (isBreak) {
		const startTime = startHour * 60 + startMinute
		remainingMinutes = startTime - currentTime
	} else {
		const endTime = endHour * 60 + endMinute
		remainingMinutes = endTime - currentTime
	}

	timeSpan.textContent = ` ${remainingMinutes}min`
}

const updateColorBell = ({ i, isBreak }) => {
	const bellSpan = document.querySelector('.bell')
	const subjectSpan = document.querySelector('.subject')

	if (isBreak) {
		// bellSpan.style.backgroundColor = settings.colorBreak
		subjectSpan.textContent = `przerwy`
	} else {
		// bellSpan.style.backgroundColor = settings.colorLesson
		subjectSpan.textContent = `lekcji ${i + 1}`
	}
}

export function isSchoolTime({ day, hour, minute }) {
	if (day >= 1 && day <= 5) {
		const firstLesson = lessons[1].match(/(\d+:\d+)\s*-\s*(\d+:\d+)/)
		const [startHour, startMinute] = firstLesson[1].split(':').map(Number)

		const lastLesson = lessons[Object.keys(lessons).length].match(
			/(\d+:\d+)\s*-\s*(\d+:\d+)/
		)
		const [endHour, endMinute] = lastLesson[2].split(':').map(Number)

		if (
			(hour > startHour || (hour === startHour && minute >= startMinute)) &&
			(hour < endHour || (hour === endHour && minute < endMinute))
		) {
			return true
		}
	}
	return false
}
