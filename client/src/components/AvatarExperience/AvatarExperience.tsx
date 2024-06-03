import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"


function AvatarExperience() {
    return (
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
    )
}

export default AvatarExperience