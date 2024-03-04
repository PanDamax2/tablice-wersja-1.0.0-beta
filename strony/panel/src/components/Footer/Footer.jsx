import styles from './Footer.module.scss'

export function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>PanDamax && Bartosiak</div>
			<div className={styles.text}>&copy; Prawa Zastrzeżone</div>
		</div>
	)
}
