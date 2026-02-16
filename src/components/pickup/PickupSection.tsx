import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Envelope } from '@phosphor-icons/react/dist/ssr';

export const PickupSection = () => {
    return (
        <section id="pickup" className="scroll-mt-24 py-16 bg-[#F9F7F2] border-t border-[#E5E7EB]">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl md:text-6xl tracking-tighter mb-12 text-center text-primary font-display">
                    Pickup
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Side - Location Information */}
                    <div className="space-y-6">

                        {/* Address */}
                        <div className="flex items-start space-x-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                                <MapPin className="text-primary" size={20} weight="fill" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1 font-display">Dirección</h4>
                                <p className="text-gray-600 text-lg font-body">
                                    Carrasco Norte, Montevideo
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start space-x-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                                <Phone className="text-primary" size={20} weight="fill" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1 font-display">Teléfono</h4>
                                <a
                                    href="tel:+59893474177"
                                    className="text-gray-600 text-lg hover:text-primary transition-all duration-300 font-body"
                                >
                                    +598 93474177
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                                <Envelope className="text-primary" size={20} weight="fill" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1 font-display">Email</h4>
                                <a
                                    href="mailto:growit.uruguay@gmail.com"
                                    className="text-gray-600 text-lg hover:text-primary transition-all duration-300 font-body"
                                >
                                    growit.uruguay@gmail.com                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Map Image */}
                    <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        {/* 
                         * NOTE: The user requested to recreate the section from a code snippet that used /ubicacion.png.
                         * I am assuming this image exists or is a placeholder. 
                         * If it doesn't exist, Next.js Image will complain or show broken if standard img.
                         * I will use a standard img tag with error handling or just the Image component as requested.
                         * However, standard Image component requires width/height if not fill.
                         * The snippet used fill, so I will stick to that.
                         */}
                        <Image
                            src="/ubicacion.png"
                            alt="Ubicación GP Automóviles"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
