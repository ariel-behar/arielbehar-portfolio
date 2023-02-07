import { useState } from 'react'

import projects from '../../data/projects.json'
import Project from '../../model/Project'

import ProjectCard from "../../components/ThirdSectionComponents/ProjectCard"
import ProjectsCarousel from "../../components/ThirdSectionComponents/ProjectsCarousel"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"


function ThirdProjectsSection() {
	const [ selectedProject, setSelectedProject ] = useState<Project | null>(null)

	const onChangeSelectedProject = (projectId: Project['_id']) => {
		let currentProject: Project | undefined = (projects as Project[]).find((project: Project) => project._id === Number(projectId))
		console.log('currentProject:', currentProject)

		if(currentProject) {
			setSelectedProject(currentProject)
		}
	}

	return (
		<Box py={3} component="section" id='third-section'>
			<Typography variant="h2" component='h3' textAlign='center' color='text.secondary'>My Projects</Typography>

			<Grid container spacing={3} py={2}>
				<Grid item sm={12} lg={8}>
					<ProjectsCarousel selectedProject={selectedProject} projects={(projects as Project[])} onChangeSelectedProject={onChangeSelectedProject}/>
				</Grid>

				<Grid item sm={12} lg={4}>
					<ProjectCard selectedProject={selectedProject}/>
				</Grid>
			</Grid>

		</Box>

	)
}

export default ThirdProjectsSection