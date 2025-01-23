import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import './App.css'
import { SphereGeometry } from 'three';


const Cube = ({ position, size, color }) => {


  const ref = useRef();


  useFrame((state, delta) => {

    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;

  })


  return (

    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>

  )
}

const Torus = ({ position, size, color }) => {

  return (
    <mesh
      position={position}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => (setIsHovered(false))}
      >
      <torusGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "orange" : "lightblue"} />
    </mesh>
  )
}


const Sphere = ({ position, size, color }) => {

  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);


  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.5
    // ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * speed;
  })

  return (
    <mesh 
      position={position} 
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(),setIsHovered(true))}
      onPointerLeave={() => (setIsHovered(false))}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "lightblue" : "orange"} wireframe />
    </mesh>
  )
}


const App = () => {

  return (
    <Canvas>
      {/* <directionalLight position={[0, 0, 2]} /> */}
      <ambientLight intensity={1} />

      {/* <Cube position={[0,0,0]} size={[1,1,1]} color={'orange'}/> */}

      <Sphere size={[1]} position={[0, 0, 0]} color={'orange'} />



      {/* <Torus size={[1]} position={[2,0,0]} color={'pink'}/> */}


      {/* <Cube position={[1,0,0]} color={"green"} size={[1,1,1]} />


      <Cube position={[-1, 0, 0]} color={"hotpink"} size={[1,1,1]}/>

      <Cube position={[-1, 2, 0]} color={"blue"} size={[1,1,1]}/>


      <Cube position={[1, 2, 0]} color={"yellow"} size={[1,1,1]}/>
 */}



    </Canvas>
  )
}

export default App
