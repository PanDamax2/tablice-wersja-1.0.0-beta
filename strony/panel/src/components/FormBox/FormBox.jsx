import styles from './FormBox.module.scss'

export function FormBox({ children }) {
	return <div className={styles.container}>{children}</div>
}
