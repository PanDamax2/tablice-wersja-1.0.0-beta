import { BACK_END_URL } from '../constants/api'

export const loader = async (data) => {
	try {
		const response = await fetch(`${BACK_END_URL}/${data}`)

		if (!response.ok) {
			throw new Error(`Failed to download ${data}`)
		}
		return response
	} catch (err) {
		console.log(`An error occurred in ${data}:`, err)
		throw err
	}
}
