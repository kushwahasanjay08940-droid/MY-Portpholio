import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber"; //animation
// @react-three/drei → React Three Fiber ke helper components & hooks ka collection

import {
  Decal,         // 3D object ke upar image/sticker lagane ke liye (jaise logo on model)
  Float,         // object ko smooth floating animation dene ke liye (upar-neeche move + slight rotate)
  OrbitControls, // camera ko mouse se control karne ke liye (rotate, zoom, pan)
  Preload,       // saare 3D assets ko pehle se load karta hai (better performance)
  useTexture,    // image file ko texture me convert karta hai (3D material me use hota hai)
} from "@react-three/drei"; // ye library React Three Fiber ko easy banati hai

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>//smooth floating motion deta hai , Ye 3D object (mesh) ka closing tag hai
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}  //DPR = Device Pixel Ratio
      gl={{ preserveDrawingBuffer: true }} // canvas ka current frame save rakhna
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
