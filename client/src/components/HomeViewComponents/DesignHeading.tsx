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
            transition={{ duration: 3, delay: 3 }}
        >
            <StyledTypography
                variant="h1"
            >
                ARIEL BEHAR WEB DESIGN
            </StyledTypography>
        </Box>

    )
}

export default DesignHeading