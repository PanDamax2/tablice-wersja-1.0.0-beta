import { Wrapper } from '../../components/Wrapper/Wrapper'
import { ReplacementsPreview } from '../../components/ReplacementsPreview/ReplacementsPreview'
import { ReplacementsForm } from '../../components/ReplacementsForm/ReplacementsForm'
import { useLoaderData } from 'react-router-dom'
import { HiddenSectionInfo } from '../../components/HiddenSectionInfo/HiddenSectionInfo'

export function ReplacementsPage() {
	const { jsonData: replacementsData, hiddenSectionsData } = useLoaderData()

	return (
		<Wrapper>
			<>
				{!hiddenSectionsData[0].replacements ? (
					<HiddenSectionInfo name='zastępstwa'/>
				) : (
					<ReplacementsPreview replacementsData={replacementsData} />
				)}

				<ReplacementsForm
					replacementsData={replacementsData}
					hiddenSectionsData={hiddenSectionsData}
				/>
			</>
		</Wrapper>
	)
}
