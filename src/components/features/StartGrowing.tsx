import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const StartGrowing = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-display text-center text-primary mb-12 md:mb-16 font-normal">
                    Todo para empezar a cultivar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {/* Card 1 */}
                    <Link href="/catalogo" className="group block bg-white rounded-3xl p-8 pt-12 pb-10 shadow-[0_4px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_50px_rgba(0,0,0,0.08)]">
                        <div className="relative w-full aspect-[4/3] mb-12 flex items-center justify-center">
                            <Image
                                src="/plantita.png"
                                alt="Modelos de huertas"
                                fill
                                className="object-contain scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="flex items-center gap-3 text-primary font-display text-lg md:text-xl transition-colors">
                            Modelos de huertas <span className="text-xl transition-transform group-hover:translate-x-1 text-gray-400 font-sans font-light">&rarr;</span>
                        </div>
                    </Link>

                    {/* Card 2 */}
                    <Link href="/catalogo?category=insumos" className="group block bg-white rounded-3xl p-8 pt-12 pb-10 shadow-[0_4px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_50px_rgba(0,0,0,0.08)]">
                        <div className="relative w-full aspect-[4/3] mb-12 flex items-center justify-center">
                            <Image
                                src="/paquete.png"
                                alt="Insumos para Hidroponia"
                                fill
                                className="object-contain scale-125"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="flex items-center gap-3 text-primary font-display text-lg md:text-xl transition-colors">
                            Insumos para Hidroponia <span className="text-xl transition-transform group-hover:translate-x-1 text-gray-400 font-sans font-light">&rarr;</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
