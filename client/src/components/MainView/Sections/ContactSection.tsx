import { useEffect, useState } from 'react'

import styled from '@mui/material/styles/styled'

import ContactForm from '../SectionsComponents/Contact/ContactForm'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'

const StyledSectionBox = styled(Box)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/backgrounds/phone-blurred.jpg');
    background-attachment: fixed; 
    background-size: cover;
    background-position: right center;
`

const StyledDarkStack = styled(Stack)`
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
`

const StyledLogoImg = styled('img')`
    position: absolute;

    top: -10px;
    left: -10px;
    height: 50px;
    width: 50px;

    @media (min-width: 600px){
        top: -20px;
        left: -20px;
        height: 75px;
        width: 75px;
    }
`

interface Props {
    loadSectionHandler: (sectionNum: number) => void
}

function ContactSection({ loadSectionHandler }: Props) {
    const [formSubmitSuccess, setFormSubmitSuccess] = useState<boolean>(false)

    useEffect(() => {
        loadSectionHandler(9)
    }, [loadSectionHandler])

    const formSubmitSuccessHandler = (bool: boolean) => {
        setFormSubmitSuccess(bool)
    }


    return (
        <StyledSectionBox component='section' id='seventh-section' py={4} >
            <Container>
                <Grid container spacing={{ xs: 2, sm:3, md: 10, lg: 22 }}>

                    <Grid item xs={12} sm={7} md={7} lg={7}>
                        <StyledDarkStack px={{ xs: 2, md: 3 }} pb={2} minHeight='392px' direction='column'>
                            <StyledLogoImg src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/logo/logo.png" alt="logo" />

                            <Typography variant='h4' component='h5' color='text.secondary' textAlign='center' my={3}>CONTACT ME</Typography>

                            {
                                !formSubmitSuccess
                                    ? <>
                                        <Typography variant='body1' component='p' color='text.secondary' textAlign='justify'>Need a web site/app done or just saying "HI"? Leave your input below and you'll get a response from me within the next 24 hours</Typography>
                                        <ContactForm formSubmitSuccessHandler={formSubmitSuccessHandler} />
                                    </>
                                    : <Stack direction='column' justifyContent='center' alignItems='center' pt={4} spacing={2}>
                                        <Typography variant='h3' component='p' textAlign='center' color='white'>Thank you!</Typography>
                                        <Typography variant='h5' component='p' textAlign='center' color='success.light'>Your form has successfully been submitted!</Typography>
                                    </Stack>
                            }
                        </StyledDarkStack>
                    </Grid>

                    <Grid item xs={12} sm={5} md={5} lg={5}>
                        <StyledDarkStack px={{ xs: 4, sm: 1, md: 4 }} >
                            <Typography variant='h4' component='h5' color='text.secondary' textAlign='center' my={3}>FIND ME ON</Typography>

                            <Stack direction='row' justifyContent='space-evenly' mb={3} gap={1}>
                                <Link textAlign='center'  href="https://www.linkedin.com/in/ariel-behar/" target="_blank" >
                                    <Box height={{ xs: '80px', sm: '90px', md: '100px', lg: '110px' }} width='auto' component="img" sx={{ objectFit: 'contain' }} src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/linkedin.svg" alt="LinkedIn Logo" />
                                </Link>
                                <Link textAlign='center' href="https://github.com/ariel-behar" target="_blank">
                                    <Box height={{ xs: '80px', sm: '90px', md: '100px', lg: '110px' }} width='auto' component="img" sx={{ objectFit: 'contain' }} src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/github.svg" alt="Github Logo" />
                                </Link>
                            </Stack>

                            <Typography variant='h6' component='p' color='text.secondary' textAlign='center' mb={2}>OR EMAIL ME DIRECTLY AT</Typography>

                            <Typography variant='h6' component='p' color='text.secondary' fontStyle='italic' textAlign='center' mb={3}>ariel.behar@hotmail.com</Typography>

                        </StyledDarkStack>
                    </Grid>
                </Grid>
            </Container>
        </StyledSectionBox>
    )
}

export default ContactSection