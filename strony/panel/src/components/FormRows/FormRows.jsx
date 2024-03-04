import styles from './FormRows.module.scss'

import { FormLabel } from '../FormLabel/FormLabel'
import { fetchData } from '../../api/fetchData'
import { Form } from 'react-router-dom'

const inputFields = [
	{ className: `${styles.input} ${styles.short}`, key: 1, name: 'lesson' },
	{ className: `${styles.input} ${styles.long}`, key: 2, name: 'teacher' },
	{ className: `${styles.input} ${styles.mid}`, key: 3, name: 'branch' },
	{ className: `${styles.input} ${styles.long}`, key: 4, name: 'subject' },
	{ className: `${styles.input} ${styles.mid}`, key: 5, name: 'room' },
	{ className: `${styles.input} ${styles.long}`, key: 6, name: 'deputy' },
	{ className: `${styles.input} ${styles.long}`, key: 7, name: 'date' },
]

export async function actionsReplacement({ request }) {
	const data = Object.fromEntries(await request.formData())

	switch (request.method) {
		case 'POST':
			return await fetchData('POST', data, 'replacements')
		case 'PUT':
			return await fetchData('PUT', data, 'replacements')
		case 'DELETE':
			return await fetchData('DELETE', data, 'replacements')
		default:
			throw new Response('The request method is not supported', {
				status: 405,
			})
	}
}

export function FormRows({ replacementsData }) {
	return (
		<>
			{replacementsData.map((input, index) => (
				<div key={input.replacements_id} className={styles.container}>
					<Form
						method='PUT'
						action='/panel/zastepstwa'
						key={input.replacements_id}
						className={styles.form}>
						<input type='hidden' value={input.replacements_id} name='id' />

						<FormLabel id={`lesson${input.replacements_id}`}>
							Wiersz {index + 1}
						</FormLabel>

						<div>
							{inputFields.map((el) => (
								<input
									className={el.className}
									name={el.name}
									id={`${el.name}${input.replacements_id}`}
									placeholder={input[el.name]}
									defaultValue={input[el.name]}
									key={el.key}
									type='text'
								/>
							))}
						</div>

						<button className={styles.update}>Aktualizuj</button>
					</Form>

					<Form
						method='DELETE'
						action='/panel/zastepstwa'
						className={styles.form}>
						<input type='hidden' value={input.replacements_id} name='id' />
						<button className={styles.delete}>Usuń</button>
					</Form>
				</div>
			))}
		</>
	)
}
