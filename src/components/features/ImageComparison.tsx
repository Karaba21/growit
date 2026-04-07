"use client";

import { useState, useRef, useEffect } from "react";


export function ImageComparison() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMove = (clientX: number) => {
            if (!isDragging || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
            setSliderPosition(percent);
        };

        const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
        const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
        const onMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
            window.addEventListener("touchmove", onTouchMove, { passive: false });
            window.addEventListener("touchend", onMouseUp);
        } else {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onMouseUp);
        };
    }, [isDragging]);

    const handleInteractionStart = (clientX: number) => {
        setIsDragging(true);
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
            setSliderPosition(percent);
        }
    };

    return (
        <section className="pt-4 pb-8 md:pt-4 md:pb-8 bg-white md:bg-surface border-y border-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

                    {/* Text Section (Left Column) */}
                    <div className="text-center md:text-center order-2 md:order-1 flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight tracking-wide">
                            NO necesitás saber de plantas
                        </h2>
                        <p className="text-body text-base md:text-lg mb-8 max-w-md mx-auto">
                            La huerta se mantiene <strong>sola.</strong> El riego y la luz son automaticos. Vos solo cosechás cuando vas a cocinar!
                        </p>
                        <a
                            href="/catalogo?category=huertas"
                            className="inline-block py-4 px-8 bg-primary hover:bg-[#1a332e] text-white font-bold rounded-lg transition-colors uppercase tracking-wider shadow-sm"
                        >
                            Empeza de 0 hoy
                        </a>
                    </div>

                    {/* Image Comparison Section (Right Column) */}
                    <div className="order-1 md:order-2">
                        <div
                            ref={containerRef}
                            className="relative w-full aspect-[4/5] bg-[#f8f9fa] overflow-hidden cursor-ew-resize select-none shadow-xl"
                            onMouseDown={(e) => handleInteractionStart(e.clientX)}
                            onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
                        >
                            {/* Base Image (Con plantas - Right Side) */}
                            <div className="absolute inset-0 pointer-events-none">
                                <img
                                    src="/split2.webp"
                                    alt="Growit con plantas"
                                    loading="eager"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Overlay Image (Sin plantas - Left Side) */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <img
                                    src="/split1.webp"
                                    alt="Growit sin plantas"
                                    loading="eager"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Labels */}
                            <div className="absolute top-0 left-0 bg-[#2b4c46] text-white px-3 py-1.5 md:px-6 md:py-2 text-[10px] md:text-xs font-bold tracking-wider z-10 uppercase shadow-md">
                                Sin Plantas
                            </div>
                            <div className="absolute top-0 right-0 bg-[#2b4c46] text-white px-3 py-1.5 md:px-6 md:py-2 text-[10px] md:text-xs font-bold tracking-wider z-10 uppercase shadow-md">
                                Con Plantas
                            </div>

                            {/* Slider Line and Button */}
                            <div
                                className="absolute top-0 bottom-0 w-[3px] bg-white cursor-ew-resize z-20"
                                style={{ left: `calc(${sliderPosition}% - 1.5px)` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full border-[3px] border-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 group">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md w-5 h-5 md:w-6 md:h-6">
                                        <path d="M14 17L19 12L14 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 7L5 12L10 17" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
