import React from 'react'

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2,0,0]} position={[0,0,0]}>

        <planeGeometry args={[100,100]}/>
        <meshStandardMaterial color='lightgray'/>
      
    </mesh>
  )
}

export default Floor
