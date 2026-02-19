'use client';

import React, { useState, useEffect } from 'react';
import { Eye } from '@phosphor-icons/react';

export function PeopleWatching() {
    // Initial random number between 3 and 6
    const [viewerCount, setViewerCount] = useState(3);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set initial count on client side to avoid hydration mismatch
        setViewerCount(Math.floor(Math.random() * (6 - 3 + 1) + 3));
        setIsVisible(true);

        const interval = setInterval(() => {
            setViewerCount(Math.floor(Math.random() * (6 - 3 + 1) + 3));
        }, 8000); // Update every 8 seconds

        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="flex items-center justify-center bg-[#2F4F4F] text-white px-6 py-3 rounded-lg w-fit transition-all duration-300 shadow-md mx-auto">
            <span className="text-sm tracking-wide">
                <span className="font-bold text-lg mr-1">{viewerCount}</span> personas están viendo este producto
            </span>
        </div>
    );
}
