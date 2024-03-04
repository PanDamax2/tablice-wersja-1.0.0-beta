import styles from './Hint.module.scss'

export function Hint({ children }) {
	return <span className={styles.hint}>{children}</span>
}
