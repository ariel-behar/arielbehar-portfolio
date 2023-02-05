import ariel from '../../assets/img/ariel.png'
import languages from '../../data/languages.json'

import styled from '@mui/material/styles/styled'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import FlagCard from '../../components/MainViewComponents/FlagCard'

const StyledBox = styled(Box)`
    background-color: ${({ theme }) => theme.palette.custom.black.main};
    color: ${({ theme }) => theme.palette.custom.grey.main};

    background-image: url(${ariel});
    background-position: right center;
    background-repeat: no-repeat;

    text-shadow: 1px 1px 7px #000;
`

function SecondAboutSection() {
    return (
        <StyledBox component='section' py={6}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={8}>
                        <Typography variant='h4' component='h5' mb={1}>About Me</Typography>
                        <Typography variant='body1' component='p'>Certified Full-Stack Web Developer. Multilingual and self-taught in a variety of web technologies and programming languages. Passionate about both front and back end-development. Highly reliable and self-propelled to success and professionalism with a constant hunger for knowledge and improvement.</Typography>
                    </Grid>

                    <Grid item md={8}>
                        <Typography variant='h4' component='h5' mb={1}>Languages</Typography>
                        <Typography variant='body2' component='p' color='text.muted'  mb={1}>
                            *Speaking / Writing / Reading /	Understanding rated from 1 to 5 (5 being the highest)
                        </Typography>

                        <Grid container>
                            {
                                languages.map(language => {
                                    return (
                                        <Grid item sm={4} md={2}> 
                                            <FlagCard key={language.language} language={language} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>


                    </Grid>
                </Grid>

            </Container>
        </StyledBox>
    )
}

export default SecondAboutSection