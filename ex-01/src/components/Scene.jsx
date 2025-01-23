import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import CameraController from './CameraController'
import Cube from './Cube'
import Floor from './Floor'
import Spotlight from './Spotlight'
const Scene = () => {
    return (
        <Canvas shadows>
            <Cube size={[2, 2, 2, 10, 10, 10]} position={[0, 1, 0]} color={'red'} />
            <Floor />
            <Spotlight/>
            <axesHelper args={[100]} />
            <CameraController/>
            {/* <OrbitControls /> */}
        </Canvas>
    )
}

export default Scene
