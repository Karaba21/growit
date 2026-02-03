import React from 'react';
import { Accordion } from './Accordion';
import { mockFAQ } from '../../data/mockFAQ';

export const FAQ: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-lg text-gray-600">
                        Encuentra respuestas a las dudas más comunes
                    </p>
                </div>

                <Accordion items={mockFAQ} />
            </div>
        </section>
    );
};
