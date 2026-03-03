"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const categories = [
    {
        id: "mix",
        label: "MIX",
        title: "UN POCO DE TODO..",
        description:
            "Para que siempre tengas algo listo: hojas para ensaladas, aromáticas para levantar cualquier comida y alguna variedad que te sorprenda.",
        cta: "VER HUERTA + MIX de Variedades",
        image: "/harvest/imgi_28_Nueva_TIENDA_WEB.png",
        alt: "Mix de variedades",
    },
    {
        id: "hortalizas",
        label: "HORTALIZAS",
        title: "¡ENSALADAS COMPLETAS!",
        description:
            "Pensado para armar ensaladas, bowls y acompañamientos que te ordenan la semana. Lechugas, rúculas, espinaca, acelga, kale, etc.",
        cta: "VER HUERTA + HORTALIZAS",
        image: "/harvest/imgi_29_ChatGPT_Image_12_feb_2026_01_43_03_p.m..png",
        alt: "Hortalizas",
    },
    {
        id: "rastreras",
        label: "RASTRERAS",
        title: "ABUNDANCIA QUE SE EXPANDE..",
        description:
            'Si pensás cosechar seguido esta categoría te va a encantar. Crecen "abriendose". Calabacín, Sandia, Melon, Zapallito Verde, etc.',
        cta: "VER HUERTA + RASTRERAS",
        image: "/harvest/imgi_30_ChatGPT_Image_12_feb_2026_01_52_05_p.m..png",
        alt: "Rastreras",
    },
    {
        id: "aromaticas",
        label: "AROMÁTICAS",
        title: "SABOR INMEDIATO..",
        description:
            "Esto es lo que hace que tu comida cambie de nivel. Albahaca, Perejil, Oregano, Tomillo, Romero, Cilantro, Menta, etc.",
        cta: "VER HUERTA + AROMÁTICAS",
        image: "/harvest/imgi_31_ChatGPT_Image_12_feb_2026_01_55_56_p.m..png",
        alt: "Aromáticas",
    },
    {
        id: "frutos",
        label: "FRUTOS",
        title: "¡LA SATISFACCIÓN MAXIMA!",
        description:
            "Requiere un poco más de paciencia, pero la recompensa es increible. Tomates cherry, morrones, frutilla, berenjena, etc.",
        cta: "VER HUERTA + FRUTOS",
        image: "/harvest/imgi_32_ChatGPT_Image_12_feb_2026_01_50_34_p.m..png",
        alt: "Frutos",
    },
];

export function Harvest() {
    const [activeTab, setActiveTab] = useState(0);
    const [pillStyle, setPillStyle] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const btn = tabRefs.current[activeTab];
        const container = containerRef.current;
        if (!btn || !container) return;

        // Reset pill styles for an instant to allow raw resize
        const containerRect = container.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        setPillStyle({
            left: btnRect.left - containerRect.left,
            top: btnRect.top - containerRect.top,
            width: btnRect.width,
            height: btnRect.height,
        });
    }, [activeTab]);

    const activeCategory = categories[activeTab];

    return (
        <section className="pt-2 pb-12 md:pt-4 md:pb-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header and Tabs */}
                <div className="flex flex-col gap-4 mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-5xl font-display uppercase tracking-wide text-gray-900">
                        ¿QUÉ TE GUSTARÍA <span className="text-primary font-bold">COSECHAR?</span>
                    </h2>
                    <p className="text-sm md:text-lg font-accent uppercase tracking-wider text-gray-800">
                        TU HUERTA, TU MENÚ..
                    </p>

                    <div
                        ref={containerRef}
                        className="relative flex flex-wrap justify-center items-center border border-gray-600 rounded-2xl md:rounded-full p-1.5 md:p-1 gap-2 md:gap-1 w-full md:w-max mt-2"
                    >
                        {pillStyle && (
                            <span
                                className="process-tab-pill absolute bg-primary rounded-xl md:rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                style={{
                                    left: pillStyle.left,
                                    top: pillStyle.top,
                                    width: pillStyle.width,
                                    height: pillStyle.height,
                                }}
                            />
                        )}

                        {categories.map((cat, i) => (
                            <button
                                key={cat.id}
                                ref={(el) => { tabRefs.current[i] = el; }}
                                onClick={() => setActiveTab(i)}
                                className={`relative z-10 px-5 py-2 md:px-6 md:py-2.5 rounded-xl md:rounded-full text-xs sm:text-sm md:text-base font-accent tracking-wide cursor-pointer whitespace-nowrap transition-colors duration-200
                                    ${activeTab === i
                                        ? "text-white"
                                        : "text-gray-800 hover:text-primary"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Image */}
                    <div className="relative w-full aspect-[4/5] md:aspect-square rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-sm">
                        <Image
                            key={activeCategory.id}
                            src={activeCategory.image}
                            alt={activeCategory.alt}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col items-center text-center gap-6">
                        <h3 className="text-3xl md:text-5xl font-display text-gray-900 uppercase">
                            {activeCategory.title}
                        </h3>
                        <p className="text-base md:text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
                            {activeCategory.description}
                        </p>
                        <a
                            href="/catalogo"
                            className="inline-block mt-4 py-4 px-8 bg-primary hover:bg-[#012e2c] text-white font-accent font-bold text-sm uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                        >
                            {activeCategory.cta}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
