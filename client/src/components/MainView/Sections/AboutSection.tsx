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
            height: 345px;
        }

        @media (min-width: 375px) {
            height: 340px;
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
            position='relative'
        >
            <Container sx={{ padding: '0' }}>
                <Stack direction='column' rowGap={1} pl={{ xs: 1, md: 0 }}>
                    <Box position='relative'>

                        <Box className="float-container" maxWidth='900px'>
                            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                                <Typography variant='h4' component='h4' mb={2}>About Me</Typography>
                            </Stack>

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
                                textAlign='justify'
                            >
                                Certified Full-Stack Web Developer with over 5 years of comprehensive experience. Multilingual and self-taught in a variety of web technologies and programming languages. Proficient in working with Next.js, MERN stack, Three.js, Shopify, and WordPress. Highly reliable and self-propelled to success and professionalism with a constant hunger for knowledge and improvement.
                            </Typography>
                        </Box>
                    </Box>

                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyItems="space-between" maxWidth='950px' mt={{md: 2}}>

                        <Box order={{ xs: 2, sm: 1 }} width={{ xs: '100%', sm: '70%' }}>
                            <Typography variant='h4' component='h4' mb={2}>Languages</Typography>
                            <Grid container spacing={2}>
                                {
                                    languages.map(language => {
                                        return (
                                            <Grid item xs={4} md={2} key={uuidv4()}>
                                                <FlagCard language={language} />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>

                            <Typography variant='body2' component='p' color='text.muted.light' my={1} textAlign="center">
                                *Speaking / Writing / Reading /	Understanding { } rated from 1 to 5 (5 being the highest)
                            </Typography>
                        </Box>

                        <Stack order={{ xs: 1, sm: 2 }} my={{ xs: 2, sm: 0 }} width={{ xs: '100%', sm: '30%' }}>
                            <Typography variant='h4' component='h4' textAlign={{xs: 'left', md: 'center'}}>Experience</Typography>
                            <Stack flexGrow={1} direction="column" justifyContent='center' alignItems="center" mb={{ sm: 1 }}>
                                <Typography color='white' fontSize={130} lineHeight={0.8} component='h4' textAlign='center'>
                                    5+
                                </Typography>
                                <Typography component="span" fontSize={14}>years</Typography>
                            </Stack>
                        </Stack>
                    </Stack>

                </Stack>
            </Container>
        </StyledBox>
    )
}

export default AboutSection