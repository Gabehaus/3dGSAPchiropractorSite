import React, { useRef, useState, useEffect } from "react"
import { useFrame } from "react-three-fiber"
import { useGLTF } from "@react-three/drei"

export default function Table({ colorPr }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("smallTable3.glb")
  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)
  // Set cursor
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  )
  // Animate model
  useFrame(state => {
    const t = state.clock.getElapsedTime()
    {
      /*group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
      group.current.rotation.x = Math.cos(t / 4) / 8
      group.current.rotation.y = Math.sin(t / 4) / 8
      group.current.position.y = (1 + Math.sin(t / 1.5)) / 6 */
    }
  })

  useEffect(() => console.log("test", colorPr))
  return (
    <group ref={group} dispose={null}>
      {" "}
      {/* erased {...props} */}
      <group rotation={[1.6, 0, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh
          material={materials["215,208,192"]}
          geometry={nodes.table_1.geometry}
        />
        <mesh
          name='mattress'
          material={materials["255,255,255"]}
          geometry={nodes.table_2.geometry}
          material-color={colorPr}
        />
        <mesh
          name='headRest'
          material={materials["255,255,255_1"]}
          geometry={nodes.table_3.geometry}
          material-color={"#242424"}
        />
        <mesh
          material={materials["25,25,25"]}
          geometry={nodes.table_4.geometry}
        />
        <mesh
          name='handlePlates'
          material={materials["163,170,172"]}
          geometry={nodes.table_5.geometry}
        />
        <mesh
          material={materials["255,255,255_2"]}
          geometry={nodes.table_6.geometry}
        />
        <mesh
          name='legs'
          material={materials["255,173,105"]}
          geometry={nodes.table_7.geometry}
        />
        <mesh
          material={materials["211,170,33"]}
          geometry={nodes.table_8.geometry}
        />
        <mesh
          material={materials["255,255,255_3"]}
          geometry={nodes.table_9.geometry}
        />
        <mesh
          material={materials["75,75,75"]}
          geometry={nodes.table_10.geometry}
        />
        <mesh
          name='plate'
          material={materials["198,193,188"]}
          geometry={nodes.table_11.geometry}
          material-color={"#bababa"}
        />
        <mesh
          material={materials["235,235,235"]}
          geometry={nodes.table_12.geometry}
        />
      </group>
    </group>
  )
}
