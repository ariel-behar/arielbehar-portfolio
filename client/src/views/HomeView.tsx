import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { motion } from "framer-motion"

import DesignHeading from "../components/HomeViewComponents/DesignHeading"
import FlyInText from "../components/HomeViewComponents/FlyInText"
import Logo from "../components/HomeViewComponents/Logo"
import Overlay from "../components/HomeViewComponents/Overlay"
import VideoBackground from "../components/HomeViewComponents/VideoBackground"

interface Props {
    showMainViewHandler: () => void
}

function HomeView({ showMainViewHandler }: Props) {

    return (
        <>
            <Box sx={{
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative'
            }}>

                <Overlay />
                <VideoBackground />

                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    zIndex='1'
                    position='absolute'
                    top='0'
                    left='0'
                    height='100%'
                    width='100%'
                >
                    <FlyInText />

                    <Logo />

                    <DesignHeading />

                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => showMainViewHandler()}

                        sx={{
                            marginTop: '0.5rem',
                            backgroundColor: 'custom.blue.main'
                        }}

                        component={motion.button}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2.5, delay: 3 }}

                    >
                        EXPLORE SITE
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default HomeView