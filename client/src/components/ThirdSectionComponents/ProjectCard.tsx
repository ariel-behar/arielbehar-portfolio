import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Project from '../../model/Project'

interface Props {
	project: Project | null,
    hideTitle?: boolean
}

function ProjectDetailsBox({project, hideTitle}: Props) {
    return (
        <Stack>

            { !hideTitle && <Typography variant='h5' component='h5' textAlign='center' color='text.secondary'>{project?.title}</Typography> }

            <Typography mt={2} variant='h6' component='h6' color='text.secondary'>Project Description:</Typography>
            <Typography variant='body1' component='p' color='text.tertiary' textAlign='justify'>{project?.description}</Typography>

            {project?.notes && project?.notes.map(note => <Typography variant='body1' component='p' color='text.muted' mt={0}>*{note}</Typography>)}

            <Typography mt={2} variant='h6' component='h6' color='text.secondary'>My Role in the Project:</Typography>
            <Typography variant='body1' component='p' color='text.tertiary' textAlign='justify'>{project?.myRole}</Typography>

            <Box>
                <Typography mt={2} variant='h6' component='h6' color='text.secondary'>Technologies Used:</Typography>
                {project?.technologies && project?.technologies.map(technology => <Typography variant='body1' component='p' color='text.tertiary' display='inline-block'>•&nbsp;{technology}&nbsp;</Typography>)}
            </Box>

            <Typography mt={1} variant='h6' component='h6' color='text.secondary'>Project Launched in:</Typography>
            <Typography variant='body1' component='p' color='text.tertiary'>{project?.month} {project?.year}</Typography>

            <Typography mt={2} variant='h6' component='h6' color='text.secondary'>
                Visit site:&nbsp;
                <Link href={project?.url} target='_blank'>{project?.title}</Link>
            </Typography>
        </Stack>
    )
}

export default ProjectDetailsBox