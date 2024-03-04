import styles from './HideCheckbox.module.scss'

import { useState } from 'react'
import { fetchData } from '../../api/fetchData'
import { useNavigate } from 'react-router-dom'

export function HideCheckbox({ hidden, name }) {
	const [checked, setChecked] = useState(hidden)
	const navigate = useNavigate()

	const handleCheckboxChange = async () => {
		setChecked(!checked)

		try {
			const updateFields = {
				id: 1,
				[name]: !checked,
			}

			return await fetchData('PUT', updateFields, 'hidden-sections')
		} catch (error) {
			console.error(`Error updating hidden section ${name}:`, error)
		} finally {
			navigate(window.location.pathname)
		}
	}

	return (
		<form method='PUT' className={styles.toggle}>
			<input
				checked={checked}
				onChange={handleCheckboxChange}
				type='checkbox'
				name={name}
				id='hide'
			/>

			<label htmlFor='hide'>{checked ? 'Schowaj' : 'Pokaż'} sekcje</label>
		</form>
	)
}
