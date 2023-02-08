import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

import CloseIcon from '@mui/icons-material/Close';
import styled from "@mui/material/styles/styled"
import Stack from "@mui/material/Stack"

const StyledCloseIcon = styled(CloseIcon)`
    position: absolute;
    color: white;
    position: absolute;
    top: 15px;
    left: 20px;
    cursor: pointer;
`

interface Props {
    onClickShowDanielHandler: (bool: boolean) => void;
}

const technologies = ['HTML', 'CSS', 'XML']

function SleepyDaniel({ onClickShowDanielHandler }: Props) {
    return (
        <Box sx={{ background: "rgb(138, 176, 218)" }}>
            <Container sx={{ position: 'relative' }}>
                <StyledCloseIcon onClick={() => onClickShowDanielHandler(false)} />
                    <Grid container >
                        <Grid item md={7} p={7}>
                            <Typography variant="h4" component='h4' color='text.primary' mb={7} textAlign='center'>Sleepy Daniel</Typography>

                            <Link href='http://sleepydaniel.arielbehar.com/' target='_blank'>
                                <img style={{maxWidth: "100%", height: 'auto'}} src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/projects-slides/daniel.jpg" alt="Sleepy Daniel" />
                            </Link>

                        </Grid>
                        <Grid item md={5}>
                        <Stack>

							<Typography mt={2} variant='h6' component='h6' color='text.primary'>Project Description:</Typography>
							<Typography variant='body1' component='p' color='text.secondary' textAlign='justify'>Biography site of Daniel Zalmen Jackson. The site aims to accurately portray Daniel's early days with the help of visual and audio aids</Typography>

							<Typography mt={2} variant='h6' component='h6' color='text.primary'>My Role in the Project:</Typography>
							<Typography variant='body1' component='p' color='text.secondary' textAlign='justify'>This is the first website I ever built. It contains pure HTML, CSS and a tiny bit of XML. Making it responsive or cross-browser compatible were not even options in the scope of possibilities at this point, but I was very excited to make my first web animations. Overall, an exciting project for its time.</Typography>

							<Box>
								<Typography mt={2} variant='h6' component='h6' color='text.primary'>Technologies Used:</Typography>

								{technologies.map(technology => <Typography variant='body1' component='p' color='text.secondary' display='inline-block'>•&nbsp;{technology}&nbsp;</Typography>)}
							</Box>

							<Typography mt={1} variant='h6' component='h6' color='text.primary'>Project Launched in:</Typography>
							<Typography variant='body1' component='p' color='text.secondary'>March 2017</Typography>

							<Typography mt={2} variant='h6' component='h6' color='text.primary'>
								Visit site:&nbsp;
								<Link href='http://sleepydaniel.arielbehar.com/' target='_blank' color='text.secondary'>Sleepy Daniel</Link>
							</Typography>

                            <Typography variant='body1' component='p' color='text.muted' mt={0}>(best experienced in Google Chrome)</Typography>
						</Stack>

                        </Grid>
                    </Grid>
            </Container>
        </Box>
    )
}

export default SleepyDaniel