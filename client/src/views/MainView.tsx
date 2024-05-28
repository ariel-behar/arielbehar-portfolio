import { Suspense, lazy, useState } from 'react'
import { Element } from 'react-scroll'

import styled from "@mui/material/styles/styled"
import Loader from '../components/Loader'

import Box from "@mui/material/Box"
import Container from '@mui/material/Container'

import TitleSection from "../components/MainViewSections/TitleSection"
const LazyAboutSection = lazy(() => import("../components/MainViewSections/AboutSection"))
const LazyProjectsSection = lazy(() => import('../components/MainViewSections/ProjectsSection'))
const LazyThreeJSProjects = lazy(() => import('../components/MainViewSections/ThreeJsProjects'))
const LazyPhotoshopSection = lazy(() => import('../components/MainViewSections/PhotoshopSection'))
const LazySkillsSection = lazy(() => import('../components/MainViewSections/SkillsSection'))
const LazyDocumentsSection = lazy(() => import('../components/MainViewSections/DocumentsSection'))
const LazyContactSection = lazy(() => import('../components/MainViewSections/ContactSection'))
const LazyBonusSection = lazy(() => import('../components/MainViewSections/BonusSection'))

const Footer = lazy(() => import('../components/Footer'))

const StyledBox = styled(Box)`
	background-image: url("https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/dark-pattern.jpg");
	background-repeat: repeat;

	position: relative;
	box-shadow: 0px -9px 28px 14px rgba(0,0,0,0.5);
`

function MainView() {
	const [loadSection, setLoadSection] = useState<number>(0)

	const loadSectionHandler = (sectionNum: number) => {
		setLoadSection(sectionNum)
	}

	return (
		<Box>
			<TitleSection loadSectionHandler={loadSectionHandler} />

			{loadSection >= 2 && <Suspense fallback={<Loader />}>
				<LazyAboutSection loadSectionHandler={loadSectionHandler} />
			</Suspense>
			}

			<StyledBox>
				<Container>
					<Element name="projects-photoshop-container-section">
						{loadSection >= 3 && <Suspense fallback={<Loader />}>
							<LazyProjectsSection loadSectionHandler={loadSectionHandler} />
						</Suspense>
						}

						<hr />

						{loadSection >= 4 && <Suspense fallback={<Loader />}>
							<LazyThreeJSProjects loadSectionHandler={loadSectionHandler} />
						</Suspense>
						}

						<hr />

						{loadSection >= 5 && <Suspense fallback={<Loader />}>
							<LazyPhotoshopSection loadSectionHandler={loadSectionHandler} />
						</Suspense>
						}
					</Element>

					<hr />

					{loadSection >= 6 && <Suspense fallback={<Loader />}>
						<LazySkillsSection loadSectionHandler={loadSectionHandler} />
					</Suspense>
					}

					<hr />

					<Box py={3}></Box>
				</Container>

				{loadSection >= 7 && <Suspense fallback={<Loader />}>
					<LazyDocumentsSection loadSectionHandler={loadSectionHandler} />
				</Suspense>
				}

				{loadSection >= 8 && <Suspense fallback={<Loader />}>
					<LazyContactSection loadSectionHandler={loadSectionHandler} />
				</Suspense>
				}

				{loadSection >= 9 && <Suspense fallback={<Loader />}>
					<LazyBonusSection loadSectionHandler={loadSectionHandler} />
				</Suspense>
				}

				{loadSection >= 10 && <Suspense fallback={<Loader />}>
					<Footer />
				</Suspense>
				}
			</StyledBox>
		</Box>
	)
}

export default MainView