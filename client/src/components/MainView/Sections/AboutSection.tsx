import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from '@mui/material/styles/styled'

import languages from '../../../data/languages.json'

import FlagCard from '../SectionsComponents/About/FlagCard'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';

const StyledBox = styled(Box)`
    background-color: ${({ theme }) => theme.palette.custom.black.main};
    color: ${({ theme }) => theme.palette.custom.grey.main};

    background-image: url("https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/ariel.png");
    background-position: right bottom;
    background-repeat: no-repeat;

    text-shadow: 1px 1px 7px #000;

    @media (max-width: 600px) {
        background-image: none;
    }

    .float-container {
        @media (min-width: 200px) {
            height: 610px;
        }

        @media (min-width: 250px) {
            height: 490px;
        }

        @media (min-width: 300px) {
            height: 450px;
        }

        @media (min-width: 350px) {
            height: 352px;
        }

        @media (min-width: 400px) {
            height: 310px;
        }

        @media (min-width: 450px) {
            height: 270px;
        }

        @media (min-width: 500px) {
            height: 240px;
        }

        @media (min-width: 550px) {
            height: 210px;
        }

        @media (min-width: 600px) {
            height: auto;
        }
    }
`
interface Props {
    loadSectionHandler: (sectionNum: number) => void
}

function AboutSection({ loadSectionHandler }: Props) {

    useEffect(() => {
        loadSectionHandler(3)
    }, [loadSectionHandler])

    return (
        <StyledBox
            component='section'
            py={{ xs: 3, lg: 6 }}
            px={0}
            id="second-section"
        >
            <Container sx={{ padding: '0' }}>
                <Stack direction='column' rowGap={1} >
                    <Box maxWidth='900px' position='relative'>

                        <Box className="float-container" >
                            <Typography px={2} variant='h4' component='h4' mb={1}>About Me</Typography>

                            <Box
                                display={{ xs: 'block', sm: 'none' }}
                                height='calc(100% - 175px)'
                                sx={{ float: 'right' }}
                            />
                            <Box
                                display={{ xs: 'block', sm: 'none' }}
                                sx={{ float: 'right', clear: 'right' }}
                                height='175px'
                                component="img"
                                src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/ariel.png"
                                alt="Ariel Behar Photo"
                            />

                            <Typography
                                variant='body1'
                                component='p'
                                px={2}
                                maxWidth='900px'
                            >
                                Certified Full-Stack Web Developer with over 5 years of comprehensive experience. Multilingual and self-taught in a variety of web technologies and programming languages. Proficient in working with Next.js, MERN stack, Three.js, Shopify, and WordPress. Highly reliable and self-propelled to success and professionalism with a constant hunger for knowledge and improvement.
                            </Typography>
                        </Box>
                    </Box>

                    <Box maxWidth='700px' mt={2} px={2}>
                        <Typography variant='h4' component='h4' mb={1}>Languages</Typography>
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
                    </Box>
                </Stack>
            </Container>
        </StyledBox>
    )
}

export default AboutSection