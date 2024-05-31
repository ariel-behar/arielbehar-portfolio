import Typography from "@mui/material/Typography"
import ThreeJsProject from "../../../../model/ThreeJsProject"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"

interface Props {
    project: ThreeJsProject
}

function ThreeJsCard({
    project
}: Props) {
    return (
        <Box>
            <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
            >
                <img
                    style={{ cursor: "pointer" }}
                    src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/three-js-projects/${project.image}`}
                    width="100%"
                    alt={`${project.title}`}
                />

                <Typography variant="h5" component='h5' textAlign='center'>{project.title}</Typography>
            </Link>
        </Box>
    )
}

export default ThreeJsCard