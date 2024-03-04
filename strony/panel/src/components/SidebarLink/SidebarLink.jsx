import styles from './SidebarLink.module.scss'

export function SidebarLink({ item, active }) {
	return (
		<div className={`${styles.container} ${active && styles.active}`}>
			<img src={item.icon} alt={item.title}/>
			<span className={styles.title}>{item.title}</span>
		</div>
	)
}
