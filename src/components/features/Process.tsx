"use client";

import { useState, useRef, useEffect } from "react";


const steps = [
    {
        id: "dia1",
        label: "DÍA 1",
        title: "ARMÁ TU HUERTA",
        description: (
            <>
                No se necesitan herramientas, siguiendo paso a paso el{" "}
                <strong>manual</strong>, en <strong>pocos minutos</strong> está armada.
            </>
        ),
        cta: "Armá tu huerta",
        image: "/process/dia1.webp",
        alt: "Armando la huerta Growit",
    },
    {
        id: "semana12",
        label: "SEMANA 1-2",
        title: "Germiná los plantines",
        description: "Y una vez listos hace el trasplante a la huerta.",
        cta: "Germiná en tu huerta!",
        image: "/process/semana1-2.webp",
        alt: "Germinando plantines",
    },
    {
        id: "semana35",
        label: "SEMANA 3-5",
        title: "¡Primeras Cosechas!",
        description:
            "Las plantas van a ir creciendo y vas a ir consumiendo las hojas más grandes.",
        cta: "Cosechá en tu huerta!",
        image: "/process/semana3-5.webp",
        alt: "Primeras cosechas de la huerta",
    },
    {
        id: "semanaplus",
        label: "SEMANA +6",
        title: "Explorá nuevas variedades",
        description: "Cosechá y trasplanta nuevamente, es un ciclo que no para nunca.",
        cta: "Probá distintas variedades",
        image: "/process/semana6.webp",
        alt: "Explorando nuevas variedades",
    },
];

export function Process() {
    const [activeStep, setActiveStep] = useState(0);
    const [pillStyle, setPillStyle] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const btn = tabRefs.current[activeStep];
        const container = containerRef.current;
        if (!btn || !container) return;

        const containerRect = container.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        setPillStyle({
            left: btnRect.left - containerRect.left,
            top: btnRect.top - containerRect.top,
            width: btnRect.width,
            height: btnRect.height,
        });
    }, [activeStep]);

    const step = steps[activeStep];

    return (
        <section className="pt-4 pb-8 md:pt-8 md:pb-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── MOBILE: title centered + tabs below ── */}
                {/* ── DESKTOP: title + tabs side by side   ── */}
                <div className="flex flex-col items-center md:flex-row md:items-center gap-5 md:gap-10 mb-8 md:mb-12">

                    <h2 className="text-2xl md:text-4xl font-display font-bold text-primary uppercase tracking-wide shrink-0 text-center md:text-left">
                        Proceso en tu huerta
                    </h2>

                    {/* Tab container — wraps on mobile, single row on desktop */}
                    <div
                        ref={containerRef}
                        className="relative flex flex-wrap justify-center items-center border border-gray-300 rounded-2xl md:rounded-full p-1 gap-1 w-full md:w-auto"
                    >
                        {/* Animated sliding pill */}
                        {pillStyle && (
                            <span
                                className="process-tab-pill absolute bg-primary rounded-full pointer-events-none"
                                style={{
                                    left: pillStyle.left,
                                    top: pillStyle.top,
                                    width: pillStyle.width,
                                    height: pillStyle.height,
                                }}
                            />
                        )}

                        {steps.map((s, i) => (
                            <button
                                key={s.id}
                                id={`process-tab-${s.id}`}
                                ref={(el) => { tabRefs.current[i] = el; }}
                                onClick={() => setActiveStep(i)}
                                className={`relative z-10 px-4 py-2 rounded-full text-sm font-accent font-semibold tracking-wide cursor-pointer whitespace-nowrap transition-colors duration-200
                                    ${activeStep === i
                                        ? "text-white"
                                        : "text-gray-500 hover:text-primary"
                                    }`}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content: stacked on mobile, side-by-side on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Image */}
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                    <img
                            key={step.id}
                            src={step.image}
                            alt={step.alt}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col items-center text-center gap-6">
                        <h3 className="text-3xl md:text-4xl font-display text-primary leading-tight">
                            {step.title}
                        </h3>
                        <p className="text-base md:text-lg text-gray-600 max-w-sm">
                            {step.description}
                        </p>
                        <a
                            href="/catalogo?category=huertas"
                            className="inline-block py-4 px-8 bg-primary hover:bg-[#012e2c] text-white font-accent font-bold text-sm uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                        >
                            {step.cta}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
