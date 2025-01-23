import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { SpotLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

const Spotlight = () => {
    const { camera, scene } = useThree();
    const lightRef = useRef(); // Spot ışığın referansı

    // Spot ışığın sahne merkezini hedeflemesi
    useFrame(() => {
        if (lightRef.current) {
            lightRef.current.position.copy(camera.position); // Spot ışığın pozisyonunu kameraya sabitliyoruz
            lightRef.current.target.position.set(0, 1, 0); // Işığın hedefini sahne merkezine ayarlıyoruz
            lightRef.current.target.updateMatrixWorld(); // Hedefi güncelliyoruz
        }
    });

    // SpotLightHelper ile spot ışığın durumunu görselleştir
    useHelper(lightRef, SpotLightHelper, "cyan");

    return (
        <>
            <spotLight
                ref={lightRef}
                penumbra={1.5}
                distance={100}
                intensity={1000} 
                angle={500} 
            />
        </>
    );
};

export default Spotlight;
