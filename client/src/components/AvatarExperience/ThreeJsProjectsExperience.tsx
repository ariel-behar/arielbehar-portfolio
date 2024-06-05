import { useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"

import Experience from "./Experience"
import { useInView } from "framer-motion";
import { Leva } from "leva";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { ActionName } from "./Avatar/Avatar";

function ThreeJsProjectsExperience() {
    const canvasRef = useRef(null);
    const isInView = useInView(canvasRef, { once: true })
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
                <Leva />
                <Canvas
                    ref={canvasRef}
                    camera={{
                        fov: 35,
                        near: 0.1,
                        far: 1000,
                        position: [1, 0.5, 4],
                    }}
                >
                    <Experience isInView={isInView} animationName={animationName} />
                </Canvas>
            </Box>
        </Stack>
    )
}

export default ThreeJsProjectsExperience