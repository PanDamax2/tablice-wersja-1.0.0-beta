import { settings } from '../js/contants.js'

export async function getDataFromDatabase(data) {
	try {
		const response = await fetch(`${settings.BACK_END_URL}/${data}`)

		if (!response.ok) {
			throw new Error(`Failed to download ${data}`)
		}
		return response.json()
	} catch (err) {
		console.log(`An error occurred in ${data}:`, err)
		throw err
	}
}