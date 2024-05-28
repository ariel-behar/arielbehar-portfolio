import { useEffect, useState } from 'react'

import projects from '../../data/projects.json'
import Project from '../../model/Project'

import ProjectDetailsBox from "../../components/Sections/Projects/ProjectDetailsBox"
import ProjectsCarousel from "../../components/Sections/Projects/ProjectsCarousel"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"


interface Props {
    loadSectionHandler: (sectionNum: number) => void
}

function ThirdProjectsSection({ loadSectionHandler }: Props) {
	const [ selectedProject, setSelectedProject ] = useState<Project | null>(null)

	useEffect(() => {
        loadSectionHandler(4)
    }, [loadSectionHandler])

	const onChangeSelectedProject = (projectId: Project['_id']) => {
		let currentProject: Project | undefined = (projects as Project[]).find((project: Project) => project._id === Number(projectId))

		if(currentProject) {
			setSelectedProject(currentProject)
		}
	}

	return (
		<Box py={3} component="section" id='third-section'>
			<Typography variant="h2" component='h3' textAlign='center' color='text.secondary'>My Projects</Typography>

			<Grid container spacing={3} py={2}>
				<Grid item xs={12} md={7} lg={8}>
					<ProjectsCarousel selectedProject={selectedProject} projects={(projects as Project[])} onChangeSelectedProject={onChangeSelectedProject}/>
				</Grid>

				<Grid item xs={12} md={5} lg={4}>
					<ProjectDetailsBox selectedProject={selectedProject}/>
				</Grid>
			</Grid>

		</Box>

	)
}

export default ThirdProjectsSection