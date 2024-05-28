import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { motion } from "framer-motion"

import DesignHeading from "../components/HomeView/DesignHeading"
import FlyInText from "../components/HomeView/FlyInText"
import Logo from "../components/HomeView/Logo"
import Overlay from "../components/HomeView/Overlay"
import VideoBackground from "../components/HomeView/VideoBackground"

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
                        transition={{ duration: 2, delay: 4 }}

                    >
                        EXPLORE SITE
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default HomeView