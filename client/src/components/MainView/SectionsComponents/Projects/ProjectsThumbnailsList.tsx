import IProject from "../../../../model/Project"

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface Props {
	projects: IProject[],
	onChangeSelectedProject: (projectId: IProject['_id'], index: number) => void
}

function ProjectsThumbnailsList({
	projects,
	onChangeSelectedProject
}: Props) {
	return (
		<Stack flexGrow="1" direction='row' alignItems='center' flexWrap='wrap' justifyContent='center' mt={2} gap={{ xs: 1, md: 2 }} >
			{
				projects.map((project, index) => {
					return (
						<Stack
							key={project._id}
							onClick={() => onChangeSelectedProject(project._id, index + 1)}
							width={{ xs: '105px', md: '135px', lg: "130px" }}
							height={{ xs: '105px', md: '110px', lg: "120px" }}
							direction='column'
							gap={1}
							sx={{
								cursor: 'pointer',
								transition: 'all 0.2s',
								'&:hover': {
									transform: 'scale(1.1)',
								}
							}}
						>
							<Box

								component="img"
								width='100%'
								src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/projects-slides/${project.image}`}
								alt={`${project.title} || ${project._id}`}
							/>

							<Typography
								variant='body2'
								textAlign='center'
								color='text.secondary'
							>
								{project.title}
							</Typography>
						</Stack>

					)
				})
			}
		</Stack>
	)
}

export default ProjectsThumbnailsList