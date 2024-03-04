import styles from './SwitchTheme.module.scss'
import { useState, useEffect } from 'react'

export function SwitchTheme() {
	const [theme, setTheme] = useState(
		() => localStorage.getItem('theme') || 'dark'
	)

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
	}, [theme])

	function handleSetTheme() {
		setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
	}

	return (
		<label className={styles.switch} htmlFor='theme' onClick={handleSetTheme}>
			<input
				defaultChecked={theme === 'dark'}
				value={theme}
				className={styles.switch__input}
				type='checkbox'
				id='theme'
			/>

			<span className={styles.switch__icon}>
				{[...Array(11)].map((_, index) => (
					<span
						key={index}
						className={`${styles['switch__icon-part']} ${
							styles[`switch__icon-part--${index + 1}`]
						}`}
					/>
				))}
			</span>

			<span className={styles.switch__sr}>Dark Mode</span>
		</label>
	)
}
