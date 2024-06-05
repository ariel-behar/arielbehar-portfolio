import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { StrictMode } from "react"


function AvatarExperience() {
    return (
        <StrictMode>
            <Canvas
                camera={{
                    fov: 30,
                    near: 0.1,
                    far: 1000,
                    position: [0, 1, 4]
                }}

            >

                <Experience />
            </Canvas>
        </StrictMode>
    )
}

export default AvatarExperience