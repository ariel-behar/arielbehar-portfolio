import { useEffect, useState } from "react"

import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import styled from "@mui/material/styles/styled"
import Typography from "@mui/material/Typography"

const StyledFooterBox = styled(Box)`
    background: ${(({ theme }) => theme.palette.custom.black.main)};
`

function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null)

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])


    return (
        <StyledFooterBox component='footer'>
            <Stack direction='row' justifyContent='center' py={2}>
                <Typography variant='body1' component="p" color='text.muted.main'>
                    © {currentYear} All Rights Reserved
                    <Link href="http://www.arielbehar.com" color='text.secondary' ml={1}>
                        Ariel Behar
                    </Link>
                </Typography>
            </Stack>
        </StyledFooterBox>
    )
}

export default Footer