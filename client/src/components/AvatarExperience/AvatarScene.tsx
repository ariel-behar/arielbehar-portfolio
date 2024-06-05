import { useState } from "react"
import { v4 as uuid } from 'uuid'

import { ActionName, animationsNames } from "./Avatar/Avatar";

import AvatarCanvas from "./AvatarCanvas";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function AvatarScene() {
    const [animationName, setAnimationName] = useState<ActionName | ''>('')

    return (
        <Stack height='100%'>
            <Stack direction="row" width='100%' justifyContent='space-around' px={1}>
                {
                    animationsNames.slice(2).map((name) => {
                        return (
                            <Button
                                key={uuid()}
                                onClick={() => setAnimationName(name)}
                                size='small'
                                sx={{ backgroundColor: 'custom.blue.main', boxShadow: 7 }}
                                variant='contained'
                            >
                                {name}
                            </Button>
                        )
                    })
                }
            </Stack>

            <Box flexGrow={1}>
                <AvatarCanvas animationName={animationName} />
            </Box>

        </Stack>
    )
}

export default AvatarScene