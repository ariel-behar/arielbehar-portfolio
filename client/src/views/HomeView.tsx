import Box from "@mui/material/Box"

import FlyInText from "../components/HomeViewComponents/FlyInText"
import Overlay from "../components/HomeViewComponents/Overlay"
import VideoBackground from "../components/HomeViewComponents/VideoBackground"


function HomeView() {
    return (
        <>
            <Box sx={{
                width: '100%',
                height: '100vh',
                overflow: 'hidden'
            }}>

                <Overlay />
                <VideoBackground />

                <FlyInText />
            </Box>
        </>
    )
}

export default HomeView