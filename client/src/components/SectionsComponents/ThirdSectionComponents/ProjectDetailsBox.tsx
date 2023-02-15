import { motion } from "framer-motion"

import Project from "../../../model/Project"
import ProjectCard from "./ProjectCard"

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/system/Stack"

const StyledProjectBox = styled(Box)`
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 20px;
	padding: 30px 15px 10px;
	height: 100%;
`
interface Props {
	selectedProject: Project | null
}

function ProjectDetailsBox({ selectedProject }: Props) {
	return (
		<StyledProjectBox>
			{
				selectedProject
					? <ProjectCard project={(selectedProject as Project)} projectCategory='real'/>
					: (
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
			}
		</StyledProjectBox>
	)
}

export default ProjectDetailsBox