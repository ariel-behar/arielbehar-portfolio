import { forwardRef} from 'react';

import Project from '../model/Project';
import { Partial } from '../types/common-types';

import styled from '@mui/material/styles/styled';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProjectCard from './ThirdSectionComponents/ProjectCard';

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

    text-align: center;
    border-bottom: 1px solid white;

    color: ${(({ theme }) => theme.palette.text.secondary)};
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
`
interface Props {
    project: Partial<Project>
    showModal: boolean,
    handleCloseModal: () => void
}

function ProjectModal({ project, showModal, handleCloseModal }: Props) {

    return (
        <div>
            {/* <Button onClick={() => setOpen(true)}>Open Dialog</Button> */}

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