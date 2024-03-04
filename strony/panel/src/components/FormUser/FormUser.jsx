import styles from './FormUser.module.scss'

import { FullWidthButton } from '../FullWidthButton/FullWidthButton'
import { UserBox } from '../UserBox/UserBox'
import { SelectedBox } from '../SelectedBox/SelectedBox'

export function FormUser({ userData }) {
	return (
		<div className={styles.formContainer}>
			<form className={styles.form}>
				<input type='hidden' name='id' value={userData.user_id} />

				<UserBox
					value={userData.user_name}
					name='username'
					autoComplete='given-name'
					pattern='.{3,}'
					type='text'
					required>
					Imię: <pre>(min. 3 znaki)*</pre>
				</UserBox>

				<UserBox
					value={userData.user_lastname}
					name='surname'
					autoComplete='family-name'
					pattern='.{3,}'
					type='text'
					required>
					Nazwisko: <pre>(min. 3 znaki)*</pre>
				</UserBox>

				<UserBox
					value={userData.login}
					name='login'
					autoComplete='username'
					pattern='.{3,}'
					type='text'
					required>
					Login: <pre>(min. 3 znaki)*</pre>
				</UserBox>

				<UserBox
					value={userData.email}
					name='email'
					autoComplete='email'
					pattern='.{3,}'
					type='email'
					required>
					Email:
				</UserBox>

				<UserBox
					value={userData.avatar}
					name='avatar'
					autoComplete='off'
					type='text'>
					Avatar:
				</UserBox>

				<SelectedBox value={userData.admin} />

				<FullWidthButton>Aktualizuj</FullWidthButton>
			</form>
		</div>
	)
}
