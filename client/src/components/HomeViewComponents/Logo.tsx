import styled from '@mui/material/styles/styled'
import { motion } from 'framer-motion'

const StyledLogoImg = styled(motion.img)`
    margin-top: 1rem;
    max-height: 270px;
`

function Logo() {
    return (
        <StyledLogoImg
            src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/logo/logo-light.png"
            alt='Ariel Behar Logo'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
        />
    )
}

export default Logo