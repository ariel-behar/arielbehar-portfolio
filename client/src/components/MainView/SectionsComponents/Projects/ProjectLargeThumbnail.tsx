import IProject from '../../../../model/Project'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

interface Props {
	selectedProject: IProject
}

function ProjectLargeThumbnail({
	selectedProject
}: Props) {
	return (
		<Link href={selectedProject.url} target='_blank'>
			<Box
				sx={{
					cursor: 'pointer',
					transition: 'all 0.1s',
					'&:hover': {
						transform: 'scale(1.01)'
					}
				}}
				component="img"
				width='100%'
				src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/projects-slides/${selectedProject?.image}`} alt={`${selectedProject?.title} || ${selectedProject?._id}`}
			/>
		</Link>
	)
}

export default ProjectLargeThumbnail