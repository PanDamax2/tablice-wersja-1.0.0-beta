import styles from './FullWidthButton.module.scss'

export function FullWidthButton({ children }) {
	return <button className={styles.button}>{children}</button>
}
