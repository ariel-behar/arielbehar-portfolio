import { motion } from 'framer-motion'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function DesignHeading() {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 3.5, delay: 1 }}
        >
            <Typography
                mt={2}
                mb={1}
                variant="h1"
                component="h1"
                textAlign='center'

                sx={{
                    fontFamily: 'Peralta, serif',
                }}
            >
                ARIEL BEHAR
            </Typography>

            <Typography
                mb={2}
                variant="h5"
                component="h1"
                textAlign='center'
            >
                Web Design & Development
            </Typography>
        </Box>

    )
}

export default DesignHeading