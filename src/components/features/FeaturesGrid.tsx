import React from 'react';
import Image from 'next/image';

export const FeaturesGrid: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-primary uppercase tracking-wide">
                        ¿Qué Ofrece Growit?
                    </h2>
                    <div className="w-24 h-1 bg-accent rounded-full"></div>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mt-4 font-body">
                        Growit es la solución más completa de cultivo hidropónico, permitiéndonos ofrecerte sistemas de cultivo, nutrientes, semillas y soporte en cada tema. Te acompañamos en todo el proceso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Feature 1 */}
                    <div className="bg-[#F4F1EA] p-8 md:p-10 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="h-32 w-full relative flex items-center justify-center mb-8 drop-shadow-sm">
                            <Image src="/nontoxic.png" alt="Libre de Pesticidas" fill className="object-contain" sizes="(max-width: 768px) 100vw, 25vw" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-4">
                            Libre de Pesticidas
                        </h3>
                        <p className="text-base text-gray-600 font-body leading-relaxed">
                            Cultivo 100% natural, sin tóxicos ni pesticidas.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-[#F4F1EA] p-8 md:p-10 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="h-32 w-full relative flex items-center justify-center mb-8 drop-shadow-sm">
                            <Image src="/espacio.png" alt="Espacio reducido" fill className="object-contain" sizes="(max-width: 768px) 100vw, 25vw" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-4">
                            Espacio reducido
                        </h3>
                        <p className="text-base text-gray-600 font-body leading-relaxed">
                            Cultiva en menos de 1 metro cuadrado.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-[#F4F1EA] p-8 md:p-10 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="h-32 w-full relative flex items-center justify-center mb-8 drop-shadow-sm">
                            <Image src="/canasta.png" alt="Cosechas frescas" fill className="object-contain" sizes="(max-width: 768px) 100vw, 25vw" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-4">
                            Cosechas frescas
                        </h3>
                        <p className="text-base text-gray-600 font-body leading-relaxed">
                            Disfrutá de hojas, frutas y hierbas frescas todo el año.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-[#F4F1EA] p-8 md:p-10 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="h-32 w-full relative flex items-center justify-center mb-8 drop-shadow-sm">
                            <Image src="/rueda.png" alt="Automático" fill className="object-contain" sizes="(max-width: 768px) 100vw, 25vw" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-4">
                            Automático
                        </h3>
                        <p className="text-base text-gray-600 font-body leading-relaxed">
                            Riega tus plantas automáticamente gracias a su sistema hidropónico.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
