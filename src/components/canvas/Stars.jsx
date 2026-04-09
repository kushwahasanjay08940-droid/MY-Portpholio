// React hooks import
import { useState, useRef, Suspense } from "react"; 
// Canvas & animation hook (3D rendering)
import { Canvas, useFrame } from "@react-three/fiber"; 
// Points (stars), material & preload
import { Points, PointMaterial, Preload } from "@react-three/drei"; 
// Random positions generate karne ke liye
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef(); // 3D object ko access karne ke liye reference

  // 5000 random points (stars) sphere ke andar generate kar raha hai
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Har frame me rotation update (animation)
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10; // x-axis rotate
    ref.current.rotation.y -= delta / 15; // y-axis rotate
  });

  return (
    // Group → sab objects ek saath rotate honge
    <group rotation={[0, 0, Math.PI / 4]}>
      
      {/* Points → stars create kar raha hai */}
      <Points
        ref={ref}              // reference attach
        positions={sphere}     // star positions
        stride={3}             // 3 values = x,y,z
        frustumCulled          // optimization (screen ke bahar hide)
        {...props}
      >
        {/* Star ka look define kar raha hai */}
        <PointMaterial
          transparent          // transparency allow
          color='#f272c8'      // pink color
          size={0.002}         // star size
          sizeAttenuation={true} // distance ke hisaab se size change
          depthWrite={false}   // overlap issue avoid
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    // Full screen background div
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        
        {/* Suspense → loading handle karta hai */}
        <Suspense fallback={null}>
          <Stars /> {/* Stars component render */}
        </Suspense>

        {/* Sare assets preload (performance improve) */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas; // component export