import {
  ContactShadows,
  Environment,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Leva } from "leva";
import { Model } from "./Model";

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={40} />
      <Environment preset="apartment" />
      <Model />
      <ContactShadows scale={[20, 20]} resolution={512} blur={2} />
      <Environment background preset="dawn" blur={0.8} />

      <Text
        font={"/demo-2023-dissolve-shader/font.ttf"}
        position={[0, 2, 0]}
        scale={[2, 4, 2]}
        fillOpacity={0.75}
        color="white"
      >
        DISSOLVE
      </Text>
    </>
  );
}

export default function App() {
  return (
    <>
      <Canvas shadows>
        <fog attach="fog" args={["black", 15, 21.5]} />
        <Scene />

        <EffectComposer>
          <Bloom luminanceThreshold={2} mipmapBlur />
        </EffectComposer>
      </Canvas>

      <Leva
        collapsed
        titleBar={{
          title: "Options",
        }}
      />
    </>
  );
}
