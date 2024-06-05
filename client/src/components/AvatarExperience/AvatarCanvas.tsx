import { useRef } from "react";
import { useInView } from "framer-motion";
import { Leva } from "leva";

import { Canvas } from "@react-three/fiber"

import { ActionName } from "./Avatar/Avatar";

import AvatarExperience from "./AvatarExperience"

interface Props {
	animationName: ActionName | '',
}

function AvatarCanvas({
    animationName
}: Props) {
    const canvasRef = useRef(null);
    const isInView = useInView(canvasRef, { once: true })

    return (
        <>
            <Leva />
            <Canvas
                ref={canvasRef}
                camera={{
                    fov: 35,
                    near: 0.1,
                    far: 1000,
                    position: [4, 0.5, 7],
                }}
            >
                <AvatarExperience isInView={isInView} animationName={animationName} />
            </Canvas>
        </>
    )
}

export default AvatarCanvas