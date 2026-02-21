import React from 'react';
import Image from 'next/image';
import { Plant, HouseLine, Leaf, Gear } from '@phosphor-icons/react/dist/ssr';

export const FeaturesGrid: React.FC = () => {
    return (
        <section className="py-8 bg-[#F4F1EA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
                        ¿Que Ofrece Growit?
                    </h2>
                    <p className="text-gray-600 font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Growit es la solución más completa de cultivo hidropónico, permitiéndonos ofrecerte sistemas de cultivo, nutrientes, semillas y soporte en cada tema. Te acompañamos en todo el proceso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="h-40 w-full relative flex items-center justify-center mb-6">
                            <Image src="/nontoxic.png" alt="Libre de Pesticidas" fill className="object-contain" sizes="(max-width: 768px) 100vw, 25vw" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                            Libre de Pesticidas
                        </h3>
                        <p className="text-base text-gray-500 font-body leading-relaxed">
                            Cultivo 100% natural, sin tóxicos ni pesticidas.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="h-40 w-full relative flex items-center justify-center mb-6">
                            <Image src="/espacio.png" alt="Espacio reducido" fill className="object-contain" sizes="(max-width: 768px) 100vw, 25vw" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                            Espacio reducido
                        </h3>
                        <p className="text-base text-gray-500 font-body leading-relaxed">
                            Cultiva en menos de 1 metro cuadrado.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="h-40 w-full relative flex items-center justify-center mb-6">
                            <Image src="/canasta.png" alt="Cosechas frescas" fill className="object-contain" sizes="(max-width: 768px) 100vw, 25vw" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                            Cosechas frescas
                        </h3>
                        <p className="text-base text-gray-500 font-body leading-relaxed">
                            Disfrutá de hojas, frutas y hierbas frescas todo el año.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="h-40 w-full relative flex items-center justify-center mb-6">
                            <Image src="/rueda.png" alt="Automático" fill className="object-contain" sizes="(max-width: 768px) 100vw, 25vw" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                            Automático
                        </h3>
                        <p className="text-base text-gray-500 font-body leading-relaxed">
                            Riega tus plantas automáticamente gracias a su sistema hidropónico.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
