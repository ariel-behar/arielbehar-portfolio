import * as THREE from 'three'
import { useGLTF } from "@react-three/drei"

interface Props {
	isInView?: boolean;
	position?: THREE.Vector3
    rotation?: THREE.Euler
    scale?: THREE.Vector3
}

function Harley({
    isInView,
    position,
    rotation,
    scale,
    ...props
}: Props & JSX.IntrinsicElements['group']) {
    const { nodes, scene }: any = useGLTF('./models/harley/scene.gltf')

    return (
        <group position={position} rotation={rotation} scale={scale} {...props}>
            <primitive object={scene} {...props} />
        </group>
    );
}

export default Harley;
