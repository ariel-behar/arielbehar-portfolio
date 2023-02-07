import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import styled from "@mui/material/styles/styled"
import Typography from '@mui/material/Typography'

const StyledSectionBox = styled(Box)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/chalkboard.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #b6d5f6;
    border-top: 3px solid ${(({ theme }) => theme.palette.custom.black.main)};
    border-bottom: 3px solid ${(({ theme }) => theme.palette.custom.black.main)};
`

const StyledResumePaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgb(135,219,135);
    background: linear-gradient(45deg, rgba(135,219,135,1) 0%, rgba(92,184,92,1) 100%);

    padding: 20px 0;
    border-radius: 20px;

    img {
        transform: rotateX(20deg) rotateY(20deg) scale(0.8);
        transition: 1.5s ease;
        cursor: pointer;

        width: 90%;
        height: auto;
        
        box-shadow: -50px 50px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);
        &:hover {
            transform: rotateX(0) rotateY(0) scale(1);
            box-shadow: 10px 10px 24px 0 rgba(0, 0, 0, 0.2), -10px -10px 24px 0 rgba(0, 0, 0, 0.2);
        }
    }
`

const StyledReferencesPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgb(251,202,133);
    background: linear-gradient(-45deg, rgba(251,202,133,1) 0%, rgba(240,173,78,1) 100%);

    padding: 20px 0;
    border-radius: 20px;

    img {
        transform: rotateX(20deg) rotateY(20deg) scale(0.8);
        transition: 1.5s ease;
        cursor: pointer;

        width: 90%;
        height: auto;
        
        transform: rotateX(20deg) rotateY(-20deg) scale(0.8);
        box-shadow: 50px 50px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);
        &:hover {
            transform: rotateX(0) rotateY(0) scale(1);
            box-shadow: 10px 10px 24px 0 rgba(0, 0, 0, 0.2), -10px -10px 24px 0 rgba(0, 0, 0, 0.2);
        }
    }
`

function SixthDocumentsSection() {
    return (
        <StyledSectionBox component='section' id='sixth-section' pb={5}>
            <Container>
                <Typography variant="h2" component='h3' color='text.secondary' my={3}>Some Reading Material</Typography>

                <Grid container >
                    <Grid item md={4} >

                        <StyledResumePaper elevation={10}>
                            <Typography variant="h4" component='h4' color='text.secondary'>Résumé</Typography>

                            <img src='https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/resume-onepage.jpg' alt='Resume' />
                        </StyledResumePaper>
                    </Grid>
                    <Grid item md={1}></Grid>

                    <Grid item md={4}>
                        <StyledReferencesPaper elevation={10}>
                            <Typography variant="h4" component='h4' color='text.secondary'>References</Typography>

                            <img src='https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/recommendation-letter-visual-edge.jpg' alt='Reference' />
                        </StyledReferencesPaper>
                    </Grid>
                </Grid>
            </Container>
        </StyledSectionBox>
    )
}

export default SixthDocumentsSection