import styles from './Loading.module.scss'


export function Loading() {
	return (
		<div className={styles.container}>
			<div className={styles.tripleSpinner}>
				<div className={styles.spinnerInner}></div>
				<div className={`${styles.spinnerInner} ${styles.spinnerInner1}`}></div>
				<div className={`${styles.spinnerInner} ${styles.spinnerInner2}`}></div>
			</div>
		</div>
	)
}
