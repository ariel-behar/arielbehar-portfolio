import { useState } from "react"

import { ActionName } from "./Avatar/Avatar";

import AvatarCanvas from "./AvatarCanvas";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function AvatarScene() {
    const [animationName, setAnimationName] = useState<ActionName | ''>('')

    return (
        <Stack height='100%'>
            <Stack direction="row" width='100%' justifyContent='space-around' gap={5}>
                <Button
                    onClick={() => setAnimationName('Wave')}
                    size='small'
                    sx={{ backgroundColor: 'custom.blue.main', boxShadow: 7 }}
                    variant='contained'
                >
                    WAVE
                </Button>
                <Button
                    onClick={() => setAnimationName('Salute')}
                    size='small'
                    sx={{ backgroundColor: 'custom.blue.main', boxShadow: 7 }}
                    variant='contained'
                >
                    Salute
                </Button>
                <Button
                    onClick={() => setAnimationName('Dance')}
                    size='small'
                    sx={{ backgroundColor: 'custom.blue.main', boxShadow: 7 }}
                    variant='contained'
                >
                    Dance
                </Button>
            </Stack>
            <Box flexGrow={1}>
              <AvatarCanvas animationName={animationName} />
            </Box>
        </Stack>
    )
}

export default AvatarScene