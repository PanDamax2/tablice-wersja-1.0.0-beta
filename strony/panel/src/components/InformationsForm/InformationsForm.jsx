import styles from './InformationsForm.module.scss'

import { Title } from '../Title/Title'
import { FormLabel } from '../FormLabel/FormLabel'
import { Hint } from '../Hint/Hint'
import { FormBox } from '../FormBox/FormBox'
import { FullWidthButton } from '../FullWidthButton/FullWidthButton'
import { fetchData } from '../../api/fetchData'
import { Form } from 'react-router-dom'
import { HideCheckbox } from '../HideCheckbox/HideCheckbox'

export async function actionsInformations({ request }) {
	const data = await request.formData()

	const showPoster = data.get('show_img') === 'true' ? 1 : 0

	const updateFields = {
		id: 1,
		show_img: showPoster,
	}

	if (showPoster === 0) {
		updateFields.text = data.get('text')
	} else {
		updateFields.img_information = data.get('poster')
	}

	Object.keys(updateFields).forEach(
		(key) => (updateFields[key] === '' || undefined) && delete updateFields[key]
	)

	return await fetchData('PUT', updateFields, 'informations')
}

export function InformationsForm({
	informationsData,
	showPoster,
	handleShowPoster,
	hiddenSectionsData,
}) {
	return (
		<>
			<Title>Edycja</Title>

			<div className={styles.wrapper}>
				<HideCheckbox
					name='information'
					hidden={hiddenSectionsData[0].information}
				/>

				<button onClick={handleShowPoster} className={styles.button}>
					Pokaż {!showPoster ? 'plakat' : 'text'}
				</button>

				<Form method='PUT' action='/panel/ogloszenia'>
					<input type='hidden' value={showPoster} name='show_img' />

					{!showPoster ? (
						<FormBox>
							<FormLabel id='text'>Text</FormLabel>
							<textarea
								className={`${styles.input} ${styles.textarea}`}
								type='text'
								id='text'
								name='text'
								defaultValue={informationsData.text}
								placeholder={informationsData.text}></textarea>
							<Hint>*Max 609 znaków.</Hint>
						</FormBox>
					) : (
						<FormBox>
							<FormLabel id='poster'>Plakat</FormLabel>
							<input
								className={styles.input}
								type='text'
								id='poster'
								name='poster'
								defaultValue={informationsData.img_information}
								placeholder={informationsData.img_information}
							/>
						</FormBox>
					)}

					<FullWidthButton>Aktualizuj</FullWidthButton>
				</Form>
			</div>
		</>
	)
}
