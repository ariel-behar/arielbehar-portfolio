import { useEffect, useState } from "react"
import styled from "@mui/material/styles/styled"
import useTheme from "@mui/material/styles/useTheme"
import useMediaQuery from "@mui/material/useMediaQuery"

import Project from "../../../model/Project"

import MockupProjectsCarousel from "../SectionsComponents/Photoshop/MockupProjectsCarousel"
import Television from "../SectionsComponents/Photoshop/Television"
import Modal from "../../Modal/Modal"
import PsdToHtml from "../SectionsComponents/Photoshop/PsdToHtml"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

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
	const theme = useTheme();
	const isXsSm = useMediaQuery(theme.breakpoints.down('md'));

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

			<Grid container spacing={{ md: 2 }} py={{ xs: 3, md: 7 }}>
				<Grid item xs={12} md={6} px={{ md: 2 }}>
					<Typography variant="h4" component='h4' textAlign='center' color='text.secondary'>PSD / FIG to HTML</Typography>

					<Stack direction={{xs: 'row', md: 'column'}} justifyContent='center' alignItems='center' gap={2} mt={2}>
						<Box>
							<Typography mt={{md: 2}} variant="body1" component='p' textAlign='justify' color='text.secondary'>This section focuses on my ability to work with Adobe Photoshop / Figma and accurately recreate websites into HTML format.</Typography>
						</Box>
						<Stack height='100%' direction='column' justifyContent='center'>
							{
								isXsSm
									? <PsdToHtml />
									: <Television />
							}
						</Stack>
					</Stack>


				</Grid>

				<Grid item xs={12} md={6} mt={{ xs: 3, sm: 2, md: 0 }} >
					<StyledBox >
						<MockupProjectsCarousel handleShowModal={handleShowModal} />
					</StyledBox>
				</Grid>

			</Grid>
		</>
	)
}

export default PhotoshopSection