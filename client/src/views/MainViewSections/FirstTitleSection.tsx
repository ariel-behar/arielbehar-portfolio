import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import styled from "@mui/material/styles/styled"
import Typography from "@mui/material/Typography"
import { useEffect } from "react"

const StyledBox = styled(Box)`
    background: rgb(64,150,238);
    background: linear-gradient(-45deg, rgba(64,150,238,1) 0%, rgba(240,248,255,1) 100%);

    box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
    position: relative;

    height: 37vh;
`

const StyledStack = styled(Stack)`
    height:100%;

    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/logo/logo-blue.png');
    background-position: left center;
    background-repeat: no-repeat;
`

interface Props {
    loadSectionHandler: (sectionNum: number) => void
}

function FirstTitleSection({ loadSectionHandler }: Props) {
    useEffect(() => {
        loadSectionHandler(2)
    },[loadSectionHandler])

    return (
        <StyledBox component='section' id='first-section' >

            <StyledStack direction='column' justifyContent='center' alignItems='center'  >
                <Typography variant="h3" component='h1' textAlign='center'>ARIEL BEHAR WEB DESIGN </Typography>
                <Typography variant="h5" component='h2' fontStyle='italic' textAlign='center'>Design Done Differently</Typography>
            </StyledStack>
        </StyledBox>
    )
}

export default FirstTitleSection