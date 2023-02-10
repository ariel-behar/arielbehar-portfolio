import { forwardRef } from 'react';

import Project from '../model/Project';
import { Partial } from '../types/common-types';

import styled from '@mui/material/styles/styled';
import { TransitionProps } from '@mui/material/transitions';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CloseIcon from '@mui/icons-material/Close';
import ProjectModalContent from './ProjectModalContent';
import Document from '../model/Document';
import DocumentModalContent from './DocumentModalContent';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialogTitle = styled(DialogTitle)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/pattern1.jpg');
    background-repeat: repeat;

    position: relative;
    text-align: center;
    border-bottom: 1px solid white;

    color: ${(({ theme }) => theme.palette.text.secondary)};

    .close-icon {
        position: absolute;
        color: ${(({ theme }) => theme.palette.text.muted.main)};
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        cursor: pointer;
        &:hover {
            color: ${(({ theme }) => theme.palette.text.muted.light)};
        }
    }
`

const StyledDialogActions = styled(DialogActions)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/pattern1.jpg');
    background-repeat: repeat;

    border-top: 1px solid white;
    padding: 20px;
`
interface Props {
    project?: Partial<Project>,
    documentCategory?: Document['category'],
    showModal: boolean,
    handleCloseModal: () => void
}

function Modal({ project, documentCategory, showModal, handleCloseModal }: Props) {

    const getDocumentTitle = (category:Document['category']): 'Résumé' | 'References' | 'Certificates' | '' => {
        if(category === 'resume') {
            return 'Résumé'
        } else if(category === 'reference') {
            return 'References'
        } else if(category === 'certificate') {
            return 'Certificates'
        } else {
            return ''
        }
    }

    return (
        <Dialog
            maxWidth='md'
            open={showModal}
            onClose={handleCloseModal}
            TransitionComponent={Transition}
            keepMounted
            scroll='body'
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <StyledDialogTitle id="alert-dialog-title">
                <CloseIcon className='close-icon' onClick={() => handleCloseModal()} />

                {project && <Typography variant='h5' component='h5'>{project?.title}</Typography>}

                {documentCategory && <Typography variant='h5' component='h5'>{getDocumentTitle(documentCategory)}</Typography>}

            </StyledDialogTitle>

            { project && <ProjectModalContent project={project}/> }

            { documentCategory && <DocumentModalContent documentCategory={documentCategory}/>}

            <StyledDialogActions>
                <Button
                    variant='contained'
                    size='large'
                    sx={{ backgroundColor: 'custom.blue.main', marginLeft: 'auto' }}
                    onClick={handleCloseModal}
                >
                    Close
                </Button>
            </StyledDialogActions>
        </Dialog>
    );
}

export default Modal