import React from 'react';
import { Button } from '../ui/Button';
import type { HowItWorksStep } from '../../types/product';

const steps: HowItWorksStep[] = [
    {
        id: '1',
        stepNumber: 1,
        title: 'Elige tu kit',
        description: 'Selecciona el kit que mejor se adapte a tu espacio y necesidades.',
    },
    {
        id: '2',
        stepNumber: 2,
        title: 'Configura tu maceta',
        description: 'Sigue las instrucciones simples para preparar tu sistema de cultivo.',
    },
    {
        id: '3',
        stepNumber: 3,
        title: 'Planta tus semillas',
        description: 'Coloca las semillas en el sustrato siguiendo nuestra guía.',
    },
    {
        id: '4',
        stepNumber: 4,
        title: 'Monitorea con la app',
        description: 'Recibe notificaciones y consejos personalizados en tu móvil.',
    },
    {
        id: '5',
        stepNumber: 5,
        title: 'Cosecha y disfruta',
        description: 'En pocas semanas, cosecha tus propios alimentos frescos y orgánicos.',
    },
];

export const HowItWorks: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        ¿Cómo funciona?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        5 pasos simples para comenzar tu cultivo en casa
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-primary-100 rounded-lg aspect-square flex items-center justify-center">
                            <span className="text-6xl">🌿</span>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="order-1 lg:order-2 space-y-6">
                        {steps.map((step) => (
                            <div key={step.id} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {step.stepNumber}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="pt-4">
                            <Button size="lg">
                                Comenzar ahora
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
