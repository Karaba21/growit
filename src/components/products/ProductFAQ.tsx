"use client";

import React, { useState } from 'react';
import type { FAQItem } from '../../types/product';

interface ProductFAQProps {
    faqs: FAQItem[];
}

export function ProductFAQ({ faqs }: ProductFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!faqs || faqs.length === 0) {
        return null;
    }

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-8">
            {/* Warranty/Guarantee Badges - Centered and Styled */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center items-center gap-3 md:gap-4 mb-8 pb-2 w-full">
                <div className="flex items-center gap-2 md:gap-4 bg-gray-50 px-3 py-3 md:px-5 md:py-3 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-105 justify-center md:justify-start">
                    <div className="w-8 h-8 md:w-10 md:h-10 flex flex-shrink-0 items-center justify-center bg-white rounded-full shadow-sm">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#2F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] md:text-xs text-gray-500 font-semibold tracking-wider uppercase whitespace-nowrap">6 meses de</span>
                        <span className="text-xs md:text-sm font-bold text-gray-900 leading-none">GARANTÍA</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4 bg-gray-50 px-3 py-3 md:px-5 md:py-3 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-105 justify-center md:justify-start">
                    <div className="w-8 h-8 md:w-10 md:h-10 flex flex-shrink-0 items-center justify-center bg-white rounded-full shadow-sm">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#2F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] md:text-xs text-gray-500 font-semibold tracking-wider uppercase whitespace-nowrap">Compra</span>
                        <span className="text-xs md:text-sm font-bold text-gray-900 leading-none">PROTEGIDA</span>
                    </div>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mb-6 mt-2 text-center">
                <h2 className="text-2xl font-bold text-gray-900 font-playfair">¿Tenes preguntas?</h2>
            </div>
            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.id}
                        className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full relative px-6 py-4 flex items-center justify-center text-center hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-semibold text-gray-900 pr-4">
                                {faq.question}
                            </span>
                            <svg
                                className={`absolute right-6 w-5 h-5 text-gray-500 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[2000px]' : 'max-h-0'
                                }`}
                        >
                            <div className="px-6 pt-3 pb-6 text-gray-600 whitespace-pre-line text-left">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
