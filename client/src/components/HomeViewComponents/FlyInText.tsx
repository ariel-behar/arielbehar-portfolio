import Stack from '@mui/material/Stack'
import styled from '@mui/material/styles/styled'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const StyledFlyInTextUl = styled('ul')`
    list-style: none;
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    padding-left: 0;

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
        color: ${({ theme }) => theme.palette.custom.black.main};
        transition: all 3.5s ease;

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
    const [isTextHidden, setIsTextHidden] = useState<boolean>(true)

    useEffect(() => {
        setIsTextHidden(false)
    }, [])

    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            top='0'
            position='absolute'
            height='100%'
            width='100%'

            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1}}
            
        >
            <StyledFlyInTextUl className={`${isTextHidden ? 'hidden' : ''}`}>
                <li>
                    <Typography variant="h3" component='p'>W</Typography>
                </li>
                <li>
                    <Typography variant="h3" component='p'>E</Typography>
                </li>
                <li>
                    <Typography variant="h3" component='p'>L</Typography>
                </li>
                <li>
                    <Typography variant="h3" component='p'>C</Typography>
                </li>
                <li>
                    <Typography variant="h3" component='p'>O</Typography>
                </li>
                <li>
                    <Typography variant="h3" component='p'>M</Typography>
                </li>
                <li>
                    <Typography variant="h3" component='p'>E</Typography>
                </li>
                <li>
                    <i>TO</i>
                </li>
            </StyledFlyInTextUl>
        </Stack>
    )
}

export default FlyInText