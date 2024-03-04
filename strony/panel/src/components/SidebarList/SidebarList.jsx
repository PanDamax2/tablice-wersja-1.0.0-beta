import styles from './SidebarList.module.scss'
import { CATEGORIES } from '../../constants/categories'

import { SidebarLink } from '../SidebarLink/SidebarLink'
import { Link, useLocation } from 'react-router-dom'

export function SidebarList() {
	const { pathname } = useLocation()

	return (
		<ul className={styles.list}>
			{CATEGORIES.map((category) => (
				<li key={category.title}>
					<span className={styles.cat}>{category.title}</span>

					{category.list.map((item) => {
						
						// const isActive = pathname === item.path
						const isActive = pathname === item.path || (pathname.startsWith(item.path) && item.path !== '/panel')
						
						return (
							<Link to={item.path} key={item.title}>
								<SidebarLink active={isActive} item={item} />
							</Link>
						)
					})}
				</li>
			))}
		</ul>
	)
}
