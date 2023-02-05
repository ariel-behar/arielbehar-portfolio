import { useState } from 'react'

import projects from '../../data/projects.json'
import Project from '../../model/Project'

import ProjectCard from "../../components/ThirdProjectsSectionComponents/ProjectCard"
import ProjectsThumbnailsCarousel from "../../components/ThirdProjectsSectionComponents/ProjectsThumbnailsCarousel"
import VisualizeProjectCarousel from "../../components/ThirdProjectsSectionComponents/VisualizeProjectCarousel"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"


function ThirdProjectsSection() {
	const [ selectedProject, setSelectedProject ] = useState<Project['_id'] | null>(null)

	return (
		<Box py={3}>
			<Typography variant="h2" component='h3' textAlign='center' color='text.secondary'>My Projects</Typography>

			<Grid container>
				<Grid item sm={12} lg={8}>
					<VisualizeProjectCarousel />

					<ProjectsThumbnailsCarousel />
				</Grid>

				<Grid item sm={12} lg={4}>
					<ProjectCard />
				</Grid>
			</Grid>

		</Box>

	)
}

export default ThirdProjectsSection