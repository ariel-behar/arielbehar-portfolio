import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { lazy, useState, Suspense } from 'react'
import HomeView from './HomeView'

const MainViewPromise = import('./MainView')
const MainView = lazy(() => MainViewPromise)

function RootView() {
    const [showMainView, setShowMainView] = useState<boolean>(false)

    const showMainViewHandler = () => {
        setShowMainView(true)
    }

    return (
        <Box height={showMainView ? 'inherit' : '100vh'} overflow={showMainView ? 'block' : 'hidden'}>

            <HomeView showMainViewHandler={showMainViewHandler} />

            <Box
                sx={showMainView ? { position: 'absolute', zIndex: 2 } : { display: 'none' }}
                component={motion.div}
                initial={{opacity: 0.5 }}
                animate={showMainView ? {y: '-100vh', opacity: 1 } : {}}
                transition={{duration: 2.5}}
            >
                <Suspense fallback={'...loading'}>
                    <MainView />
                </Suspense>
            </Box>

        </Box>
    )
}

export default RootView