import { useLoaderData } from 'react-router-dom'
import { ClassroomPreview } from '../../components/ClassroomPreview/ClassroomPreview'
import { Wrapper } from '../../components/Wrapper/Wrapper'
import { ClassroomForm } from '../../components/ClassroomForm/ClassroomForm'
import { HiddenSectionInfo } from '../../components/HiddenSectionInfo/HiddenSectionInfo'

export function ClassroomPage() {
	const { jsonData: classromsData, hiddenSectionsData } = useLoaderData()

	return (
		<Wrapper>
			{!hiddenSectionsData[0].classrooms ? (
				<HiddenSectionInfo name='sale' />
			) : (
				<ClassroomPreview classromsData={classromsData} />
			)}

			<ClassroomForm
				classromsData={classromsData}
				hiddenSectionsData={hiddenSectionsData}
			/>
		</Wrapper>
	)
}
