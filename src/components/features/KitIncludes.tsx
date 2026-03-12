"use client";

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

export const KitIncludes: React.FC = () => {
    return (
        <section className="py-2 md:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4 uppercase tracking-wide">
                        ¡Viene asi de completa!
                    </h2>
                    <p className="text-base md:text-lg text-gray-800 font-body max-w-3xl mx-auto font-medium">
                        Con cualquier huerta Growit que elijas, ya viene TODO incluido para empezar.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
                    {/* Left Column */}
                    <div className="w-full lg:w-[30%] xl:w-[28%] flex flex-col gap-8 order-1 lg:order-1">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={24} className="text-[#2F4F4F]" weight="regular" />
                                <h3 className="text-xl md:text-2xl font-display text-[#1a1a1a]">Huerta Growit</h3>
                            </div>
                            <p className="text-[#333333] leading-relaxed font-body text-base lg:text-lg">
                                Elegi tu tamaño ideal 20 - 28 - 36 plantas, de interior o exterior
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={24} className="text-[#2F4F4F]" weight="regular" />
                                <h3 className="text-xl md:text-2xl font-display text-[#1a1a1a]">Pack de insumos</h3>
                            </div>
                            <p className="text-[#333333] leading-relaxed font-body text-base lg:text-lg">
                                Nutrientes A + B + dosificador
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={24} className="text-[#2F4F4F]" weight="regular" />
                                <h3 className="text-xl md:text-2xl font-display text-[#1a1a1a]">Kit automático</h3>
                            </div>
                            <p className="text-[#333333] leading-relaxed font-body text-base lg:text-lg">
                                <span className="font-bold">Bomba + timer digital</span> → se riega sola.
                            </p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="w-full lg:w-[35%] xl:w-[33%] relative flex justify-center order-2 lg:order-2 shrink-0">
                        {/* We use unoptimized to ensure the image loads exactly as it is without optimization issues, and mix-blend-multiply to remove white backgrounds if any */}
                        <Image
                            src="/kit.jpg"
                            alt="Kit Completo Growit"
                            width={600}
                            height={800}
                            className="object-contain max-h-[450px] md:max-h-[550px] lg:max-h-[650px] w-auto mix-blend-multiply"
                            priority
                        />
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-[30%] xl:w-[28%] flex flex-col gap-8 order-3 lg:order-3">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={24} className="text-[#2F4F4F]" weight="regular" />
                                <h3 className="text-xl md:text-2xl font-display text-[#1a1a1a]">Kit Medidores</h3>
                            </div>
                            <p className="text-[#333333] leading-relaxed font-body text-base lg:text-lg">
                                <span className="font-bold">Medidores de pH en tiras y EC</span> incluidos (control real, cero adivinanza).
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={24} className="text-[#2F4F4F]" weight="regular" />
                                <h3 className="text-xl md:text-2xl font-display text-[#1a1a1a]">Kit germinador</h3>
                            </div>
                            <p className="text-[#333333] leading-relaxed font-body text-base lg:text-lg">
                                Semillas, algodones, y bandeja germinadora
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={24} className="text-[#2F4F4F]" weight="regular" />
                                <h3 className="text-xl md:text-2xl font-display text-[#1a1a1a]">Curso Growit</h3>
                            </div>
                            <p className="text-[#333333] leading-relaxed font-body text-base lg:text-lg">
                                Manual de uso y armado, curso como cultivar de 0 sin experiencia previa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
