import Stack from '@mui/material/Stack'
import styled from '@mui/material/styles/styled'

const StyledFlyInTextUl = styled('ul')`
    list-style: none;
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    &.hidden li {
        opacity: 0;
        &:nth-child(1) {
            transform: translate(-200px, -200px);
        }
        &:nth-child(2) {
            transform: translate(20px, 100px);
        }
        &:nth-child(3) {
            transform: translate(-150px, -80px);
        }
        &:nth-child(4) {
            transform: translate(10px, -200px);
        }
        &:nth-child(5) {
            transform: translate(-300px, 200px);
        }
        &:nth-child(6) {
            transform: translate(20px, -20px);
        }
        &:nth-child(7) {
            transform: translate(30px, 200px);
            margin-right: 0;
        }
        &:nth-child(8) {
            transform: translate(200px, 0);
        }
    }
    li {
        display: inline-block;
        color: #2e2e2e;
        margin-right: 0;
        font-weight: 400;
        font-size: 1.5rem;
        opacity: 1;
        transition: all 2.5s ease;
        &:nth-child(7) {
            margin-right: 7px;
        }
        &:last-child {
            margin-right: 0;
            font-size: 0.8rem;
        }
    }
`


function FlyInText() {
    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            top='0'
            position='absolute'
            height='100%'
            width='100%'
        >
            <StyledFlyInTextUl className="fly-in-text hidden">
                <li>W</li>
                <li>E</li>
                <li>L</li>
                <li>C</li>
                <li>O</li>
                <li>M</li>
                <li>E</li>
                <li>
                    <i>TO</i>
                </li>
            </StyledFlyInTextUl>
        </Stack>
    )
}

export default FlyInText