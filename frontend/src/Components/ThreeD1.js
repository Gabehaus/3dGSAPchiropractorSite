import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls
} from "@react-three/drei"
import Table from "./Table"

// Auto-generated by gltfjsx

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z =
      clock.getElapsedTime() < 2.5 && camera.position.z > 0.5
        ? 1 + Math.cos(clock.getElapsedTime()) * 2
        : 0.5
  })

  return null
}

export default function ThreeD1() {
  const [color, setColor] = useState("grey")

  const handleClick = colorProp => {
    setColor(colorProp)
    console.log(color)
  }
  return (
    <div
      style={{
        position: "relative",
        width: "30vw",
        height: "50vh",
        margin: "auto"
      }}
    >
      <Canvas
        concurrent
        pixelRatio={[1, 1.5]}
        camera={{ position: [-0.7, 0.3, 0.5] }}
        style={{
          width: "100%",
          height: "100%",
          background: "#fafafa"
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.3}
          angle={0.3}
          penumbra={1}
          position={[5, 25, 20]}
          shadow-bias={-0.0001}
        />
        <Suspense fallback={null}>
          <Table colorPr={color} />
          <Environment files='royal_esplanade_1k.hdr' />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.29, 0]}
            opacity={0.9}
            width={10}
            height={10}
            blur={2}
            far={1}
          />
          <OrbitControls
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 1.7}
            enableZoom={true}
            enablePan={true}
          />
        </Suspense>
        <Dolly />
      </Canvas>
      <div
        style={{
          width: "100%",
          height: "20%",
          background: "transparent",
          position: "absolute",
          top: "5vh",
          left: "0",
          display: "flex",
          justifyContent: "space-evenly",
          paddingRight: "0",
          zIndex: "1000"
        }}
      >
        <p onClick={() => handleClick("grey")}>DARK BLUE</p>
        <p onClick={() => handleClick("white")}>LIGHT BLUE</p>
        <p onClick={() => handleClick("#c75b62")}>MAROON</p>
      </div>
    </div>
  )
}
