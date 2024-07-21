import { useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import languages from '../../data/languages.json'

import FlagCard from '../../components/MainViewComponents/FlagCard'

import styled from '@mui/material/styles/styled'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const StyledBox = styled(Box)`
    background-color: ${({ theme }) => theme.palette.custom.black.main};
    color: ${({ theme }) => theme.palette.custom.grey.main};

    background-image: url("https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/ariel.png");
    background-position: right center;
    background-repeat: no-repeat;

    text-shadow: 1px 1px 7px #000;
`
interface Props {
    loadSectionHandler: (sectionNum: number) => void
}

function SecondAboutSection({ loadSectionHandler }: Props) {

    useEffect(() => {
        loadSectionHandler(3)
    },[loadSectionHandler])

    return (
        <StyledBox
            component='section'
            
            py={{xs: 3, lg: 6 }}
            id="second-section"

            sx={{
                backgroundSize: { xs: 'cover', sm: 'inherit'}
            }}

        >
            <Container>
                <Grid
                    container
                    spacing={{xs: 1, lg: 4}}
                    p={{xs: 2, lg: 0}}
                    sx={{
                        backgroundColor: { xs: "rgba(0, 0, 0, 0.5)", lg: 'transparent' },
                        borderRadius: { xs: "20px" }
                    }}
                >
                    <Grid item sm={12} lg={8} >
                        <Typography variant='h4' component='h5' mb={1}>About Me</Typography>
                        <Typography variant='body1' component='p'>Certified Full-Stack Web Developer. Multilingual and self-taught in a variety of web technologies and programming languages. Passionate about both front and back-end development. Highly reliable and self-propelled to success and professionalism with a constant hunger for knowledge and improvement.</Typography>
                    </Grid>

                    <Grid item sm={12} lg={8} mt={{xs: 2, lg: 0}}>
                        <Typography variant='h4' component='h5' mb={1}>Languages</Typography>
                        <Typography variant='body2' component='p' color='text.muted.light' mb={1}>
                            *Speaking / Writing / Reading /	Understanding rated from 1 to 5 (5 being the highest)
                        </Typography>

                        <Grid container spacing={2}>
                            {
                                languages.map(language => {
                                    return (
                                        <Grid item xs={4} sm={2} md={2} key={uuidv4()}>
                                            <FlagCard language={language} />
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