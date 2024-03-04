import styles from './Search.module.scss'

import SearchIcon from '../../assets/search.png'

export function Search() {
    return (
		<div className={styles.container}>
            <img src={SearchIcon} className={styles.icon} width={22} height={22} />
			
			<input
				className={styles.input}
				type='text'
				placeholder=''
				name='search'
				autoComplete='off'
			/>
		</div>
	)
}