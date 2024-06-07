import { Leva } from "leva";

import { Canvas } from "@react-three/fiber"

import { ActionName } from "./Avatar/Avatar";

import AvatarExperience from "./AvatarExperience"

interface Props {
	animationName: ActionName | '',
    isInView: boolean
}

function AvatarCanvas({
    animationName,
    isInView
}: Props) {
    return (
        <>
            <Leva hidden/>
            <Canvas
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