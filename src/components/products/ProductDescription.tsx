"use client";

import React, { useState } from 'react';

interface ProductDescriptionProps {
    html: string;
}

export function ProductDescription({ html }: ProductDescriptionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-6">Descripción</h2>
            <div
                className={`text-gray-600 prose prose-lg mx-auto text-left overflow-hidden transition-all duration-300 relative ${isExpanded ? '' : 'max-h-[300px]'}`}
            >
                <div dangerouslySetInnerHTML={{ __html: html }} />

                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
                )}
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-[#2F4F4F] font-semibold hover:text-[#1e3333] transition-colors underline decoration-2 underline-offset-4"
            >
                {isExpanded ? 'Ver menos' : 'Ver más'}
            </button>
        </div>
    );
}
