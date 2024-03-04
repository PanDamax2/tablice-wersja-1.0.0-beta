import styles from './HeaderPreview.module.scss'

import schoolLogoIcon from '../../assets/logo-school.png'
import { Title } from '../Title/Title'

export function HeaderPreview({ headerData: { img_school_logo, bell } }) {
	return (
		<>
			<Title>Wygląd</Title>

			<div className={styles.container}>
				<img
					src={img_school_logo || schoolLogoIcon}
					alt='School logo'
					width='300'
					height='90'
					className={styles.logoScholl}
				/>
				<p className={styles.bell}>
					{bell === 'godzina' ? 'Do końca leckji $ - $$min' : bell}
				</p>
			</div>
		</>
	)
}
