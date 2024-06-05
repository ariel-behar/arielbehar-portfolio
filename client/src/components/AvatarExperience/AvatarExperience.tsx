
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