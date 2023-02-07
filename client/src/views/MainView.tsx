import pattern1 from '../assets/img/pattern1.jpg'

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"

import FirstTitleSection from "./MainViewSections/FirstTitleSection"
import SecondAboutSection from "./MainViewSections/SecondAboutSection"
import ThirdProjectsSection from './MainViewSections/ThirdProjectsSection'
import Container from '@mui/material/Container'
import FourthPhotoshopSection from './MainViewSections/FourthPhotoshopSection'
import FifthAbilitiesSection from './MainViewSections/FifthAbilitiesSection'

const StyledBox = styled(Box)`
	background-image: url(${pattern1});
	background-repeat: repeat;
`

function MainView() {

	return (
		<Box>
			<FirstTitleSection />

			<SecondAboutSection />

			<StyledBox>
				<Container>
					<ThirdProjectsSection />

					<hr />

					<FourthPhotoshopSection />

					<hr />

					<FifthAbilitiesSection />
				</Container>
			</StyledBox>
		</Box>
	)
}

export default MainView