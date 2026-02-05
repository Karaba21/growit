"use client";

import React, { useState } from 'react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
    {
        id: '1',
        question: '¿Necesito tener experiencia previa para usar Growit?',
        answer: 'No! No hace falta experiencia previa.',
        answer2: 'El sistema está pensado para que cualquier persona pueda cultivar en casa, incluso sin conocimientos de jardinería'
    },
    {
        id: '2',
        question: '¿Cuánto tiempo lleva armar el kit?',
        answer: 'Menos de 30 minutos.',
        answer2: 'Growit se arma sin herramientas y viene con instrucciones muy claras. En poco tiempo vas a tener tu huerta lista para empezar a sembrar.'
    },
    {
        id: '3',
        question: '¿Growit se puede usar en interiores?',
        answer: 'Sí, se puede usar tanto en interiores como exteriores.',
        answer2: 'Solo necesita una buena fuente de luz natural o, si querés, podés complementarlo con luces LED para cultivo. Es ideal para balcones, terrazas, cocinas o jardines.'
    },
    {
        id: '4',
        question: '¿Qué tipo de plantas puedo cultivar?',
        answer: 'Podés cultivar hojas, hierbas aromáticas, frutos pequeños y plantas medicinales.',
        answer2: 'Por ejemplo: lechugas, rúcula, acelga, albahaca, orégano, perejil, tomates cherry, morrones, jalapeños, manzanilla, caléndula, cedrón, entre otros.'
    }
];

export const FaqSection: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-16 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl text-center text-white mb-12 uppercase tracking-widest border-b border-white/20 pb-4">
                        Preguntas Frecuentes
                    </h2>
                    <div className="space-y-4">
                        {faqData.map((item) => (
                            <div key={item.id} className="border border-white/20 rounded-lg overflow-hidden bg-primary-800/50 backdrop-blur-sm">
                                <button
                                    onClick={() => toggle(item.id)}
                                    className="w-full flex justify-between items-center p-4 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-body font-medium text-m text-white flex items-center gap-3">
                                        <i className="ph ph-check-square text-accent"></i>
                                        {item.question}
                                    </span>
                                    <i className={`ph ph-caret-down text-white transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}></i>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-4 pt-0 text-m text-beige font-body font-bold leading-relaxed">
                                        {item.answer}
                                    </div>
                                    <div className="p-4 pt-0 text-m text-beige font-body font-light leading-relaxed">
                                        {item.answer2}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
