import styles from './HeaderForm.module.scss'

import { FormBox } from '../FormBox/FormBox'
import { FormLabel } from '../FormLabel/FormLabel'
import { FullWidthButton } from '../FullWidthButton/FullWidthButton'
import { Hint } from '../Hint/Hint'
import { Title } from '../Title/Title'
import { Form } from 'react-router-dom'
import { fetchData } from '../../api/fetchData'

export async function actionsHeader({ request }) {
	const data = await request.formData()

	const updateFields = {
		id: 1,
		img_school_logo: data.get('logo'),
		bell: data.get('bell')
	}

	Object.keys(updateFields).forEach(
		(key) =>
			(updateFields[key] === '' || undefined) && delete updateFields[key]
	)

	if (updateFields.img_school_logo === '' && updateFields.bell === '') return null
	
	return await fetchData('PUT', updateFields, 'headers')
}

export function HeaderForm({ headerData: { img_school_logo, bell } }) {

	return (
		<Form method='PUT' action='/panel/naglowek' className={styles.form}>
			<Title>Edycja</Title>

			<FormBox>
				<FormLabel id='logo'>Logo</FormLabel>
				<input
					className={styles.input}
					type='text'
					id='logo'
					name='logo'
					defaultValue={img_school_logo}
					placeholder={img_school_logo}
				/>
			</FormBox>

			<FormBox>
				<FormLabel id='bell'>Dzwonek</FormLabel>
				<input
					className={styles.input}
					type='text'
					id='bell'
					name='bell'
					defaultValue={bell}
					placeholder={bell}
				/>
				<Hint>*Wpisz słowo godzina, a powróci do originału.</Hint>
			</FormBox>

			<FullWidthButton>Aktualizuj</FullWidthButton>
		</Form>
	)
}
