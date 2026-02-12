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
            {/* Warranty/Guarantee Badges */}
            <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <div className="font-bold text-gray-900">1 AÑO DE</div>
                        <div className="font-bold text-gray-900">GARANTÍA</div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <div>
                        <div className="font-bold text-gray-900">COMPRA</div>
                        <div className="font-bold text-gray-900">PROTEGIDA</div>
                    </div>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.id}
                        className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-semibold text-gray-900 pr-4">
                                {faq.question}
                            </span>
                            <svg
                                className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                        >
                            <div className="px-6 pb-4 text-gray-600 whitespace-pre-line">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
