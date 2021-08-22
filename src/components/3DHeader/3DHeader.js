import { render } from 'react-dom'
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import * as meshline from 'threejs-meshline'
import { extend, Canvas, useFrame, useThree } from '@react-three/fiber'
import './3DHeader.css'
import HeaderV2 from '../HeaderV2/HeaderV2'

extend(meshline)

function Fatline({ curve, width, color, speed }) {
  const material = useRef()
  useFrame(() => (material.current.uniforms.dashOffset.value -= speed))
  return (
    <mesh>
      <meshLine attach="geometry" vertices={curve} />
      <meshLineMaterial attach="material" ref={material} transparent depthTest={false} lineWidth={width} color={color} dashArray={0.1} dashRatio={0.9} />
    </mesh>
  )
}

function Lines({ count, colors }) {
  const lines = useMemo(
    () =>
      new Array(count).fill().map(() => {
        const pos = new THREE.Vector3(10 - Math.random() * 20, 10 - Math.random() * 20, 10 - Math.random() * 20)
        const points = new Array(30).fill().map(() => pos.add(new THREE.Vector3(4 - Math.random() * 8, 4 - Math.random() * 8, 2 - Math.random() * 4)).clone())
        const curve = new THREE.CatmullRomCurve3(points).getPoints(1000)
        return {
          color: colors[parseInt(colors.length * Math.random())],
          width: 0.05, //Math.max(0.1, 0.5 * Math.random())
          speed: Math.max(0.0001, 0.00003 * Math.random()),
          curve: curve
        }
      }),
    [colors, count]
  )
  return lines.map((props, index) => <Fatline key={index} {...props} />)
}

function Rig({ mouse }) {
  const { camera, viewport } = useThree()
  useFrame((state) => {
    camera.position.x += (state.mouse.x * viewport.width - camera.position.x) * 0.05
    camera.position.y += (-state.mouse.y * viewport.height - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })
  return null
}

function ThreeHeader() {
  return (
    <div className = "ThreeHeader">

      <Canvas linear camera={{ position: [0, 0, 10], fov: 25 }} >
        <color attach="background" args={'#7B9EA8'} />
        <Lines count={130} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#EE786E']} />
        <Rig />
      </Canvas>

      <span className="header">Hi, My name is Ries</span>

      <div className="navbar">
        <HeaderV2 />
      </div>


    </div>
  )
}

export default ThreeHeader;
