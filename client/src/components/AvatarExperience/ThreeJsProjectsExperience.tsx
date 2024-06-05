import { StrictMode, useRef } from "react"
import { Canvas } from "@react-three/fiber"

import Experience from "./Experience"
import { useInView } from "framer-motion";

function ThreeJsProjectsExperience() {
    const canvasRef = useRef(null);
    const isInView = useInView(canvasRef, { once: true })

    return (
        <StrictMode>
            <Canvas
                ref={canvasRef}
                camera={{
                    fov: 30,
                    near: 0.1,
                    far: 1000,
                    position: [0, 1.5, 4]
                }}
            >
                {/* <color args={['#ff0000']} attach="background" /> */}
                <Experience isInView={isInView} />
            </Canvas>
        </StrictMode>
    )
}

export default ThreeJsProjectsExperience