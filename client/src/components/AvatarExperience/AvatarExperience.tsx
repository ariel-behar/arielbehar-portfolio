
import { Suspense, useEffect } from 'react'

import { Environment } from '@react-three/drei'

import Avatar, { ActionName } from './Avatar/Avatar'
import Harley from './Harley/Harley'
import { useFrame } from '@react-three/fiber'

interface Props {
	isInView: boolean,
	animationName: ActionName | '',
}

function AvatarExperience({
	isInView,
	animationName
}: Props) {

	useFrame((state, delta) => {
		const angle = state.clock.elapsedTime
		// state.camera.position.x = Math.sin(angle)
		// state.camera.position.z = Math.cos(angle)
		state.camera.lookAt(0, 0, 0)
		// state.camera.position.z -= 0.01

		if(state.camera.position.z > 3.5) {
			state.camera.position.z -= 0.02
		} 

		if(state.camera.position.x > 1) {
			state.camera.position.x -= 0.02
		}

	})


	return (
		<>
			<Suspense fallback={null}>
				<group position={[0.5, -1, -0.6]}>
					<Avatar
						isInView={isInView}
						animationName={animationName}
					/>
				</group>
			</Suspense>

			<Suspense fallback={null}>
				<group
					position={[-0.3, -0.5, -0.7]}
					rotation={[0, Math.PI - 0.5, 0, 'XYZ']}
					scale={[1, 1, 1]}
				>
					<Harley />
				</group>
			</Suspense>

			<Environment preset="warehouse" />
		</>
	)
}

export default AvatarExperience