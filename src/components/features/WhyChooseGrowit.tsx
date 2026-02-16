import React from 'react';
import { Plant, Student, Users, Lightning } from '@phosphor-icons/react/dist/ssr';

export const WhyChooseGrowit: React.FC = () => {
    const reasons = [
        {
            icon: <Plant size={48} weight="duotone" className="text-[#D9704F]" />,
            title: "Kit realmente completo",
            description: "Incluye sistema, semillas, nutrientes, medidores y todos los accesorios necesarios para comenzar desde cero."
        },
        {
            icon: <Student size={48} weight="duotone" className="text-[#D9704F]" />,
            title: "Aprendé paso a paso",
            description: "Recibís guía, curso introductorio y soporte para que puedas cultivar aunque nunca lo hayas hecho antes."
        },
        {
            icon: <Users size={48} weight="duotone" className="text-[#D9704F]" />,
            title: "Asesoramiento permanente",
            description: "Nuestro equipo y la comunidad Growit te acompañan durante todo el proceso de cultivo."
        },
        {
            icon: <Lightning size={48} weight="duotone" className="text-[#D9704F]" />,
            title: "Sistema automático",
            description: "El riego y la nutrición funcionan automáticamente, con mantenimiento mínimo."
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
                        Por qué elegir Growit
                    </h2>
                    <div className="w-24 h-1 bg-[#D9704F] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                        >
                            <div className="mb-6 p-4 bg-[#F4F1EA] rounded-full group-hover:scale-110 transition-transform duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 font-body leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
