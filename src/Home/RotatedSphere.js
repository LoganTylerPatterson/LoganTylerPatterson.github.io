import { useFrame } from "@react-three/fiber"
import { useRef } from "react"


const RotatedSphere = (props) => {
    const sphere = useRef()

    useFrame((state, delta) => {
        sphere.current.rotation.x += (delta * (1 / 4))
        sphere.current.rotation.z += .25 * delta
    })

    return (
        <mesh ref={sphere}>
            <sphereGeometry scale={[2, 2, 2]} />
            <meshStandardMaterial wireframe={true} color={"black"} />
        </mesh>
    )
}

export default RotatedSphere