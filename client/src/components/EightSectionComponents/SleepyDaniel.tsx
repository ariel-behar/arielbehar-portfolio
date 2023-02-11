import danielProject from '../../data/danielProject.json'

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

import CloseIcon from '@mui/icons-material/Close';

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

function SleepyDaniel({ onClickShowDanielHandler }: Props) {
    return (
        <Box sx={{ background: "rgb(138, 176, 218)" }}>
            <Container sx={{ position: 'relative' }}>
                <StyledCloseIcon onClick={() => onClickShowDanielHandler(false)} />
                <Grid container >
                    <Grid item xs={12} md={7} p={{xs: 0, md: 7}} textAlign='center'>
                        <Typography variant="h4" component='h4' color='text.primary' mt={{xs: 4, md: 0}} mb={{xs: 1, md: 3}} textAlign='center'>{danielProject.title}</Typography>

                        <Link href={danielProject.url} target='_blank'>
                            <img style={{ maxWidth: '100%', maxHeight: '370px', margin: '0 auto'  }} src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/projects-slides/${danielProject.image}`} alt="Sleepy Daniel" />
                        </Link>
   
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack pb={3}>

                            <Typography mt={2} variant='h6' component='h6' color='text.primary'>Project Description:</Typography>
                            <Typography variant='body1' component='p' color='text.secondary' textAlign='justify'>{danielProject.description}</Typography>

                            <Typography mt={2} variant='h6' component='h6' color='text.primary'>My Role in the Project:</Typography>
                            <Typography variant='body1' component='p' color='text.secondary' textAlign='justify'>{danielProject.myRole}</Typography>

                            <Box>
                                <Typography mt={2} variant='h6' component='h6' color='text.primary'>Technologies Used:</Typography>

                                {danielProject.technologies.map(technology => <Typography variant='body1' component='p' color='text.secondary' display='inline-block'>•&nbsp;{technology}&nbsp;</Typography>)}
                            </Box>

                            <Typography mt={1} variant='h6' component='h6' color='text.primary'>Project Launched in:</Typography>
                            <Typography variant='body1' component='p' color='text.secondary'>{danielProject.month}&nbsp;{danielProject.year}</Typography>

                            <Typography mt={2} variant='h6' component='h6' color='text.primary'>
                                Visit site:&nbsp;
                                <Link href={danielProject.url} target='_blank' color='text.secondary'>{danielProject.title}</Link>
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