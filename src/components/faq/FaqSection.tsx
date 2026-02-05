"use client";

import React, { useState } from 'react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
    {
        id: '1',
        question: '¿Necesito tener experiencia previa para usar Growit?',
        answer: 'No, nuestros sistemas están diseñados para principiantes. Incluimos una guía paso a paso y te brindamos soporte durante todo el proceso.'
    },
    {
        id: '2',
        question: '¿Cuánto tiempo lleva armar el kit?',
        answer: 'El armado es muy sencillo y no requiere herramientas. Generalmente toma entre 15 y 20 minutos tener tu torre lista para funcionar.'
    },
    {
        id: '3',
        question: '¿Growit se puede usar en interiores?',
        answer: '¡Sí! Tenemos modelos específicos con luces LED de cultivo incorporadas (modelos Indoor) perfectos para espacios sin luz natural directa.'
    },
    {
        id: '4',
        question: '¿Qué tipo de plantas puedo cultivar?',
        answer: 'Puedes cultivar una gran variedad de vegetales de hoja (lechuga, espinaca, rúcula), hierbas aromáticas (albahaca, menta, cilantro) e incluso pequeños frutos como tomates cherry y frutillas.'
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
                                    <span className="font-body font-medium text-sm text-white flex items-center gap-3">
                                        <i className="ph ph-check-square text-accent"></i>
                                        {item.question}
                                    </span>
                                    <i className={`ph ph-caret-down text-white transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}></i>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-4 pt-0 text-sm text-beige font-body font-light leading-relaxed">
                                        {item.answer}
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
