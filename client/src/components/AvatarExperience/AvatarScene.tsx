import { useRef, useState } from "react"
import { v4 as uuid } from 'uuid'
import { useInView, motion } from "framer-motion";

import { ActionName, animationsNames } from "./Avatar/Avatar";

import AvatarCanvas from "./AvatarCanvas";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function AvatarScene() {
    const [animationName, setAnimationName] = useState<ActionName | ''>('')
    const canvasContainerRef = useRef(null);
    const isInView = useInView(canvasContainerRef, { once: true })

    return (
        <Stack height='100%'>
            <Stack width='100%'>
                <Stack
                    direction="row"
                    width='100%'
                    justifyContent='center'
                    gap={2}
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.7 }}
                >
                    {
                        animationsNames.slice(2).map((name) => {
                            return (
                                <Button
                                    key={uuid()}
                                    onClick={() => setAnimationName(name)}
                                    size='large'
                                    style={{
                                        fontWeight: 'bold',
                                    }}
                                    variant='text'
                                >
                                    {name}
                                </Button>
                            )
                        })
                    }
                </Stack>
            </Stack>

            <Box flexGrow={1} ref={canvasContainerRef}>
                <AvatarCanvas animationName={animationName} isInView={isInView} />
            </Box>

        </Stack>
    )
}

export default AvatarScene