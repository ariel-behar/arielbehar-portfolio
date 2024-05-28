import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'

import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'

const StyledTypography = styled(Typography)`
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 2.125rem;
`

function DesignHeading() {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 3.5, delay: 1 }}
        >
            <StyledTypography
                variant="h1"
                textAlign='center'
            >
                ARIEL BEHAR<br/> Web Design & Development
            </StyledTypography>
        </Box>

    )
}

export default DesignHeading