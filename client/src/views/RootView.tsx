import { lazy, useState, Suspense } from 'react'

import Navigation from '../components/Navigation/Navigation'
import HomeView from './HomeView'

import styled from '@mui/material/styles/styled'

import Box from '@mui/material/Box'

const MainViewPromise = import('./MainView')
const MainView = lazy(() => MainViewPromise)

const StyledHomeViewBox = styled(Box)`
    &.hide {
        animation: hide 3.5s forwards;
    }

    @keyframes hide {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

`

const StyledMainViewBox = styled(Box)`
    position: absolute;
    width: 100%;
    top: 100vh;

    &.hidden {
        display: none;
    }

    &.reveal {
        z-index: 2;
        opacity: 0.5;
        animation: reveal 2.5s forwards;
        
    }

    @keyframes reveal {
        from {
            opacity: 0.5;
            top: 100vh;
        }

        to {
            opacity: 1;
            top: 0;
        }
    }

`

function RootView() {
    const [showMainView, setShowMainView] = useState<boolean>(true)

    const showMainViewHandler = () => {
        setShowMainView(true)
    }

    return (
        <Box height={showMainView ? 'inherit' : '100vh'} overflow={showMainView ? 'block' : 'hidden'} position='relative'>
            <Navigation showMainView={showMainView} />


            {/* Delete the below BOX when done with the DEVELOPMENT PROCESS. Leave only the HomeView */}
            <Box sx={showMainView ? { opacity: 0 } : {}} >
                <StyledHomeViewBox className={showMainView ? 'hide' : ''}>
                    <HomeView showMainViewHandler={showMainViewHandler} />
                </StyledHomeViewBox>
            </Box>

            <StyledMainViewBox
                className={showMainView ? 'reveal' : 'hidden'}
            >
                <Suspense fallback={'...loading'}>


                    <MainView />
                </Suspense>
            </StyledMainViewBox>

        </Box>
    )
}

export default RootView