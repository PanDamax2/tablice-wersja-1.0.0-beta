import styles from './ClassroomTable.module.scss'

export function ClassroomTable({ classromsData }) {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Klasa</th>
					<th>Sala</th>
				</tr>
			</thead>

			<tbody>
				{classromsData.map((data) => {
					if (data.html === null) return

					const startIndex = data.html.indexOf('<span class="tytulnapis">')
					const endIndex = data.html.indexOf('</span>', startIndex)
					const spanContent = data.html.substring(
						startIndex + '<span class="tytulnapis">'.length,
						endIndex
					)

					return (
						<tr key={data.classroom_id}>
							<td>{spanContent.split(' ')[0]}</td>
							<td>przesłano</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
