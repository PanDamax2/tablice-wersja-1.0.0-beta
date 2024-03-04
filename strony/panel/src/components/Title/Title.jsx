import styles from './Title.module.scss'

export function Title({ children }) {
	return <h3 className={styles.title}>{children}</h3>
}