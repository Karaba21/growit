"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        image: "/images/hero-bg.png",
        title: (
            <>
                Tu huerta automática en casa, sin tierra y sin esfuerzo. <br />

            </>
        ),
    },
    {
        id: 2,
        image: "/images/hero_slide_2.png",
        title: (
            <>
                Verduras frescas cultivadas por vos, de forma simple y automática.
            </>
        ),
    },
    {
        id: 3,
        image: "/images/hero_slide_3.png",
        title: (
            <>
                Cultivar en casa nunca fue tan fácil.
            </>
        ),
    },
];

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={currentSlide}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-display font-medium mb-6 leading-tight max-w-4xl mx-auto"
                    >
                        {slides[currentSlide].title}
                    </motion.h1>
                </AnimatePresence>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8"
                >
                    <Link
                        href="/catalogo"
                        className="inline-block bg-[#D9704F] hover:bg-[#c56040] text-white font-body font-bold py-3 px-8 rounded-full uppercase tracking-wider text-sm transition duration-300"
                    >
                        Ver Productos
                    </Link>
                </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};
