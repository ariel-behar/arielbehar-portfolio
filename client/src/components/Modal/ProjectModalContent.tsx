import Project from "../../model/Project"
import ProjectCard from "../MainView/SectionsComponents/Projects/ProjectCard"
import { Partial } from "../../types/common-types"

import styled from "@mui/material/styles/styled"

import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"

const StyledDialogContent = styled(DialogContent)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/dark-pattern.jpg');
    background-repeat: repeat;

    padding: 0;

    img {
        width: 100%;
        height: auto;
        border-bottom: 1px solid white;
    }
`

interface Props {
	project: Partial<Project>,

}

function ProjectModalContent({ project }: Props) {
	return (
		<StyledDialogContent>
			<img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/mockup-projects/${project.image}`} alt={project.title} />

			<DialogContentText
				id="alert-dialog-description"
				p={3}
				px={5}

			>
				<ProjectCard project={(project as Project)} hideTitle projectCategory='mockup' />

			</DialogContentText>
		</StyledDialogContent>
	)
}

export default ProjectModalContent