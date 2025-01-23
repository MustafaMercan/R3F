import React, { useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const CameraController = () => {
    const { camera } = useThree();
    const [section, setSection] = useState(0); // Hangi section'da olduğumuzu tutar

    // Kameranın pozisyon alacağı noktalar
    const positions = [
        [0, 5, 10], // 1. section
        [-10, 10, 20], // 2. section
        [0, 30, 60], // 3. section
    ];

    useEffect(() => {
        const handleScroll = (e) => {
            const direction = e.deltaY > 0 ? 1 : -1; // Scroll yönü
            setSection((prev) => {
                // Section'ı 0 ile 2 arasında sınırlıyoruz
                const nextSection = Math.min(Math.max(prev + direction, 0), positions.length - 1);
                return nextSection;
            });
        };

        window.addEventListener('wheel', handleScroll); // Scroll olayını dinle
        return () => window.removeEventListener('wheel', handleScroll); // Temizleme
    }, [positions.length]);

    // Kamerayı smooth şekilde hareket ettir
    useFrame(() => {
        const [x, y, z] = positions[section];
        camera.position.lerp({ x, y, z }, 0.1); // Kamera pozisyonunu smooth geçişle günceller
        camera.lookAt(0, 0, 0); // Kamerayı sahne merkezine çevirir
    });

    return null; // Görünür bir şey dönmüyor
};

export default CameraController;
