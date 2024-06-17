import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";

export function Plane ({ isRotating, ...props }) {
    const ref = useRef();
    const { animations, scene } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        if (isRotating) {
            actions["Take001"].play();
        } else {
            actions["Take001"].stop();
        }
    }, [actions, isRotating]);

    return (
        <mesh {...props} ref={ref}>
            model or scene
            <primitive object={scene} />
        </mesh>
    );
}