import styles from './SidebarAvatar.module.scss'
import AvatarIcon from '../../assets/noavatar.png'

export function SidebarAvatar() {
	return (
		<div className={styles.user}>
			<img
				className={styles.userImage}
				src={AvatarIcon}
				alt='User icon'
				width='50'
				height='50'
			/>
			<div className={styles.userDetail}>
				<span className={styles.username}>Jan Nowak</span>
				<span className={styles.userTitle}>Administrator</span>
			</div>
		</div>
	)
}
