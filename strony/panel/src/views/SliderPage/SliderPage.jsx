import { useLoaderData } from 'react-router-dom'
import { SliderForm } from '../../components/SliderForm/SliderForm'
import { SliderPreview } from '../../components/SliderPreview/SliderPreview'
import { Wrapper } from '../../components/Wrapper/Wrapper'
import { HiddenSectionInfo } from '../../components/HiddenSectionInfo/HiddenSectionInfo'

export function SliderPage() {
	const { jsonData: slidersData, hiddenSectionsData } = useLoaderData()

	return (
		<Wrapper>
			{!hiddenSectionsData[0].slider ? (
				<HiddenSectionInfo name='slider' />
			) : (
				<SliderPreview slidersData={slidersData} />
			)}

			<SliderForm slidersData={slidersData} hiddenSectionsData={hiddenSectionsData} />
		</Wrapper>
	)
}
