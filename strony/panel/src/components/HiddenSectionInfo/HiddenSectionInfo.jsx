import styles from './HiddenSectionInfo.module.scss'

import EyeIcon from '../../assets/hidden-section.svg'

export function HiddenSectionInfo({ name }) {
	return (
		<div className={styles.container}>
            <span>Sekcja {name} została ukryta</span>
			<img src={EyeIcon} alt='Hidden Eye Icon' />
		</div>
	)
}
