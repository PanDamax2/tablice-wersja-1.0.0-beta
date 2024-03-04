import styles from './ClassroomForm.module.scss'

import { Title } from '../Title/Title'
import { FormButtonAddRow } from '../FormButtonAddRow/FormButtonAddRow'
import { FormLabel } from '../FormLabel/FormLabel'
import { Form } from 'react-router-dom'
import { HideCheckbox } from '../HideCheckbox/HideCheckbox'
import { fetchData } from '../../api/fetchData'

async function sendHtmlFile(data) {
	const fileSizeLimit = 30 * 1024 // 30 kB

	try {
		const file = data.html
		const reader = new FileReader()

		if (file.size > fileSizeLimit || file.size === 0) {
			return null
		}

		reader.readAsText(file)

		await new Promise((resolve, reject) => {
			reader.onload = resolve
			reader.onerror = reject
		})

		const updateFields = { html: reader.result, id: data.id }

		return await fetchData('PUT', updateFields, 'classrooms')
	} catch (err) {
		console.log(err)
		throw new Error('Failed to update file!')
	}
}

export async function actionsClassroom({ request }) {
	const data = Object.fromEntries(await request.formData())

	switch (request.method) {
		case 'POST':
			return await fetchData('POST', data, 'classrooms')
		case 'PUT':
			return await sendHtmlFile(data)
		case 'DELETE':
			return await fetchData('DELETE', data, 'classrooms')
		default:
			throw new Response('The request method is not supported', {
				status: 405,
			})
	}
}

export function ClassroomForm({ classromsData, hiddenSectionsData }) {
	return (
		<>
			<Title>Edycja</Title>

			<div className={styles.wrapper}>
				<HideCheckbox
					name='classrooms'
					hidden={hiddenSectionsData[0].classrooms}
				/>

				<FormButtonAddRow method='POST' action='/panel/sale'>
					Dodaj kolejny plan lekcji
				</FormButtonAddRow>

				{classromsData.map((file, index) => (
					<div key={file.classroom_id} className={styles.container}>
						<Form
							method='PUT'
							action='/panel/sale'
							className={styles.form}
							encType='multipart/form-data'>
							<input type='hidden' value={file.classroom_id} name='id' />

							<FormLabel id={`file${file.classroom_id}`}>
								Plan zajęć {index + 1}
							</FormLabel>

							<input
								className={styles.input}
								name='html'
								id={`file${file.classroom_id}`}
								type='file'
								accept='text/plain, text/html'
							/>

							<button className={styles.update}>Aktualizuj</button>
						</Form>

						<Form method='DELETE' action='/panel/sale' className={styles.form}>
							<input type='hidden' value={file.classroom_id} name='id' />
							<button className={styles.delete}>Usuń</button>
						</Form>
					</div>
				))}
			</div>
		</>
	)
}
