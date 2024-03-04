import styles from './Sidebar.module.scss'

import { SidebarAvatar } from '../SidebarAvatar/SiderbarAvatar'
import { SidebarList } from '../SidebarList/SidebarList'

export function Sidebar() {
	return (
		<div className={styles.container}>
			<SidebarAvatar />
			<SidebarList />
		</div>
	)
}
