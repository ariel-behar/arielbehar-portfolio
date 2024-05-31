import { useEffect } from "react"
import { v4 as uuiqd } from 'uuid'

import projects from '../../../data/threeJsProjects.json'

import ThreeJsProject from "../../../model/ThreeJsProject"

import CarouselStatus from "../SectionsComponents/Photoshop/CarouselStatus"
import ThreeJsCard from "../SectionsComponents/ThreeJs/ThreeJsCard"

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

interface Props {
	loadSectionHandler: (sectionNum: number) => void
}

function ThreeJsSection({
	loadSectionHandler
}: Props) {

	useEffect(() => {
		loadSectionHandler(5)
	}, [loadSectionHandler])

	return (
		<Box component="section" py={3} position='relative'>
			<Typography variant="h4" component='h4' textAlign='center' color='text.secondary'>Three JS</Typography>

			<CarouselStatus totalSlides={projects.length} currentSlide={projects.length} />

			<Grid container columnSpacing={1} rowSpacing={2} my={3}>
				{/* <Grid item lg={6}>
					</Grid> */}
				{
					(projects as ThreeJsProject[]).map((project, index) => {
						return (
							<Grid item xs={6} sm={6} md={4} lg={3} key={uuiqd()}>
								<ThreeJsCard project={project} />
							</Grid>
						)
					}
					)}
			</Grid>
		</Box>
	)
}

export default ThreeJsSection