import styles  from './FormButtonAddRow.module.scss'
import { Form  } from 'react-router-dom' 

export function FormButtonAddRow({ children, method, action }) {
	return (
		<Form method={method} action={action}>
			<button className={styles.button}>{children}</button>
		</Form>
	)
}
