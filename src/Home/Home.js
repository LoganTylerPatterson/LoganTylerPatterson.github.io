import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowCircleDown, faArrowCircleLeft, faArrowCircleRight, faArrowCircleUp, faCoffee, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import RotatedSphere from './Home/RotatedSphere';

function Home() {
    const sphere = useRef()
    const [iconName, setIconName] = useState(faArrowCircleUp)
    const [isFabClicked, setIsFabClicked] = useState(false)

    function fabClicked() {
        if (iconName == faArrowCircleDown) setIconName(faArrowCircleUp)
        else setIconName(faArrowCircleDown)

        setIsFabClicked(!isFabClicked)
    }

    return (
        <div className="container">

            {/* Header */}

            <div className="big_name h25">
                <p>Logan</p>
                <p>Patterson<span className="blinker">|</span></p>
            </div>

            {/* Particles */}

            <div className="particles h33">
                <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
                    <ambientLight intensity={0.5} />
                    <RotatedSphere />
                    <OrbitControls />
                </Canvas>
            </div>

            {/* Nav buttons mobile */}

            <div className={`fab ${isFabClicked ? 'clicked' : ''}`} onClick={fabClicked}>
                <FontAwesomeIcon icon={iconName} />
                <div className="fab-option">
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="fab-option">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="fab-option">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>

        </div>
    );
}

export default Home;
