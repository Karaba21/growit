import React from 'react';
import Link from "next/link";

export const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 bg-[#F4F1EA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image - Left Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/5] lg:aspect-square">
                            <img
                                src="/images/tower-detail.png"
                                alt="Sistema Growit en detalle"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content - Right Side */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-12 leading-tight">
                            <span className="font-bold">Así</span> de fácil <span className="font-bold">es</span> cultivar con <br />
                            <span className="italic font-normal">Growit</span>
                        </h2>

                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="flex gap-4 items-start">
                                <p className="text-sm font-bold text-gray-800 pt-1 min-w-[50px]">Paso 1:</p>
                                <p className="text-gray-600 font-body text-sm leading-relaxed">
                                    Armá tu sistema en pocos minutos, ¡es muy sencillo!
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-4 items-start">
                                <p className="text-sm font-bold text-gray-800 pt-1 min-w-[50px]">Paso 2:</p>
                                <p className="text-gray-600 font-body text-sm leading-relaxed">
                                    Sembrá tus semillas, agua y luz.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-4 items-start">
                                <p className="text-sm font-bold text-gray-800 pt-1 min-w-[50px]">Paso 3:</p>
                                <p className="text-gray-600 font-body text-sm leading-relaxed">
                                    Llená con agua y agregá los nutrientes.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="flex gap-4 items-start">
                                <p className="text-sm font-bold text-gray-800 pt-1 min-w-[50px]">Paso 4:</p>
                                <p className="text-gray-600 font-body text-sm leading-relaxed">
                                    Enchufá el sistema y olvidate de el.
                                </p>
                            </div>

                            {/* Step 5 */}
                            <div className="flex gap-4 items-start">
                                <p className="text-sm font-bold text-gray-800 pt-1 min-w-[50px]">Paso 5:</p>
                                <p className="text-gray-600 font-body text-sm leading-relaxed">
                                    Cosechá vegetales orgánicos y frescos. ¡A disfrutar!
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="/catalogo"
                                className="inline-block bg-[#D9704F] hover:bg-[#c56040] text-white font-body font-bold py-3 px-10 rounded-lg uppercase tracking-wider text-xs transition duration-300 shadow-md"
                            >
                                COMPRAR
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
