import { OrbitControls } from '@react-three/drei'
import {useControls} from 'leva'
import * as THREE from 'three'

import Avatar, { ActionName } from './Avatar/Avatar'

function Experience() {
	const {animation }= useControls({
		animation: {
			value: 'Crouch',
			options: ['Crouch', 'Idle', 'Wave']
		}
	})

	return (
		<>
			<OrbitControls />
			<group position-y={-1}>
				<Avatar animation={animation as ActionName}/>
			</group>

			<ambientLight intensity={4} />
		</>
	)
}

export default Experience