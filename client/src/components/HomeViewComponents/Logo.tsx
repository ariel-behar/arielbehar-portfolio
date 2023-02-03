import styled from '@mui/material/styles/styled'
import { motion } from 'framer-motion'

import logoLight from '../../assets/img/logo/logo-light.png'

const StyledLogoImg = styled(motion.img)`
    margin-top: 2rem;
    max-height: 270px;
`

function Logo() {
    return (
        <StyledLogoImg
            src={logoLight}
            alt='Ariel Behar Logo'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 3 }}
        />
    )
}

export default Logo