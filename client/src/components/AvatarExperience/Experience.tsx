import { Environment, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'

import Avatar from './Avatar/Avatar'
import Harley from './Harley/Harley'

interface Props {
	isInView: boolean
}

function Experience({
	isInView
}: Props) {
	return (
		<PresentationControls
			global
			rotation={[0.13, 0.1, 0]}
			polar={[0, 0]}
			azimuth={[- 0.75, 0.75]}
		// config={{ mass: 2, tension: 400 }}
		// snap={{ mass: 4, tension: 400 }}
		>
			<Avatar
				isInView={isInView}
				position={new THREE.Vector3(0.4, -1, -0.6)}
			/>
			<Harley
				position={new THREE.Vector3(-0.6, -0.5, -0.6)}
				rotation={new THREE.Euler(0, Math.PI - 0.8, 0)}
				scale={new THREE.Vector3(1)}
			/>

			{/* <ambientLight intensity={4} /> */}

			<Environment preset="warehouse" environmentIntensity={1.5} />
		</PresentationControls>
	)
}

export default Experience