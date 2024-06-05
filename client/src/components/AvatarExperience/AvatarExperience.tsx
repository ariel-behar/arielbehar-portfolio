
import * as THREE from 'three'
import { Suspense } from 'react'

import { Environment } from '@react-three/drei'

import Avatar, { ActionName } from './Avatar/Avatar'
import Harley from './Harley/Harley'

interface Props {
	isInView: boolean,
	animationName: ActionName | '',
}

function AvatarExperience({
	isInView,
	animationName
}: Props) {
	return (
		<>
			<Suspense fallback={null}>
				<Avatar
					isInView={isInView}
					position={new THREE.Vector3(0.5, -1, -0.6)}
					animationName={animationName}
				/>
			</Suspense>

			<Suspense fallback={null}>
				<Harley
					position={new THREE.Vector3(-0.3, -0.5, -0.7)}
					rotation={new THREE.Euler(0, Math.PI - 0.5, 0, 'XYZ')}
					scale={new THREE.Vector3(1, 1, 1)}
				/>
			</Suspense>
			
			<Environment preset="warehouse" />
		</>
	)
}

export default AvatarExperience