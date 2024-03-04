import styles from './FlexWrap.module.scss'

export function FlexWrap({ children }) {
	return <div className={styles.container}>{children}</div>
}
