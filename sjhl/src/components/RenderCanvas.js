import React from "react";
import "./components.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* three js */
import { Suspense, useRef, useState } from 'react'
import { Canvas, useThree, useRender } from '@react-three/fiber'
import { useGLTF, Html, OrbitControls, Environment, ContactShadows } from '@react-three/drei'


export default function RenderCanvas(){
    const ref = useRef()
    return (
      <Canvas dpr={[1, 2]} camera={{ position: [0, 2, 6], fov: 30, rotation: [0, (-65*Math.PI)/180, 0]}}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Model position={[-0.15, 0.4, 3.5]} />
          <Environment preset="city" />
          <ContactShadows scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.8} frames={1} />
        </Suspense>
        <OrbitControls ref={ref} enableZoom={false}/>
      </Canvas>
    )
}

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('./images/test.gltf')
    return ( 
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.item.geometry} material={materials.item} position={[-1.77, 1.48, 2.17]} rotation={[Math.PI / 2, 0, 0]} scale={[0.45, 0.41, 1.45]} />
        <mesh geometry={nodes.grid.geometry} material={materials.grid} position={[0, 0, 0.56]} scale={1.32} />
        <mesh geometry={nodes.Cube.geometry} material={materials.Cube} position={[-0.05, 0.38, 0.84]} rotation={[0, -0.16, 0]} scale={0.37} />
        <group position={[0.07, 0, 0]} rotation={[0, -0.16, 0]}>
          <mesh geometry={nodes.Cube002.geometry} material={materials.Hair} />
          <mesh geometry={nodes.Cube002_1.geometry} material={materials.Face} />
          <mesh geometry={nodes.Cube002_2.geometry} material={materials.Body} />
        </group>
      </group>
    )
  }


// Let's make the marker into a component so that we can abstract some shared logic
function Marker({ children, ...props }) {
  // This holds the local occluded state
  const [occluded, occlude] = useState()
  return (
    <Html
      // 3D-transform contents
      transform
      // Hide contents "behind" other meshes
      occlude
      // Tells us when contents are occluded (or not)
      onOcclude={occlude}
      // We just interpolate the visible state into css opacity and transforms
      style={{ transition: 'all 0.2s', opacity: occluded ? 0 : 1, transform: `scale(${occluded ? 0.25 : 1})` }}
      {...props}>
      {children}
    </Html>
  )
}

useGLTF.preload('./../../images/test.gltf')
