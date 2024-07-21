import styled from "@mui/material/styles/styled"

const StyledOverlayDiv = styled('div')`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,.5);
`

function Overlay() {
	return (
		<StyledOverlayDiv></StyledOverlayDiv>
	)
}

export default Overlay