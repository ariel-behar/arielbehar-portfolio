
import MockupProjectsCarousel from "../../components/FourthSectionComponents/MockupProjectsCarousel"
import Television from "../../components/FourthSectionComponents/Television"


import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const StyledBox = styled(Box)`
    border: 2px solid #2e2e2e;
    border-radius: 20px;

	background: rgb(36,35,35);
	background: linear-gradient(-45deg, rgba(36,35,35,0.7175245098039216) 0%, rgba(78,75,76,0.8071603641456583) 100%);

	height: 100%;
`


function FourthPhotoshopSection() {
	return (
		<Grid container spacing={2} py={7}>
			<Grid item md={6} px={2}>
				<Box px={6} pt={1} pb={5}>
					<Typography variant="h3" component='h4' textAlign='center' color='text.secondary'>PSD to HTML</Typography>

					<Typography mt={2} variant="body1" component='p' textAlign='justify' color='text.secondary'>This section focuses on my ability to work with Adobe Photoshop and accurately recreate websites from a PSD file into HTML format.</Typography>

					
				</Box>

				<Television />
			</Grid>

			<Grid item md={6}>
				<StyledBox>
					<MockupProjectsCarousel />
				</StyledBox>
			</Grid>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit provident aliquam molestias, tempore aspernatur id enim pariatur reprehenderit amet iste itaque blanditiis dolorum obcaecati reiciendis optio. Voluptas, aliquam ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat itaque nisi qui alias id ipsam beatae! Ab excepturi expedita cumque debitis? Ea soluta nemo quas explicabo. Reiciendis, animi exercitationem doloribus deserunt quia assumenda nihil, pariatur nemo odio esse laudantium, et ratione rerum delectus qui! Aspernatur sint illo neque repellat modi vel nulla culpa eligendi iure? Repellat, provident dolorem! Debitis, voluptatibus? Iste tempora sint, expedita, placeat earum autem enim fugiat soluta nihil doloribus aliquam. Natus corrupti dolor repudiandae quasi. Obcaecati consequatur quas at eaque fuga non fugit, quae vel quasi? Id vel vitae reprehenderit labore expedita delectus temporibus? Qui officia cum placeat molestias eligendi accusamus nisi vel, dolor, totam omnis voluptatem quaerat inventore ad minus, nemo repudiandae adipisci. Aliquid laboriosam, omnis aperiam tenetur eum amet minima optio ducimus nisi necessitatibus, ex ad atque quidem culpa hic odio doloribus expedita eveniet aspernatur accusantium libero! Dignissimos assumenda labore nulla unde optio odit.
		</Grid>
		
	)
}

export default FourthPhotoshopSection