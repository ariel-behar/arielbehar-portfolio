import { forwardRef } from 'react';

import Project from '../model/Project';
import ProjectCard from './ThirdSectionComponents/ProjectCard';
import { Partial } from '../types/common-types';

import styled from '@mui/material/styles/styled';
import { TransitionProps } from '@mui/material/transitions';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CloseIcon from '@mui/icons-material/Close';

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
        color: ${(({theme}) => theme.palette.text.muted.main)};
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        cursor: pointer;
        &:hover {
            color: ${(({theme}) => theme.palette.text.muted.light)};
        }
    }
`

const StyledDialogContent = styled(DialogContent)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/pattern1.jpg');
    background-repeat: repeat;

    padding: 0;

    img {
        width: 100%;
        height: auto;
        border-bottom: 1px solid white;
    }
`

const StyledDialogActions = styled(DialogActions)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/pattern1.jpg');
    background-repeat: repeat;

    border-top: 1px solid white;
    padding: 20px;
`
interface Props {
    project: Partial<Project>
    showModal: boolean,
    handleCloseModal: () => void
}

function ProjectModal({ project, showModal, handleCloseModal }: Props) {

    return (
        <div>
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
                    <Typography variant='h5' component='h5'>{project.title}</Typography>

                </StyledDialogTitle>

                <StyledDialogContent>
                    <img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/mockup-projects/${project.image}`} alt={project.title} />

                    <DialogContentText
                        id="alert-dialog-description"
                        p={3}
                        px={5}

                    >
                        <ProjectCard project={(project as Project)} hideTitle projectCategory='mockup' />

                    </DialogContentText>
                </StyledDialogContent>

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
        </div>
    );
}

export default ProjectModal