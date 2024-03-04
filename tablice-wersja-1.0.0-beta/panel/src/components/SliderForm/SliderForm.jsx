import styles from './SliderForm.module.scss'

import { FormButtonAddRow } from '../FormButtonAddRow/FormButtonAddRow'
import { FormLabel } from '../FormLabel/FormLabel'
import { Title } from '../Title/Title'
import { fetchData } from '../../api/fetchData'
import { Form } from 'react-router-dom'
import { HideCheckbox } from '../HideCheckbox/HideCheckbox'

export async function actionsSlider({ request }) {
	const data = Object.fromEntries(await request.formData())

	switch (request.method) {
		case 'POST':
			return await fetchData('POST', data, 'sliders')
		case 'PUT':
			return await fetchData('PUT', data, 'sliders')
		case 'DELETE':
			return await fetchData('DELETE', data, 'sliders')
		default:
			throw new Response('The request method is not supported', {
				status: 405,
			})
	}
}

export function SliderForm({ slidersData, hiddenSectionsData }) {
	return (
		<>
			<Title>Edycja</Title>

			<div className={styles.wrapper}>
			<HideCheckbox
					name='slider'
					hidden={hiddenSectionsData[0].slider}
				/>

				<FormButtonAddRow method='POST' action='/panel/slider'>
					Dodaj kolejne zdjęcie
				</FormButtonAddRow>

				{slidersData.map((img, index) => (
					<div key={img.slider_id} className={styles.container}>
						<Form method='PUT' action='/panel/slider' className={styles.form}>
							<input type='hidden' value={img.slider_id} name='id' />

							<FormLabel id={`img${img.slider_id}`}>
								Zdjęcie {index + 1}
							</FormLabel>

							<input
								className={styles.input}
								name='img_slider'
								id={`img${img.slider_id}`}
								placeholder={img.img_slider || 'Puste'}
								defaultValue={img.img_slider}
								type='text'
							/>

							<button className={styles.update}>Aktualizuj</button>
						</Form>

						<Form
							method='DELETE'
							action='/panel/slider'
							className={styles.form}>
							<input type='hidden' value={img.slider_id} name='id' />
							<button className={styles.delete}>Usuń</button>
						</Form>
					</div>
				))}
			</div>
		</>
	)
}
