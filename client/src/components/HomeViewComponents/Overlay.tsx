import styled from "@mui/material/styles/styled"

const StyledOverlayDiv = styled('div')`
    position: absolute;
    z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.4);
`

function Overlay() {
  return (
    <StyledOverlayDiv></StyledOverlayDiv>
  )
}

export default Overlay