import React from "react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative bg-primary-50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/3">
                    <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#013D3B" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.3C59.4,45.5,47.9,54.2,35.6,60.7C23.3,67.2,10.2,71.5,-2.2,75.3C-14.5,79.1,-26.1,82.4,-37.2,77.7C-48.3,73,-58.9,60.3,-67.6,46.7C-76.3,33.1,-83.1,18.6,-83.8,3.9C-84.5,-10.8,-79.2,-25.7,-69.3,-37.7C-59.4,-49.7,-44.9,-58.8,-30.9,-66.1C-16.9,-73.4,-3.4,-78.9,9.5,-78.9" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="py-20 md:py-28 lg:py-32 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 leading-tight">
                        Cultiva tu propio alimento
                        <span className="block text-accent">en casa</span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-main font-body mb-10 max-w-2xl mx-auto leading-relaxed">
                        Sistema inteligente de cultivo para tu hogar. Fácil, automático y orgánico.
                        Transforma tu espacio en un jardín productivo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            href="/catalogo"
                            className="bg-primary hover:bg-opacity-90 text-white font-body font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
                        >
                            Comenzar ahora
                        </Link>
                        <Link
                            href="/como-funciona"
                            className="bg-white hover:bg-gray-50 text-primary font-body font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-transparent hover:border-primary text-center"
                        >
                            Cómo funciona
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
