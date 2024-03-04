import styles from './Wrapper.module.scss'

export function Wrapper({ children }) {
	return <div className={styles.container}>{children}</div>
}
