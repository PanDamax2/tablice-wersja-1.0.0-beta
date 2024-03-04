import styles from './UserBox.module.scss'

export function UserBox({children, name, autoComplete, pattern, type, required, value}) {
	return (
		<div className={styles.box}>
			<label htmlFor={name} className={styles.label}>
				{children}
			</label>
			<input
				type={type}
				className={styles.input}
				id={name}
				name={name}
				required={required}
				pattern={pattern}
				autoComplete={autoComplete}
				defaultValue={value}
			/>
			{/* <img className='contact__icon' src={userIcon} alt='User icon' /> */}
		</div>
	)
}
