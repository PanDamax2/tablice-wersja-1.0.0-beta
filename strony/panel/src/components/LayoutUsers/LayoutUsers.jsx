import { Outlet } from 'react-router-dom'
import { Wrapper } from '../Wrapper/Wrapper'

export function LayoutUsers() {
	return (
		<Wrapper>
			<Outlet />
		</Wrapper>
	)
}
