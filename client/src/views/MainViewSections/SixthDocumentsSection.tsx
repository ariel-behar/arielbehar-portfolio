import { useEffect, useState } from 'react'

import Document from '../../model/Document'

import styled from "@mui/material/styles/styled"

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Modal from '../../components/Modal/Modal'

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
        transform: rotateX(15deg) rotateY(15deg) scale(0.8);

    }
`

const StyledReferencesPaper = styled(Paper)`
background: rgb(116, 185, 255);
    background: linear-gradient(-45deg, rgb(148, 202, 250) 0%, rgba(64,150,238,1) 100%);

    img {
        transform: scale(0.73);
    }
`

const StyledCertificatesPaper = styled(Paper)`
    background: rgb(251,202,133);
    background: linear-gradient(-45deg, rgba(251,202,133,1) 0%, rgba(240,173,78,1) 100%);

    img {
        transform: rotateX(15deg) rotateY(-15deg) scale(0.8);
    }
`

interface Props {
    loadSectionHandler: (sectionNum: number) => void
}

function SixthDocumentsSection({ loadSectionHandler }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [documentCategory, setDocumentCategory] = useState<Document['category'] | null>(null)
    
	useEffect(() => {
        loadSectionHandler(7)
    },[loadSectionHandler])


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

                    <Grid container px={{ xs: 3 }} spacing={{ xs: 2, sm: 2 }}>
                        <Grid item sm={4} >
                            <StyledResumePaper elevation={10} className='document-box'>
                                <Typography variant="h4" component='h4' color='text.secondary'>Résumé</Typography>

                                <img onClick={() => onClickImageHandler('resume')} src='https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/resume/resume1.jpg' alt='Resume' />
                            </StyledResumePaper>
                        </Grid>
                        <Grid item sm={4}>
                            <StyledReferencesPaper elevation={10} className='document-box'>
                                <Typography variant="h4" component='h4' color='text.secondary'>References</Typography>

                                <img onClick={() => onClickImageHandler('reference')} src='https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/reference/recommendation-letter-visual-edge.jpg' alt='Reference' />
                            </StyledReferencesPaper>
                        </Grid>

                        <Grid item sm={4}>
                            <StyledCertificatesPaper elevation={10} className='document-box'>
                                <Typography variant="h4" component='h4' color='text.secondary'>Certificates</Typography>

                                <img onClick={() => onClickImageHandler('certificate')} src='https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/certificate/softuni-react.jpg' alt='Reference' />
                            </StyledCertificatesPaper>
                        </Grid>
                    </Grid>
                </Container>
            </StyledSectionBox>
        </>
    )
}

export default SixthDocumentsSection