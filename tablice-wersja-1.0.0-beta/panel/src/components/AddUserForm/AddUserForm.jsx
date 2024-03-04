import styles from './AddUserForm.module.scss'

import { FullWidthButton } from '../FullWidthButton/FullWidthButton'
import { SelectedBox } from '../SelectedBox/SelectedBox'
import { UserBox } from '../UserBox/UserBox'

export function AddUserForm() {
	return (
		<form className={styles.form}>
			<UserBox
				name='username'
				autoComplete='given-name'
				pattern='.{3,}'
				type='text'
				required>
				Imię: <pre>(min. 3 znaki)*</pre>
			</UserBox>

			<UserBox
				name='surname'
				autoComplete='family-name'
				pattern='.{3,}'
				type='text'
				required>
				Nazwisko: <pre>(min. 3 znaki)*</pre>
			</UserBox>

			<UserBox
				name='login'
				autoComplete='username'
				pattern='.{3,}'
				type='text'
				required>
				Login: <pre>(min. 3 znaki)*</pre>
			</UserBox>

			<UserBox
				name='password'
				autoComplete='new-password'
				pattern='.{5,}'
				type='password'
				required>
				Hasło: <pre>(min. 5 znaki)*</pre>
			</UserBox>

			<UserBox
				name='email'
				autoComplete='email'
				pattern='.{3,}'
				type='email'
				required>
				Email:
			</UserBox>

			<UserBox name='avatar' autoComplete='off' type='text'>
				Avatar:
			</UserBox>

			<SelectedBox />

			<FullWidthButton>Wyślij</FullWidthButton>
		</form>
	)
}
