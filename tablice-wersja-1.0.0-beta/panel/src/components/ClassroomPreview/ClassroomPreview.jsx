import styles from './ClassroomPreview.module.scss'

import { Title } from '../Title/Title'
import { ClassroomTable } from '../ClassroomTable/ClassroomTable'

export function ClassroomPreview({ classromsData }) {
	return (
		<>
			<Title>Wygląd</Title>

			<div className={styles.wrapper}>
				<ClassroomTable classromsData={classromsData} />
			</div>
		</>
	)
}
