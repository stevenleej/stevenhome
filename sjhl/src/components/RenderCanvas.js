import React, {forwardRef} from "react";
import "./components.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* three js */
import { Suspense, useRef, useState, useLayoutEffect } from 'react'
import { Canvas, useThree, useRender } from '@react-three/fiber'
import { useGLTF, Html, OrbitControls, Environment, ContactShadows, Sky } from '@react-three/drei'
import { LayerMaterial, Depth, Noise } from 'lamina'
import * as THREE from 'three'

/* assets */
import viewableModel from './../images/rc2.gltf'
import charTexture from './../images/traveler.png'
import goggleTexture from './../images/goggles.png'
import marsTexture from './../images/colorMars.png'

export default function RenderCanvas(){
    const ref = useRef()
    return (
      <div className="RenderWindow">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 65], fov: 30, rotation: [0, 0, 0]} }>
          <color attach="background" args={['#ffffff']} />
          <ambientLight intensity={0.4} />
          <Sky scale={1000} sunPosition={[2, 30, 10]} />    
          <Suspense fallback={null}>
            <Gradient/>
            <Model position={[10, -10, -5]} rotation={[0, 145, 0]}/>
            <gridHelper args={[1000, 200, '#020202', '#151515']} position={[0, -8, 0]} />
          </Suspense>
          <OrbitControls
          makeDefault
          enableZoom={true}
          enablePan={true}
          zoomSpeed={0.3}
        />
        </Canvas>
      </div>
    )
}

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF(viewableModel)
    return ( 
      <group ref={group} {...props} dispose={null}>
      <group position={[0, 9.21, -1.07]}>
        <primitive object={nodes.spine1} />
        <primitive object={nodes.hipL} />
        <primitive object={nodes.hipR} />
        <skinnedMesh geometry={nodes.Plane001.geometry} material={materials['CVO.001']} skeleton={nodes.Plane001.skeleton} />
        <skinnedMesh geometry={nodes.Plane001_1.geometry} material={materials.CV4} skeleton={nodes.Plane001_1.skeleton} />
        <skinnedMesh geometry={nodes.Plane001_2.geometry} material={materials['CVO.002']} skeleton={nodes.Plane001_2.skeleton} />
      </group>
      <group position={[2.36, 9.75, 15.65]} rotation={[-2.36, 1.21, 2.25]} scale={3.59}>
        <mesh geometry={nodes.Torus003_1.geometry} material={materials['CV5.001']} />
        <mesh geometry={nodes.Torus003_2.geometry} material={materials['CVO.003']} />
        <mesh geometry={nodes.Torus003_3.geometry} material={materials.CV5} />
        <mesh geometry={nodes.Torus003_4.geometry} material={materials['CV4.001']} />
      </group>
      <group position={[-43, 15, 15.65]} rotation={[(1*Math.PI)/2, Math.PI , (1*Math.PI) / 3]}>
          <Marker rotation={[0, Math.PI / 2, Math.PI / 2]}>
            <div className="GameTitle" style={{ position: 'absolute', fontSize: 64, letterSpacing: 0.8}}> PROJECT MARS</div>
            <FontAwesomeIcon icon="fa-brands fa-unity"/>
          </Marker>
        </group>
    </group>
    )
  }



function Marker({ children, ...props }) {
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

function Gradient() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="#e9be34" colorA="#a4ecf9" alpha={1} mode="normal" near={130} far={300} origin={[100, 100, -100]} />
        <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} />
      </LayerMaterial>
    </mesh>
  )
}



useGLTF.preload(viewableModel)
