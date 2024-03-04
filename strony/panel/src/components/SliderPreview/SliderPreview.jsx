import styles from './SliderPreview.module.scss'

import { Title } from '../Title/Title'
import AddImageIcon from '../../assets/add-img.png'

export function SliderPreview({ slidersData }) {
	return (
		<>
			<Title>Wygląd</Title>

			<ul className={styles.carousel}>
				{slidersData.map((img) => (
					<li key={img.slider_id} className={styles.card}>
						<img
							className={styles.img}
							src={img.img_slider || AddImageIcon}
							alt='Slider image'
							width='230'
							height='200'
						/>
					</li>
				))}
			</ul>
		</>
	)
}
