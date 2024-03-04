import { useState } from 'react'
import { InformationsForm } from '../../components/InformationsForm/InformationsForm'
import { InformationsPreview } from '../../components/InformationsPreview/InformationsPreview'
import { Wrapper } from '../../components/Wrapper/Wrapper'
import { useLoaderData } from 'react-router-dom'
import { HiddenSectionInfo } from '../../components/HiddenSectionInfo/HiddenSectionInfo'

export function InformationsPage() {
	const { jsonData: informationsData, hiddenSectionsData } = useLoaderData()
	const [showPoster, setShowPoster] = useState(informationsData[0].show_img)

	function handleShowPoster() {
		setShowPoster(!showPoster)
	}

	return (
		<Wrapper>
			{!hiddenSectionsData[0].information ? (
				<HiddenSectionInfo name='ogłoszenia' />
			) : (
				<InformationsPreview
					showPoster={showPoster}
					informationsData={informationsData[0]}
				/>
			)}

			<InformationsForm
				showPoster={showPoster}
				informationsData={informationsData[0]}
				handleShowPoster={handleShowPoster}
				hiddenSectionsData={hiddenSectionsData}
			/>
		</Wrapper>
	)
}
