import { useState } from 'react'

import Document from '../../model/Document'

import styled from "@mui/material/styles/styled"

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Modal from '../../components/Modal'

const StyledSectionBox = styled(Box)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/chalkboard.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #b6d5f6;
    border-top: 3px solid ${(({ theme }) => theme.palette.custom.black.main)};
    border-bottom: 3px solid ${(({ theme }) => theme.palette.custom.black.main)};

    .document-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding: 20px 0;
        border-radius: 20px;

        img {
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
    }

    @media (max-width: 1199px) {
        img {
            transform: initial;
            &:hover {
                transform: initial;
              
            }
        }
    }
`

const StyledResumePaper = styled(Paper)`
    background: rgb(135,219,135);
    background: linear-gradient(45deg, rgba(135,219,135,1) 0%, rgba(92,184,92,1) 100%);

    img {
        transform: rotateX(20deg) rotateY(20deg) scale(0.8);

    }
`

const StyledReferencesPaper = styled(Paper)`
    background: rgb(251,202,133);
    background: linear-gradient(-45deg, rgba(251,202,133,1) 0%, rgba(240,173,78,1) 100%);

    img {
        transform: rotateX(20deg) rotateY(-20deg) scale(0.8);
    }
`

function SixthDocumentsSection() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [documentCategory, setDocumentCategory] = useState<Document['category'] | null>(null)

    const onClickImageHandler = (category: Document['category']) => {
        setDocumentCategory(category)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setDocumentCategory(null)
        setShowModal(false)
    }

    return (
        <>
            {(showModal && documentCategory) && <Modal documentCategory={documentCategory} showModal handleCloseModal={handleCloseModal} />}

            <StyledSectionBox component='section' id='sixth-section' pb={5}>
                <Container>
                    <Typography variant="h2" component='h3' color='text.secondary' my={3}>Some Reading Material</Typography>

                    <Grid container px={{xs: 3}} spacing={{xs: 2, sm: 0}}>
                        <Grid item sm={4} >
                            <StyledResumePaper elevation={10} className='document-box'>
                                <Typography variant="h4" component='h4' color='text.secondary'>Résumé</Typography>

                                <img onClick={() => onClickImageHandler('resume')} src='https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/resume-onepage.jpg' alt='Resume' />
                            </StyledResumePaper>
                        </Grid>
                        <Grid item sm={1}></Grid>

                        <Grid item sm={4}>
                            <StyledReferencesPaper elevation={10} className='document-box'>
                                <Typography variant="h4" component='h4' color='text.secondary'>References</Typography>

                                <img onClick={() => onClickImageHandler('reference')} src='https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/recommendation-letter-visual-edge.jpg' alt='Reference' />
                            </StyledReferencesPaper>
                        </Grid>
                    </Grid>
                </Container>
            </StyledSectionBox>
        </>
    )
}

export default SixthDocumentsSection