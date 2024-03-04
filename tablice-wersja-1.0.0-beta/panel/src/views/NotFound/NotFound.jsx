import styles from './NotFound.module.scss'
import { Link } from "react-router-dom";

export function NotFound() {
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.eye}></div>
				<div className={styles.eye}></div>
			</div>
			<span className={styles.error}>404</span>

			<Link to='/panel' className={styles.return}>
				Powrót na stronę
			</Link>
		</div>
	)
}
