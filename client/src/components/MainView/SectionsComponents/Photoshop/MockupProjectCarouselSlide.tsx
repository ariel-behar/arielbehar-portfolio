
import IProject from "../../../../model/Project"

import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface Props {
    project: IProject,
    handleShowModal: (show: boolean, project?: IProject) => void
}

function MockupProjectCarouselSlide({
    project,
    handleShowModal
}: Props) {
    return (
        <>
            <Stack
                className="slide"
                data-project-id={project._id}
                data-project-url={project.url}
                direction='column'
                justifyContent='center'
                alignItems='center'
                height='100%'
                mt={2}
                pb={1}

            >
                <img
                    onClick={() => handleShowModal(true, project)}
                    style={{ cursor: "pointer" }}
                    src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/mockup-projects/${project.image}`}
                    alt={`${project.title} || ${project._id}`}
                />

                <Typography mt={2} mb={1} variant="h5" component='p' color='aliceblue'>{project.title}</Typography>

                <Stack direction='row' justifyContent='center'>
                    <Typography variant="h6" component='p' sx={{ color: 'primary.main', cursor: 'pointer', fontSize: { xs: '1.1rem', sm: '1.25rem' } }} onClick={() => handleShowModal(false)}>
                        Project Description
                    </Typography>

                    <Typography variant="h6" component='p' color='aliceblue' sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>&nbsp;|&nbsp;</Typography>

                    <Typography variant="h6" component='p' sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                        <Link href={project.url} target="_blank" style={{ textDecoration: 'none' }} >Visit Project's Site</Link>
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default MockupProjectCarouselSlide