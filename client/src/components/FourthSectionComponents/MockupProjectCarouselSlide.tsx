import { useState } from "react"

import Project from "../../model/Project"
import Modal from "../Modal"

import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface Props {
    project: Project
}

function MockupProjectCarouselSlide({ project }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false)

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            {showModal && <Modal project={project as Project} showModal={showModal} handleCloseModal={handleCloseModal} />}

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
                    onClick={() => setShowModal(true)}
                    style={{cursor: "pointer"}}
                    src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/mockup-projects/${project.image}`}
                    alt={`${project.title} || ${project._id}`}
                />

                <Typography mt={2} mb={1} variant="h5" component='p' color='aliceblue'>{project.title}</Typography>

                <Stack direction='row' justifyContent='center'>
                    <Typography variant="h6" component='p' sx={{ color: 'primary.main', cursor: 'pointer'}} onClick={() => setShowModal(true)}>
                        Project Description
                    </Typography>
                    <Typography variant="h6" component='p' color='aliceblue'>&nbsp;|&nbsp;</Typography>
                    <Typography variant="h6" component='p'>
                        <Link href={project.url} target="_blank" style={{ textDecoration: 'none' }} >Visit Project's Site</Link>
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default MockupProjectCarouselSlide