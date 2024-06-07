import { useEffect } from "react"
import { v4 as uuiqd } from 'uuid'

import projects from '../../../data/threeJsProjects.json'

import ThreeJsProject from "../../../model/ThreeJsProject"

import CarouselStatus from "../SectionsComponents/Photoshop/CarouselStatus"
import ThreeJsCard from "../SectionsComponents/ThreeJs/ThreeJsCard"
import AvatarScene from "../../AvatarExperience/AvatarScene"

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
		<Box component="section" py={3} >
			<Box position='relative'>
				<Typography mb={{xs: 0, sm: 3}} variant="h4" component='h4' textAlign='center' color='text.secondary'>Three JS</Typography>

				<CarouselStatus totalSlides={projects.length} currentSlide={projects.length} />

				<Grid container columnSpacing={1}>
					<Grid item xs={12} sm={6} pt={2} height={{ xs: "500px", sm: 'auto'}}>
						<AvatarScene />
					</Grid>

					<Grid item xs={12} sm={6}>

						<Grid container columnSpacing={1}>
							{
								(projects as ThreeJsProject[]).slice(0, 6).map((project) => {
									return (
										<Grid item xs={6} sm={6} md={6} key={uuiqd()}>
											<ThreeJsCard project={project} />
										</Grid>
									)
								}
								)}
						</Grid>

					</Grid>
				</Grid>

				<Grid container columnSpacing={1}>
					{
						(projects as ThreeJsProject[]).slice(6).map((project, index) => {
							return (
								<Grid item xs={6} sm={3} md={3} key={uuiqd()}>
									<ThreeJsCard project={project} />
								</Grid>
							)
						}
						)}
				</Grid>
			</Box>
		</Box>
	)
}

export default ThreeJsSection