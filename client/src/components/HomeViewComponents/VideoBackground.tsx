import inkMP4 from '../../assets/video/ink.mp4'
import inWEBM from '../../assets/video/ink.webm'
import inkOGV from '../../assets/video/ink.ogv'
import styled from '@mui/material/styles/styled'
import { useRef } from 'react'

const StyledVideo = styled('video')`
    position: relative;
    z-index: 0;
    width: 100%;
	height: 100%;
	object-fit: cover;
`

function VideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null)

    const onVideoEndedHandler = async (e: React.SyntheticEvent<HTMLVideoElement> ) => {
        videoRef.current?.load()
    }

    return (
        <>
            <StyledVideo ref={videoRef} poster="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/backgrounds/ink-poster.jpg" muted autoPlay playsInline onEnded={onVideoEndedHandler}>
				<source src={inkMP4} type="video/mp4" />
				<source src={inWEBM} type="video/webm" />
				<source src={inkOGV} type="video/ogv" />
                Your browser does not support the video tag.
			</StyledVideo>
        </>
    )
}

export default VideoBackground