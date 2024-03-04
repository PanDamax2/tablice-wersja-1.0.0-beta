import styles from './FormLabel.module.scss'

export function FormLabel({ children, id }) {
	return (
		<label className={styles.label} htmlFor={id}>
			{children}
		</label>
	)
}
