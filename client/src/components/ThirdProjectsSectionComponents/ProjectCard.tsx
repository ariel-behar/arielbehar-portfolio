import Project from "../../model/Project"

import styled from "@mui/material/styles/styled"

import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/system/Stack"
import { motion } from "framer-motion"

const StyledProjectBox = styled(Box)`
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 20px;
	padding: 30px 15px 10px;
	height: 100%;
`
interface Props {
	selectedProject: Project | null
}

function ProjectCard({ selectedProject }: Props) {
	return (
		<StyledProjectBox>
			{
				!selectedProject
					? (
						<Stack direction='column' justifyContent='center' alignItems='center' height='100%'>
							<Typography 
								variant='h4' 
								component={motion.h5} 
								textAlign='center' 
								color='text.secondary'
								animate={{ scale: [0.9, 1, 1, 0.9], }}
								transition={{ duration: 1.3, repeat: Infinity }}
								>
									Click on Thumbnails to See Information About Each Project
									</Typography>
						</Stack>
					)
					: (
						<Stack>
							<Typography variant='h5' component='h5' textAlign='center' color='text.secondary'>{selectedProject?.projectName}</Typography>

							<Typography mt={2} variant='h6' component='h6' color='text.secondary'>Project Description:</Typography>
							<Typography variant='body1' component='p' color='text.tertiary' textAlign='justify'>{selectedProject?.description}</Typography>

							{selectedProject?.notes && selectedProject?.notes.map(note => <Typography variant='body1' component='p' color='text.muted' mt={0}>*{note}</Typography>)}

							<Typography mt={2} variant='h6' component='h6' color='text.secondary'>My Role in the Project:</Typography>
							<Typography variant='body1' component='p' color='text.tertiary' textAlign='justify'>{selectedProject?.myRole}</Typography>

							<Box>
								<Typography mt={2} variant='h6' component='h6' color='text.secondary'>Technologies Used:</Typography>
								{selectedProject?.technologies && selectedProject?.technologies.map(technology => <Typography variant='body1' component='p' color='text.tertiary' display='inline-block'>•&nbsp;{technology}&nbsp;</Typography>)}
							</Box>

							<Typography mt={1} variant='h6' component='h6' color='text.secondary'>Project Launched in:</Typography>
							<Typography variant='body1' component='p' color='text.tertiary'>{selectedProject?.month} {selectedProject?.year}</Typography>

							<Typography mt={2} variant='h6' component='h6' color='text.secondary'>
								Visit site:&nbsp;
								<Link href={selectedProject?.url} target='_blank'>{selectedProject?.projectName}</Link>
							</Typography>
						</Stack>
					)
			}
		</StyledProjectBox>
	)
}

export default ProjectCard