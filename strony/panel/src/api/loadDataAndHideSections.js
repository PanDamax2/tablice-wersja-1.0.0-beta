import { BACK_END_URL } from '../constants/api'

export const loaderDataAndHideSections = async (data) => {
	try {
		const response = await fetch(`${BACK_END_URL}/${data}`)
		const response2 = await fetch(`${BACK_END_URL}/hidden-sections`)

		if (!response.ok || !response2.ok) {
			throw new Error(`Failed to download hidden-sections`)
		}

		const jsonData = await response.json()
		const hiddenSectionsData = await response2.json()

		return { jsonData, hiddenSectionsData }
	} catch (err) {
		console.log(`An error occurred in loading data and hidden sections:`, err)
		throw err
	}
}
