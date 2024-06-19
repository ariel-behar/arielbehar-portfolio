import { useEffect, useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

import projects from '../../../data/projects.json'
import IProject from '../../../model/Project'

import ProjectDetailsBox from "../SectionsComponents/Projects/ProjectDetailsBox"
import ProjectLargeThumbnail from '../SectionsComponents/Projects/ProjectLargeThumbnail'
import ProjectsThumbnailsList from '../SectionsComponents/Projects/ProjectsThumbnailsList'

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from '@mui/material/Stack'
import CarouselStatus from '../SectionsComponents/Photoshop/CarouselStatus'

interface Props {
	loadSectionHandler: (sectionNum: number) => void
}

function ProjectsSection({ loadSectionHandler }: Props) {
	const [selectedProject, setSelectedProject] = useState<{
		project: IProject | null,
		index: number
	}>({
		project: null,
		index: 1
	})
	const theme = useTheme();
	const isXsSm = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		loadSectionHandler(4)
	}, [loadSectionHandler])

	const onChangeSelectedProject = (projectId: IProject['_id'], index: number) => {
		let currentProject: IProject | undefined = (projects as IProject[]).find((project: IProject) => project._id === Number(projectId))

		if (currentProject) {
			setSelectedProject((prevState) => {
				return {
					project: currentProject as IProject,
					index: index
				}
			})
		}
	}

	return (
		<Box py={3} component="section" id='third-section'>
			<Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems='center' mb={{ xs: 1, md: 3 }} px={5}>
				<Typography variant="h1" component='h3' textAlign='left' color='text.secondary'>My Projects</Typography>

				{isXsSm
					? <Typography variant="h6" component='h4' mt={2} textAlign='center' color='text.secondary' lineHeight={1.2}>Next | MERN | Shopify <br />&nbsp;Wordpress | Vanilla JS</Typography>
					: <Typography variant="h6" component='h4' mt={2} textAlign='center' color='text.secondary'>Next | MERN | Shopify | Wordpress | Vanilla JS</Typography>
				}
			</Stack>

			<Grid container spacing={1} py={2}>
				<Grid item xs={12} md={7} lg={7} position="relative">
					<Stack height='100%' display="flex" direction='column' justifyContent='center'>
						<CarouselStatus currentSlide={selectedProject.index} totalSlides={projects.length} />
						<ProjectLargeThumbnail selectedProject={selectedProject.project} />
					</Stack>
				</Grid>

				<Grid item xs={12} md={5} lg={5}>
					<ProjectDetailsBox selectedProject={selectedProject.project} />
				</Grid>

				<Grid item xs={12}>
					<ProjectsThumbnailsList projects={projects as IProject[]} onChangeSelectedProject={onChangeSelectedProject} />
				</Grid>
			</Grid>

		</Box>

	)
}

export default ProjectsSection