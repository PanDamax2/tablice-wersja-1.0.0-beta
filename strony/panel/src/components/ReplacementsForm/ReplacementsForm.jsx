import styles from './ReplacementsForm.module.scss'

import { FormRows } from '../FormRows/FormRows'
import { Title } from '../Title/Title'
import { FormButtonAddRow } from '../FormButtonAddRow/FormButtonAddRow'
import { HideCheckbox } from '../HideCheckbox/HideCheckbox'

export function ReplacementsForm({ replacementsData, hiddenSectionsData }) {
	return (
		<>
			<Title>Edycja</Title>

			<div className={styles.wrapper}>
				<HideCheckbox
					name='replacements'
					hidden={hiddenSectionsData[0].replacements}
				/>

				<FormButtonAddRow method='POST' action='/panel/zastepstwa'>
					Dodaj kolejny wiersz
				</FormButtonAddRow>

				<FormRows replacementsData={replacementsData} />
			</div>
		</>
	)
}
