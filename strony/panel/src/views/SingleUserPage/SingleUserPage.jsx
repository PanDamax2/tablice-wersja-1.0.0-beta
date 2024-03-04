import { useLoaderData } from 'react-router-dom'
import { UserInformation } from '../../components/UserInformation/UserInformation'
import { FormUser } from '../../components/FormUser/FormUser'
import { FlexWrap } from '../../components/FlexWrap/FlexWrap'

export function SingleUserPage() {
	const userData = useLoaderData()

	return (
		<FlexWrap>
			<UserInformation userData={userData} />
			<FormUser userData={userData} />
		</FlexWrap>
	)
}
