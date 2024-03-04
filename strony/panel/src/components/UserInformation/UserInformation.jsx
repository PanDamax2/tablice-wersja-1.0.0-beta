import styles from './UserInformation.module.scss'

import UserIcon from '../../assets/noavatar.png'

export function UserInformation({ userData }) {
	return (
		<div className={styles.container}>
			<img
				src={userData.img || UserIcon}
				alt='Avatar icon'
				className={styles.img}
				width={150}
				height={150}
			/>
			<p className={styles.name}>
				{userData.user_name} {userData.user_lastname}
			</p>
		</div>
	)
}
