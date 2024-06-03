import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Avatar from './Avatar/Avatar'

function Experience() {
	return (
		<>
			<OrbitControls />
			<group position-y={-1}>
				<Avatar />
			</group>

			<ambientLight intensity={4} />
		</>
	)
}

export default Experience