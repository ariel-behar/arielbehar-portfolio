import styled from '@mui/material/styles/styled'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ContactForm from '../../components/SeventhSectionComponents/ContactForm'

const StyledSectionBox = styled(Box)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/phone-blurred.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: right center;

`

const StyledDarkBox = styled(Box)`
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
`


const StyledLogoImg = styled('img')`
    position: absolute;
    top: 20px;
    left: -5px;
    height: 75px;
    width: 75px;
`

function SeventhContactSection() {
    return (
        <StyledSectionBox component='section' id='seventh-section' py={4}>
            <Container>
                <Grid container >
                    <Grid item md={7} lg={6}>
                        <StyledDarkBox px={3} pb={2}>
                            <Stack direction='row' position='relative' justifyContent='center' alignItems='center' minHeight='120px'>
                                <StyledLogoImg src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/logo/logo.png" alt="logo" />
                                <Typography variant='h4' component='h5' color='text.secondary'>CONTACT ME</Typography>
                            </Stack>

                            <Typography variant='body1' component='p' color='text.secondary' textAlign='justify'>Remarks? Comments? Suggestions? Need a website done or just saying "hi"? Leave your input below and you'll get a response from me within the next 24 hours</Typography>

                            <ContactForm />

                        </StyledDarkBox>

                    </Grid>

                    <Grid item md={1} lg={2}></Grid>

                    <Grid item md={4}>
                        i. Velit inventore explicabo maxime dolores accusamus voluptates natus officia nemo eaque deleniti, repudiandae officiis neque modi consectetur tempore cumque eos ut voluptatum? Quos eveniet sequi hic id quo, libero unde, eligendi error commodi, nisi ratione. Ducimus amet maiores, eos ad laborum soluta quidem neque expedita labore. Maiores, quam! Quidem corrupti cupiditate fugit pariatur corporis eos nam quisquam explicabo? Veritatis et natus cumque a repellendus sint veniam fuga hic commodi culpa deleniti consequatur sapiente nisi dolorem, provident quod neque illum eos doloribus, adipisci modi ea ad possimus impedit? Tenetur accusantium aut vitae maxime, amet, recusandae soluta cumque voluptatibus voluptates rem consectetur reiciendis alias repellendus iusto molestias voluptatum impedit qui. Assumenda dolore eligendi, velit, minus veritatis debitis in deserunt nesciunt quibusdam doloribus officiis vel illum quod, eius ipsum enim libero reiciendis tenetur aspernatur doloremque hic porro adipisci. Pariatur quod quidem exercitationem, perferendis quo aspernatur dolor dolore deserunt voluptate necessitatibus totam repe
                    </Grid>
                </Grid>


            </Container>
        </StyledSectionBox>
    )
}

export default SeventhContactSection