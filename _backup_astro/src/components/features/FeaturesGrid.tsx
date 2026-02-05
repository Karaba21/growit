import React from 'react';
import { FeatureCard } from './FeatureCard';
import type { Feature } from '../../types/product';

const features: Feature[] = [
    {
        id: '1',
        icon: '🌱',
        title: 'Fácil de usar',
        description: 'Sistema intuitivo diseñado para principiantes. No necesitas experiencia previa.',
    },
    {
        id: '2',
        icon: '💧',
        title: 'Riego automático',
        description: 'Sensores inteligentes que riegan tus plantas cuando lo necesitan.',
    },
    {
        id: '3',
        icon: '📱',
        title: 'App móvil',
        description: 'Monitorea y controla tu cultivo desde tu smartphone.',
    },
    {
        id: '4',
        icon: '🌿',
        title: '100% orgánico',
        description: 'Semillas y nutrientes certificados orgánicos para cultivos saludables.',
    },
];

export const FeaturesGrid: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        ¿Qué ofrece Growit?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Todo lo que necesitas para cultivar tu propio alimento en casa
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};
