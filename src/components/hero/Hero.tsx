import React from "react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.png"
                    alt="Cultivo en casa"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-tight max-w-4xl mx-auto">
                    Cultivá tus propias <br />
                    <span className="italic">verduras en casa</span>, de forma <br />
                    fácil y sustentable
                </h1>

                <div className="mt-8">
                    <Link
                        href="/catalogo"
                        className="inline-block bg-[#D9704F] hover:bg-[#c56040] text-white font-body font-bold py-3 px-8 rounded-full uppercase tracking-wider text-sm transition duration-300"
                    >
                        Ver Productos
                    </Link>
                </div>
            </div>
        </section>
    );
};
