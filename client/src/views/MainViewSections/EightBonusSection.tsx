import { useState } from 'react'

import styled from '@mui/material/styles/styled'

import Box from '@mui/material/Box'
import HumbleBeginnings from '../../components/EightSectionComponents/HumbleBeginnings'
import SleepyDaniel from '../../components/EightSectionComponents/SleepyDaniel'

const StyledSectionBox = styled(Box)`
background: rgb(180,180,180);
background: linear-gradient(135deg, rgba(180,180,180,1) 0%, rgba(46,46,46,1) 72%);

    border-top: 3px solid ${(({ theme }) => theme.palette.custom.black.main)};
`

function EightBonusSection() {
    const [showDaniel, setShowDaniel] = useState<boolean>(false)

    const onClickShowDanielHandler = (bool: boolean) => {
        setShowDaniel(bool)
    }

    return (
        <StyledSectionBox component='section' id='eight-section'>
            {
                showDaniel
                    ? <SleepyDaniel onClickShowDanielHandler={onClickShowDanielHandler} />
                    : <HumbleBeginnings onClickShowDanielHandler={onClickShowDanielHandler} />
            }

        </StyledSectionBox>
    )
}

export default EightBonusSection