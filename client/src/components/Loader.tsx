import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"

const StyledLoaderBox = styled(Box)`
    height: 100vh;
    width: 100vw;
    background: white;
    position: fixed;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999; 

    .hexagon-loader {
        display: flex;
        flex-direction: column;
        align-items: center; 
        .row {
            display: flex; 
        }
    }

    .arrow {
        width: 0;
        height: 0;
        margin: 0 -6px;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 21.6px solid #4BAD50;
        animation: blink 1s infinite;
        filter: drop-shadow(0 0 18px #4BAD50); 
    }

    .arrow {
        &.down {
            transform: rotate(180deg); }
        &.outer-1 {
            animation-delay: -0.0555555556s; }
        &.outer-2 {
            animation-delay: -0.1111111111s; }
        &.outer-3 {
            animation-delay: -0.1666666667s; }
        &.outer-4 {
            animation-delay: -0.2222222222s; }
        &.outer-5 {
            animation-delay: -0.2777777778s; }
        &.outer-6 {
            animation-delay: -0.3333333333s; }
        &.outer-7 {
            animation-delay: -0.3888888889s; }
        &.outer-8 {
            animation-delay: -0.4444444444s; }
        &.outer-9 {
            animation-delay: -0.5s; }
        &.outer-10 {
            animation-delay: -0.5555555556s; }
        &.outer-11 {
            animation-delay: -0.6111111111s; }
        &.outer-12 {
            animation-delay: -0.6666666667s; }
        &.outer-13 {
            animation-delay: -0.7222222222s; }
        &.outer-14 {
            animation-delay: -0.7777777778s; }
        &.outer-15 {
            animation-delay: -0.8333333333s; }
        &.outer-16 {
            animation-delay: -0.8888888889s; }
        &.outer-17 {
            animation-delay: -0.9444444444s; }
        &.outer-18 {
            animation-delay: -1s; }
        &.inner-1 {
            animation-delay: -0.1666666667s; }
        &.inner-2 {
            animation-delay: -0.3333333333s; }
        &.inner-3 {
            animation-delay: -0.5s; }
        &.inner-4 {
            animation-delay: -0.6666666667s; }
        &.inner-5 {
            animation-delay: -0.8333333333s; }
        &.inner-6 {
            animation-delay: -1s; }
    }

    @keyframes blink {
        0% {
            opacity: 0.1; 
        }
        30% {
            opacity: 1; 
        }
        100% {
            opacity: 0.1;
        } 
    }
`

function Loader() {
    return (
        <StyledLoaderBox id="loader-overlay">
            <Box className="hexagon-loader">
                <Box className="row">
                    <Box className="arrow up outer outer-18"></Box>
                    <Box className="arrow down outer outer-17"></Box>
                    <Box className="arrow up outer outer-16"></Box>
                    <Box className="arrow down outer outer-15"></Box>
                    <Box className="arrow up outer outer-14"></Box>
                </Box>
                <Box className="row">
                    <Box className="arrow up outer outer-1"></Box>
                    <Box className="arrow down outer outer-2"></Box>
                    <Box className="arrow up inner inner-6"></Box>
                    <Box className="arrow down inner inner-5"></Box>
                    <Box className="arrow up inner inner-4"></Box>
                    <Box className="arrow down outer outer-13"></Box>
                    <Box className="arrow up outer outer-12"></Box>
                </Box>
                <Box className="row">
                    <Box className="arrow down outer outer-3"></Box>
                    <Box className="arrow up outer outer-4"></Box>
                    <Box className="arrow down inner inner-1"></Box>
                    <Box className="arrow up inner inner-2"></Box>
                    <Box className="arrow down inner inner-3"></Box>
                    <Box className="arrow up outer outer-11"></Box>
                    <Box className="arrow down outer outer-10"></Box>
                </Box>
                <Box className="row">
                    <Box className="arrow down outer outer-5"></Box>
                    <Box className="arrow up outer outer-6"></Box>
                    <Box className="arrow down outer outer-7"></Box>
                    <Box className="arrow up outer outer-8"></Box>
                    <Box className="arrow down outer outer-9"></Box>
                </Box>
            </Box>
        </StyledLoaderBox>
    )
}

export default Loader