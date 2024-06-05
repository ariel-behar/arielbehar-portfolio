import { PresentationControls } from '@react-three/drei'

import Avatar from './Avatar/Avatar'

function Experience() {

	return (
		<PresentationControls
			global
			rotation={[0.13, 0.1, 0]}
			polar={[0, 0]}
			azimuth={[- 0.75, 0.75]}
		// config={{ mass: 2, tension: 400 }}
		// snap={{ mass: 4, tension: 400 }}
		>
			<Avatar />

			<ambientLight intensity={4} />
			
		</PresentationControls>
	)
}

export default Experience