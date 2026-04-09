import { Html, useProgress } from "@react-three/drei";
//Html ka use hota hai 3D scene ke andar normal HTML dikhane ke liye
//Ye ek hook hai jo loading progress batata hai (0% → 100%)
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}% //Ye number ko 2 decimal places tak round karta hai
      </p>
    </Html>
  );
};

export default CanvasLoader;
