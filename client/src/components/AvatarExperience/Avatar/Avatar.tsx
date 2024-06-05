/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/650745a68a5f0e10f77629cd.glb --types 
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'
import { useControls } from 'leva'

interface GLTFAction extends THREE.AnimationClip {
	name: ActionName;
}

type GLTFResult = GLTF & {
	nodes: {
		Wolf3D_Hair: THREE.SkinnedMesh
		Wolf3D_Outfit_Top: THREE.SkinnedMesh
		Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
		Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
		Wolf3D_Body: THREE.SkinnedMesh
		EyeLeft: THREE.SkinnedMesh
		EyeRight: THREE.SkinnedMesh
		Wolf3D_Head: THREE.SkinnedMesh
		Wolf3D_Teeth: THREE.SkinnedMesh
		Hips: THREE.Bone
	}
	materials: {
		Wolf3D_Hair: THREE.MeshStandardMaterial
		Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
		Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
		Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
		Wolf3D_Body: THREE.MeshStandardMaterial
		Wolf3D_Eye: THREE.MeshStandardMaterial
		Wolf3D_Skin: THREE.MeshStandardMaterial
		Wolf3D_Teeth: THREE.MeshStandardMaterial
	}
	animations: GLTFAction[]
}

export type ActionName = 'Crouch' | 'Idle' | 'Wave' | 'Salute' | "Dance"

export const animationsNames: ActionName[] = ['Crouch', 'Idle', 'Wave', 'Salute', "Dance"];

interface Props {
	isInView: boolean,
	animationName?: ActionName | '',
	position?: THREE.Vector3,
	rotation?: THREE.Euler,
	scale?: THREE.Vector3,
}

export function Avatar({
	isInView,
	animationName = 'Idle',
	...props
}: Props & JSX.IntrinsicElements['group']) {
	const { scene } = useGLTF('models/avatar/avatar.glb')
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
	const { nodes, materials } = useGraph(clone) as GLTFResult

	const avatarGroupRef = useRef<THREE.Group>()

	const { headFollow, cursorFollow } = useControls({
		headFollow: false,
		cursorFollow: false
	})

	const { animations: waving } = useFBX("animations/avatar/waving.fbx")
	const { animations: idle } = useFBX("animations/avatar/breathing-idle.fbx")
	const { animations: crouchToStand } = useFBX("animations/avatar/crouch-to-stand.fbx")
	const { animations: salute } = useFBX("animations/avatar/salute.fbx")
	const { animations: dance } = useFBX("animations/avatar/wave-hip-hop-dance.fbx")

	waving[0].name = 'Wave'
	idle[0].name = 'Idle'
	crouchToStand[0].name = 'Crouch'
	salute[0].name = 'Salute'
	dance[0].name = "Dance"

	const { actions } = useAnimations([
		crouchToStand[0],
		salute[0],
		idle[0],
		waving[0],
		dance[0]
	], avatarGroupRef)

	useEffect(() => {
		if (!animationName) {
			actions["Crouch"].play()

			setTimeout(() => {
				actions["Salute"].crossFadeFrom(actions["Crouch"], 0.5, true).play()
			}, actions["Crouch"].getClip().duration * 1000 - 500);

			setTimeout(() => {
				actions["Idle"].crossFadeFrom(actions["Salute"], 0.5, true).play()

			}, (actions["Crouch"].getClip().duration * 1000 - 500) + (actions["Salute"].getClip().duration * 1000 - 500));

		} else {
			const action = actions[animationName]

			action.reset().fadeIn(0.5).play()

			setTimeout(() => {
				actions["Idle"].crossFadeFrom(action, 0.5, true).play()

			}, action.getClip().duration * 1000);

			return () => {
				action.fadeOut(0.5)
			}
		}

	}, [isInView, animationName])

	useFrame(state => {
		if (headFollow) {
			avatarGroupRef.current.getObjectByName("Head").lookAt(state.camera.position)
		}
		if (cursorFollow) {
			const target = new THREE.Vector3(state.pointer.x, state.pointer.y, 1)

			avatarGroupRef.current.getObjectByName("Head").lookAt(target)
			avatarGroupRef.current.getObjectByName("Spine2").lookAt(target)
		}
	})

	return (
		<group {...props} dispose={null} ref={avatarGroupRef}>
			<primitive object={nodes.Hips} />
			<skinnedMesh
				geometry={nodes.Wolf3D_Hair.geometry}
				material={materials.Wolf3D_Hair}
				skeleton={nodes.Wolf3D_Hair.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Top.geometry}
				material={materials.Wolf3D_Outfit_Top}
				skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
				material={materials.Wolf3D_Outfit_Bottom}
				skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
				material={materials.Wolf3D_Outfit_Footwear}
				skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Body.geometry}
				material={materials.Wolf3D_Body}
				skeleton={nodes.Wolf3D_Body.skeleton}
			/>
			<skinnedMesh name="EyeLeft"
				geometry={nodes.EyeLeft.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeLeft.skeleton}
				morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
				morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
			/>
			<skinnedMesh name="EyeRight"
				geometry={nodes.EyeRight.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeRight.skeleton}
				morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
				morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
			/>
			<skinnedMesh name="Wolf3D_Head"
				geometry={nodes.Wolf3D_Head.geometry}
				material={materials.Wolf3D_Skin}
				skeleton={nodes.Wolf3D_Head.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
			/>
			<skinnedMesh name="Wolf3D_Teeth"
				geometry={nodes.Wolf3D_Teeth.geometry}
				material={materials.Wolf3D_Teeth}
				skeleton={nodes.Wolf3D_Teeth.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
			/>
		</group>
	)
}

export default Avatar;

useGLTF.preload('models/avatar/avatar.glb')
