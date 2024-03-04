import styles from './Layout.module.scss'

import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import { Footer } from '../Footer/Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import { Loading } from '../Loading/Loading'

export function Layout() {
	const { state } = useNavigation()

	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				<Sidebar />
			</div>
			<div className={styles.content}>
				<Navbar />
				{(state === 'submitting' || state === 'loading') && <Loading />}
				<Outlet />
				<Footer />
			</div>
		</div>
	)
}
