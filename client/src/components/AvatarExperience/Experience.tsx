import { Environment, PresentationControls } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'

import Avatar from './Avatar/Avatar'
import Harley from './Harley/Harley'

interface Props {
	isInView: boolean
}

function Experience({
	isInView
}: Props) {
	const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('environment map', {
		envMapIntensity: { value: 1.3, min: 0, max: 12 },
		envMapHeight: { value: 9, min: 0, max: 100 },
		envMapRadius: { value: 48, min: 10, max: 1000 },
		envMapScale: { value: 6, min: 5, max: 1000 }
	})

	return (
		<PresentationControls
			global
			rotation={[0.13, 0.1, 0]}
			polar={[0, 0]}
			azimuth={[- 0.35, 0.35]}
			config={{ mass: 5, tension: 400 }}
		// snap={{ mass: 4, tension: 400 }}
		>
			<Avatar
				isInView={isInView}
				position={new THREE.Vector3(0.5, -1, -0.6)}
			/>
			<Harley
				position={new THREE.Vector3(-0.3, -0.5, -0.7)}
				rotation={new THREE.Euler(0, Math.PI - 0.5, 0, 'XYZ')}
				scale={new THREE.Vector3(1, 1, 1)}
			/>

			{/* <ambientLight intensity={4} /> */}

			<Environment preset="warehouse"
				ground={{
					height: envMapHeight,
					scale: envMapScale,
					radius: envMapRadius
				}} environmentIntensity={envMapIntensity} />
		</PresentationControls>
	)
}

export default Experience