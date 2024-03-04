import styles from './FormTable.module.scss'

export function FormTable({ children }) {
	return <table className={styles.table}>{children}</table>
}
