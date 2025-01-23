import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const Cube = ({size,position,color}) => {

  const ref = useRef();

  // useFrame((state,delta) => {
    
  //   ref.current.rotation.x += delta * 0.5
  //   ref.current.rotation.y += delta * 0.5

  // });

  return (
    <mesh position={position} ref={ref} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color}/>
      
    </mesh>
  )
}

export default Cube
