import IProject from '../../../../model/Project'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

interface Props {
	selectedProject: IProject | null
}

function ProjectLargeThumbnail({
	selectedProject
}: Props) {
	return (
		<Link href={selectedProject ? selectedProject.url : ''} target='_blank'>
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
				src={ selectedProject ? `https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/projects-slides/${selectedProject?.image}` : 'https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/projects-slides/site-plan.jpg'}
				alt={`${selectedProject?.title} || ${selectedProject?._id}`}
			/>
		</Link>
	)
}

export default ProjectLargeThumbnail