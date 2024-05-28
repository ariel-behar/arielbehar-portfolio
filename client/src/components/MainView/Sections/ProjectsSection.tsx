import { useEffect, useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

import projects from '../../../data/projects.json'
import Project from '../../../model/Project'

import ProjectDetailsBox from "../SectionsComponents/Projects/ProjectDetailsBox"
import ProjectsCarousel from "../SectionsComponents/Projects/ProjectsCarousel"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from '@mui/material/Stack'


interface Props {
	loadSectionHandler: (sectionNum: number) => void
}

function ProjectsSection({ loadSectionHandler }: Props) {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null)
	const theme = useTheme();
	const isXsSm = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		loadSectionHandler(4)
	}, [loadSectionHandler])

	const onChangeSelectedProject = (projectId: Project['_id']) => {
		let currentProject: Project | undefined = (projects as Project[]).find((project: Project) => project._id === Number(projectId))

		if (currentProject) {
			setSelectedProject(currentProject)
		}
	}

	return (
		<Box py={3} component="section" id='third-section'>
			<Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems='center' mb={{ xs: 1, md: 3 }} px={5}>
				<Typography variant="h2" component='h3' textAlign='left' color='text.secondary'>My Projects</Typography>

				{isXsSm
					? <Typography variant="h6" component='h4' mt={2} textAlign='center' color='text.secondary'>Next | MERN | Shopify | Wordpress | Vanilla JS</Typography>
					: <Typography variant="h5" component='h4' mt={0} textAlign='center' color='text.secondary'>Next | MERN | Shopify | Wordpress | Vanilla JS</Typography>
				}

			</Stack>

			<Grid container spacing={3} py={2}>
				<Grid item xs={12} md={7} lg={8}>
					<ProjectsCarousel selectedProject={selectedProject} projects={(projects as Project[])} onChangeSelectedProject={onChangeSelectedProject} />
				</Grid>

				<Grid item xs={12} md={5} lg={4}>
					<ProjectDetailsBox selectedProject={selectedProject} />
				</Grid>
			</Grid>

		</Box>

	)
}

export default ProjectsSection