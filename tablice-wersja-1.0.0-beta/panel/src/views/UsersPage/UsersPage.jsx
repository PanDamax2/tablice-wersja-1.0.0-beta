import { UsersOptions } from '../../components/UsersOptions/UsersOptions'
import { UsersTable } from '../../components/UsersTable/UsersTable'
import { useLoaderData } from 'react-router-dom'

export function UsersPage() {
	const usersData = useLoaderData()

	return (
		<>
			<UsersOptions />
			<UsersTable usersData={usersData} />
			{/* <Pagination count={count} /> */}
		</>
	)
}
