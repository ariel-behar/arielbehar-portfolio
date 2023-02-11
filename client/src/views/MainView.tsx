import { lazy } from 'react'
import { Element } from 'react-scroll'

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"

import FirstTitleSection from "./MainViewSections/FirstTitleSection"
import SecondAboutSection from "./MainViewSections/SecondAboutSection"
// import ThirdProjectsSection from './MainViewSections/ThirdProjectsSection'
// import FourthPhotoshopSection from './MainViewSections/FourthPhotoshopSection'
// import FifthAbilitiesSection from './MainViewSections/FifthAbilitiesSection'
// import SixthDocumentsSection from './MainViewSections/SixthDocumentsSection'
// import SeventhContactSection from './MainViewSections/SeventhContactSection'
// import EightBonusSection from "./MainViewSections/EightBonusSection"
// import Footer from "../components/Footer"

import Container from '@mui/material/Container'

const ThirdProjectsSectionPromise = import('./MainViewSections/ThirdProjectsSection')
const ThirdProjectsSection = lazy(() => ThirdProjectsSectionPromise)

const FourthPhotoshopSectionPromise = import('./MainViewSections/FourthPhotoshopSection')
const FourthPhotoshopSection = lazy(() => FourthPhotoshopSectionPromise)

const FifthAbilitiesSectionPromise = import('./MainViewSections/FifthAbilitiesSection')
const FifthAbilitiesSection = lazy(() => FifthAbilitiesSectionPromise)

const SixthDocumentsSectionPromise = import('./MainViewSections/SixthDocumentsSection')
const SixthDocumentsSection = lazy(() => SixthDocumentsSectionPromise)

const SeventhContactSectionPromise = import('./MainViewSections/SeventhContactSection')
const SeventhContactSection = lazy(() => SeventhContactSectionPromise)

const EightBonusSectionPromise = import('./MainViewSections/EightBonusSection')
const EightBonusSection = lazy(() => EightBonusSectionPromise)

const FooterPromise = import('../components/Footer')
const Footer = lazy(() => FooterPromise)

const StyledBox = styled(Box)`
	background-image: url("https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/pattern1.jpg");
	background-repeat: repeat;

	position: relative;
	box-shadow: 0px -9px 28px 14px rgba(0,0,0,0.5);
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