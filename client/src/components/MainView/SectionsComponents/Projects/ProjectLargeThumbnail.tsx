import IProject from '../../../../model/Project'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

interface Props {
	selectedProject: IProject | null
}

function ProjectLargeThumbnail({
	selectedProject
}: Props) {
	return (
		<Stack height='100%' width='100%' direction='row' justifyContent='center' alignItems='center' >
			<Box
				component="img"
				width='100%'
				sx={{ objectFit: 'contain' }}
				src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/projects-slides/${selectedProject?.image}`} alt={`${selectedProject?.title} || ${selectedProject?._id}`}
			/>
		</Stack>
	)
}

export default ProjectLargeThumbnail