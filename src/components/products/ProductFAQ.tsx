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

            {/* FAQ Accordion */}
            <div className="mb-6 mt-2 text-center">
                <h2 className="text-2xl md:text-4xl font-display font-bold text-primary uppercase tracking-wide">¿Tenes preguntas?</h2>
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
