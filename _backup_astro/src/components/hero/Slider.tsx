import React, { useState } from 'react';

interface Slide {
    id: string;
    title: string;
    subtitle: string;
    cta: string;
    bgColor: string;
}

const slides: Slide[] = [
    {
        id: '1',
        title: 'Cultiva tu propio alimento',
        subtitle: 'Sistema inteligente de cultivo para tu hogar',
        cta: 'Comenzar',
        bgColor: 'bg-primary-100',
    },
    {
        id: '2',
        title: 'Fácil y automático',
        subtitle: 'Riego inteligente y notificaciones en tu móvil',
        cta: 'Ver productos',
        bgColor: 'bg-green-100',
    },
    {
        id: '3',
        title: 'Cosecha en 30 días',
        subtitle: 'Desde semilla hasta tu mesa',
        cta: 'Descubrir más',
        bgColor: 'bg-emerald-100',
    },
];

export const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative overflow-hidden">
            {/* Slides */}
            <div className="relative h-96 md:h-[500px]">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            } ${slide.bgColor} flex items-center justify-center`}
                    >
                        <div className="text-center px-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-8">
                                {slide.subtitle}
                            </p>
                            <a
                                href="/catalogo"
                                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                            >
                                {slide.cta}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                aria-label="Anterior"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                aria-label="Siguiente"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-primary-600' : 'bg-white/60'
                            }`}
                        aria-label={`Ir a slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
