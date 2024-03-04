import styles from './Error.module.scss'
import { useRouteError } from "react-router-dom"

export function Error() {
	const error = useRouteError()
    console.log(error);

	return (
		<div className={styles.container}>
			<h1>Wystąpił błąd!</h1>
			<p>Komunikat: {error.message}</p>
			<pre>{error.stack}</pre>
		</div>
	)
}
