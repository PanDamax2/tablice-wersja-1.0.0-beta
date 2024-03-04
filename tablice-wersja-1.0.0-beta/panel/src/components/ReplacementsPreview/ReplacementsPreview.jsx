import styles from './ReplacementsPreview.module.scss'

import { REPLACEMENTS } from '../../constants/categories'
import { Title } from '../Title/Title'
import { FormTable } from '../FormTable/FormTable'

export function ReplacementsPreview({ replacementsData }) {
	return (
		<>
			<Title>Wygląd</Title>

			<div className={styles.container}>
				<FormTable>
					<thead>
						<tr>
							{REPLACEMENTS.map((item) => (
								<th key={item.key}>{item.title}</th>
							))}
						</tr>
					</thead>

					<tbody>
						{replacementsData.map((el) => (
							<tr key={el.replacements_id}>
								<td>{el.lesson}</td>
								<td>{el.teacher}</td>
								<td>{el.branch}</td>
								<td>{el.subject}</td>
								<td>{el.room}</td>
								<td>{el.deputy}</td>
								<td>{el.date}</td>
							</tr>
						))}
					</tbody>
				</FormTable>
			</div>
		</>
	)
}
