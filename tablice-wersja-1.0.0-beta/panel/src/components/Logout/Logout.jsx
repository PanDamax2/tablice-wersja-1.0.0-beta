import styles from './Logout.module.scss'

import IconLogout from '../../assets/logout.png'

export function Logout({ children }) {
	return (
		<form>
			<button className={styles.logout}>
				<img src={IconLogout} alt='Icon logout' height={24} width={24} />
				<span>{children}</span>
			</button>
		</form>
	)
}
