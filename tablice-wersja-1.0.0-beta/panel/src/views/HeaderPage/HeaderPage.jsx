import { Wrapper } from '../../components/Wrapper/Wrapper'
import { HeaderPreview } from '../../components/HeaderPreview/HeaderPreview'
import { HeaderForm } from '../../components/HeaderForm/HeaderForm'
import { useLoaderData } from 'react-router-dom'

export function HeaderPage() {
	const headerData = useLoaderData()
	
	return (
		<Wrapper>
			<HeaderPreview headerData={headerData[0]}/>
			<HeaderForm headerData={headerData[0]}/>
		</Wrapper>
	)
}
