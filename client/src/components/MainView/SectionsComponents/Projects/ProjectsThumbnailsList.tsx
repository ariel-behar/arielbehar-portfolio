import IProject from "../../../../model/Project"

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

interface Props {
	projects: IProject[],
	onChangeSelectedProject: (projectId: IProject['_id']) => void
}

function ProjectsThumbnailsList({
	projects,
	onChangeSelectedProject
}: Props) {
	return (
		<Stack direction='row' alignItems='center' flexWrap='wrap' justifyContent='center' mt={2} gap={2} >
			{
				projects.map(project => {
					return (
						<Box key={project._id} onClick={() => onChangeSelectedProject(project._id)} width="130px" height='auto'>
							<Box
								sx={{
									cursor: 'pointer',
									transition: 'all 0.2s',
									'&:hover': {
										transform: 'scale(1.1)',
									}
								}}
								component="img"
								width='100%'
								src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/projects-slides/${project.image}`}
								alt={`${project.title} || ${project._id}`}
							/>
						</Box>

					)
				})
			}
		</Stack>
	)
}

export default ProjectsThumbnailsList