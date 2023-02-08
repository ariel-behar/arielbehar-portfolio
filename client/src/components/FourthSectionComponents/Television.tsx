import designMP4 from '../../assets/video/design.mp4'
import designWEBM from '../../assets/video/design.webm'
import designOGV from '../../assets/video/design.ogv'

import styled from '@mui/material/styles/styled'
import Box from '@mui/material/Box'
import { useState } from 'react'

const StyledBox = styled(Box)`
    position: relative;
    margin-top: 16px;
    
    .tv-background {
        position: absolute;
        width: 75%;
        height: 92%;
        background: rgb(118,120,119);
        background: radial-gradient(circle, rgba(118,120,119,1) 0%, rgba(73,73,71,1) 80%);

        transform: rotate(-10deg) translateX(-50%);
        top: -12px;
        left: 50%;
        z-index: 3;
    }

    video {
        position: relative;
        transform: rotate(-10deg) translateX(-50%);
        width: 79%;
        height: auto;

        top: -19px;
        left: 50%;
        z-index: 4;
    }

    .tv-image {
        position: absolute;
        top: -20px;
        left: 50%;
        transform: rotate(-10deg) translateX(-50%);
        width: 80%;
        height: auto;
        z-index: 5;
    }

    .tv-buttons {
        position: absolute;
        bottom: -20%;
        right: 10%;

        cursor: pointer;
        color: ${({ theme }) => theme.palette.text.secondary};
    }

    .tvOn {
        color: ${({ theme }) => theme.palette.custom.green.main};
    }

    .tvOff {
        color: ${({ theme }) => theme.palette.error.main};
    }
`


function Television() {
    const [isTvOn, setIsTvOn] = useState<boolean>(true)

    const turnTvOnHandler = () => {
        setIsTvOn(true)
    }


    const turnTvOffHandler = () => {
        setIsTvOn(false)
    }

    return (
        <>
            <StyledBox>
                <Box className="tv-background"></Box>

                <video loop muted autoPlay style={isTvOn ? {} : { opacity: 0 }}>
                    <source className="embed-responsive-item" src={designMP4} type="video/mp4" />
                    <source className="embed-responsive-item" src={designWEBM} type="video/webm" />
                    <source className="embed-responsive-item" src={designOGV} type="video/ogv" />
                </video>
                {/* 
            <img src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/psd-to-html5.png" alt="PSD TO HTML Poster" className="hidden-md-up img-fluid mb-3 mt-2" /> */}

                <img className='tv-image' src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/tv.png" alt="Television" />



                <Box className="tv-buttons">
                    <span onClick={turnTvOnHandler} className={isTvOn ? "tvOn" : ''} >ON </span>|<span className={isTvOn ? "" : 'tvOff'} onClick={turnTvOffHandler}> OFF</span>
                </Box>
            </StyledBox>


        </>
    )
}

export default Television