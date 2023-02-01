import inkMP4 from '../../assets/video/ink.mp4'
import inWEBM from '../../assets/video/ink.webm'
import inkOGV from '../../assets/video/ink.ogv'
import styled from '@mui/material/styles/styled'

const StyledVideo = styled('video')`
    position: relative;
    z-index: 0;
    width: 100%;
	height: 100%;
	object-fit: cover;
`

function VideoBackground() {
    return (
        <>
            <StyledVideo poster="img/downloaded/ink.png" loop muted autoPlay>
				<source src={inkMP4} type="video/mp4" />
				<source src={inWEBM} type="video/webm" />
				<source src={inkOGV} type="video/ogv" />
			</StyledVideo>

			<img src="img/downloaded/ink2.png" alt="Ink Poster" id="ink-poster" />
        </>
    )
}

export default VideoBackground