import { StrictMode } from "react"
import { Canvas } from "@react-three/fiber"

import Experience from "./Experience"

function ThreeJsProjectsExperience() {
    return (
        <StrictMode>
            <Canvas
                camera={{
                    fov: 30,
                    near: 0.1,
                    far: 1000,
                    position: [0, 1.5, 4]
                }}
            >
                <color args={['#ff0000']} attach="background" />
                <Experience />
            </Canvas>
        </StrictMode>
    )
}

export default ThreeJsProjectsExperience