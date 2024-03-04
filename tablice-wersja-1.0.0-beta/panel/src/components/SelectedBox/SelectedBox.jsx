import styles from './SelectedBox.module.scss'

export function SelectedBox({ value }) {
	return (
		<div className={styles.container}>
			<label htmlFor='isAdmin'>Admin:</label>
			<select name='admin' id='isAdmin' defaultValue={value || 0} required>
				<option value={1}>Tak</option>
				<option value={0}>Nie</option>
			</select>
		</div>
	)
}
