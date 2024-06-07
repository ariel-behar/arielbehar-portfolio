import { useEffect } from "react"
import useTheme from "@mui/material/styles/useTheme"
import useMediaQuery from "@mui/material/useMediaQuery"

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const StyledBox = styled(Box)`
    background: rgb(64,150,238);
    background: linear-gradient(-45deg, rgba(64,150,238,1) 0%, rgba(240,248,255,1) 100%);

    box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
    position: relative;

    height: 37vh;
   

    .first-section-logo-background-stack {
        background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/logo/logo-blue.png');
        background-position: left center;
        background-repeat: no-repeat;

        @media (max-width: 576px) { 
            background-size: cover;
        }

        .first-section-mask-background-stack {
            background: rgba(64,150,238, 0.5);
            background: linear-gradient(-45deg, rgba(64,150,238,0.5) 0%, rgba(240,248,255,0.5) 100%);

            @media (max-width: 900px) { 
                background: rgba(64,150,238, 0.8);
                background: linear-gradient(-45deg, rgba(64,150,238,0.8) 0%, rgba(240,248,255,0.8) 100%);
            }

        }
    }
`

interface Props {
    loadSectionHandler: (sectionNum: number) => void
}

function TitleSection({ loadSectionHandler }: Props) {
    const theme = useTheme();
    const isXsSm = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        loadSectionHandler(2)
    }, [loadSectionHandler])

    return (
        <StyledBox component='section' id='first-section' >

            <Stack
                className="first-section-logo-background-stack"
                height='100%'
            >
                <Stack
                    className="first-section-mask-background-stack"
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    height='100%'
                >
                    <Typography variant="h1" component='h1' mb={{xs: 1, md: 0}} textAlign='center'>
                        ARIEL BEHAR 
                        {isXsSm && <br />}
                        &nbsp;WEB PORTFOLIO
                        </Typography>
                    <Typography variant="h4" component='h2' fontStyle='italic' textAlign='center'>
                        Design & Development
                        {isXsSm && <br />}
                        &nbsp;Done Differently
                    </Typography>
                </Stack>
            </Stack>
        </StyledBox>
    )
}

export default TitleSection