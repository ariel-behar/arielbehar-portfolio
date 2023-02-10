import { Element } from 'react-scroll'

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"

import FirstTitleSection from "./MainViewSections/FirstTitleSection"
import SecondAboutSection from "./MainViewSections/SecondAboutSection"
import ThirdProjectsSection from './MainViewSections/ThirdProjectsSection'
import Container from '@mui/material/Container'
import FourthPhotoshopSection from './MainViewSections/FourthPhotoshopSection'
import FifthAbilitiesSection from './MainViewSections/FifthAbilitiesSection'
import SixthDocumentsSection from './MainViewSections/SixthDocumentsSection'
import SeventhContactSection from './MainViewSections/SeventhContactSection'
import EightBonusSection from "./MainViewSections/EightBonusSection"
import Footer from "../components/Footer"

const StyledBox = styled(Box)`
	background-image: url("https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/pattern1.jpg");
	background-repeat: repeat;
`

function MainView() {
	return (
		<Box>

			<FirstTitleSection />

			<SecondAboutSection />

			<StyledBox>
				<Container>
					<Element name="projects-photoshop-container-section"> 
						<ThirdProjectsSection />

						<hr />

						<FourthPhotoshopSection />
					</Element>

					<hr />

					<FifthAbilitiesSection />

					<hr />

					<Box py={3}></Box>
				</Container>

				<SixthDocumentsSection />

				<SeventhContactSection />

				<EightBonusSection />

				<Footer />
			</StyledBox>
		</Box>
	)
}

export default MainView