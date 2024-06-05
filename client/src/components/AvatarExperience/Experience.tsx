// import { OrbitControls } from '@react-three/drei'
import { PresentationControls } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'

import Avatar, { ActionName } from './Avatar/Avatar'

function Experience() {
	const { animation } = useControls({
		animation: {
			value: 'Idle',
			options: ['Crouch', 'Idle', 'Wave']
		}
	})

	return (
		<>
			<PresentationControls
				global
				rotation={[0.13, 0.1, 0]}
				polar={[0, 0]}
				azimuth={[- 1.5, 0.25]}
				// config={{ mass: 2, tension: 400 }}
				// snap={{ mass: 4, tension: 400 }}
			>
				<group position-y={-1}>
					<Avatar animation={animation as ActionName} />
				</group>

				<ambientLight intensity={4} />
			</PresentationControls>
		</>
	)
}

export default Experience