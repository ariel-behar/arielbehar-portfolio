import { v4 as uuidv4 } from 'uuid';

import IProject from '../../../../model/Project'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface Props {
    project: IProject | null,
    projectCategory: 'real' | 'mockup',
    hideTitle?: boolean
}

function ProjectDetailsBox({ project, projectCategory, hideTitle }: Props) {
    return (
        <Stack py={2}>
            {!hideTitle && <Typography variant='h5' component='h5' textAlign='center' color='text.secondary'>{project?.title}</Typography>}

            <Typography mt={2} variant='h6' component='h6' color='text.secondary'>Project Description:</Typography>
            <Typography variant='body1' component='p' color='text.tertiary' textAlign='justify'>{project?.description}</Typography>

            {
                projectCategory === 'real'
                && project?.notes && project?.notes.map(note => {
                    return <Typography key={uuidv4()} variant='body1' component='p' color='text.muted.main' mt={0}>*{note.note}</Typography>
                })
            }

            <Typography mt={2} variant='h6' component='h6' color='text.secondary'>My Role in the Project:</Typography>
            <Typography variant='body1' component='p' color='text.tertiary' textAlign='justify'>{project?.myRole}</Typography>

            <Box>
                <Typography mt={2} variant='h6' component='h6' color='text.secondary'>Technologies Used:</Typography>
                {project?.technologies && project?.technologies.map(technology => <Typography key={uuidv4()} variant='body1' component='p' color='text.tertiary' display='inline-block'>•&nbsp;{technology}&nbsp;</Typography>)}
            </Box>

            <Typography mt={1} variant='h6' component='h6' color='text.secondary'>Project Launched in:</Typography>
            <Typography variant='body1' component='p' color='text.tertiary'>{project?.month} {project?.year}</Typography>

            <Typography mt={2} variant='h6' component='h6' color='text.secondary'>
                Visit site:&nbsp;
                <Link href={project?.url} target='_blank'>{project?.title}</Link>
            </Typography>

            {
                projectCategory === 'mockup'
                && project?.notes && project?.notes.map(note => {
                    return <Typography
                        variant='body1'
                        component='p'
                        color='text.muted.main'
                        mt={1}
                        key={uuidv4()}
                    >
                        *{note.note}&nbsp;
                        {note.hasLink && <Link href={note.hasLink} target='_blank'>here</Link>}
                    </Typography>
                })
            }

        </Stack>
    )
}

export default ProjectDetailsBox