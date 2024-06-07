import { useEffect, useState } from "react"
import styled from "@mui/material/styles/styled"

import MockupProjectsCarousel from "../SectionsComponents/Photoshop/MockupProjectsCarousel"
import Television from "../SectionsComponents/Photoshop/Television"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Project from "../../../model/Project"
import Modal from "../../Modal/Modal"

const StyledBox = styled(Box)`
    border: 2px solid #2e2e2e;
    border-radius: 20px;
	position: relative;

	background: rgb(36,35,35);
	background: linear-gradient(-45deg, rgba(36,35,35,0.7175245098039216) 0%, rgba(78,75,76,0.8071603641456583) 100%);

	height: 100%;
`

interface Props {
	loadSectionHandler: (sectionNum: number) => void
}

function PhotoshopSection({ loadSectionHandler }: Props) {
	const [modalSettings, setModalSettings] = useState<{
		show: boolean,
		project?: Project | null
	}>({
		show: false,
		project: null
	})

	const handleShowModal = (show: boolean, project?: Project) => {
		setModalSettings({
			show: show,
			project: project ? project : null
		})
	}

	useEffect(() => {
		loadSectionHandler(6)
	}, [loadSectionHandler])

	return (
		<>
			{(modalSettings.show && modalSettings.project) && <Modal project={modalSettings.project as Project} showModal={modalSettings.show} handleShowModal={handleShowModal} />}

			<Grid container spacing={{ md: 2 }} py={7}>
				<Grid item xs={12} md={6} px={{ md: 2 }}>
					<Box px={{ xs: 3, sm: 5, md: 7 }} pb={{ xs: 3, sm: 0, md: 0 }}>
						<Typography variant="h4" component='h4' textAlign='center' color='text.secondary'>PSD / FIG to HTML</Typography>

						<Typography mt={2} variant="body1" component='p' textAlign='justify' color='text.secondary'>This section focuses on my ability to work with Adobe Photoshop / Figma and accurately recreate websites into HTML format.</Typography>
					</Box>

					<Television />
				</Grid>

				<Grid item xs={12} md={6} mt={{ xs: 10, sm: 10, md: 0 }} >
					<StyledBox >
						<MockupProjectsCarousel handleShowModal={handleShowModal} />
					</StyledBox>
				</Grid>

			</Grid>
		</>
	)
}

export default PhotoshopSection