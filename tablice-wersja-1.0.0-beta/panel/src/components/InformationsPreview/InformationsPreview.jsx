import styles from './InformationsPreview.module.scss'

import { Title } from '../Title/Title'

export function InformationsPreview({
	informationsData: { text, img_information },
	showPoster,
}) {
	const image = showPoster ? `url(${img_information})` : ''

	return (
		<>
			<Title>Wygląd</Title>

			<div className={styles.container}>
				<h4 className={styles.heading}>Ogłoszenia</h4>
				<p className={styles.text} style={{ backgroundImage: image }}>
					{!showPoster && text}
				</p>
			</div>
		</>
	)
}
