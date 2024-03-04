import styles from './UsersOptions.module.scss'

import { Search } from '../Search/Search'
import { Link } from 'react-router-dom'

export function UsersOptions() {
	return (
		<div className={styles.container}>

			<Search placeholder='Szukaj użytkownika...' />
			<Link to='/panel/uzytkownicy/dodaj'>
				<button className={styles.addButton}>Dodaj</button>
			</Link>
            
		</div>
	)
}
