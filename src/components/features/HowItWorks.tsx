"use client";

import React from 'react';
import Link from "next/link";
import { Wrench, Plant, Drop, Plug } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: Wrench,
            title: "Paso 1",
            description: "Armá la torre en minutos, es muy sencillo!"
        },
        {
            icon: Plant,
            title: "Paso 2",
            description: "Germiná tus semillas fácilmente"
        },
        {
            icon: Drop,
            title: "Paso 3",
            description: "Trasplantá y agregá agua con nutriente, rellená cada tanto"
        },
        {
            icon: Plug,
            title: "Paso 4",
            description: "Cosechá y disfrutá tus propios vegetales"
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="pt-4 pb-4 md:pt-4 md:pb-4 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-primary mb-2 md:mb-4 leading-tight uppercase tracking-wide">
                        Así de fácil es cultivar con Growit
                    </h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center group p-2 md:p-6"
                            variants={itemVariants}
                        >
                            <div className="mb-3 md:mb-6 p-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                                <step.icon size={48} weight="duotone" className="text-primary group-hover:text-accent transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-primary mb-2 md:mb-3">{step.title}</h3>
                            <p className="text-gray-600 font-body leading-relaxed max-w-[250px]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-4 md:mt-8 text-center">
                    <Link
                        href="/catalogo"
                        className="inline-block py-4 px-12 bg-primary text-white font-accent font-bold text-sm md:text-base uppercase tracking-wider hover:bg-[#254040] transition-colors rounded-lg shadow-sm"
                    >
                        EMPEZÁ AHORA
                    </Link>
                </div>
            </div>
        </section>
    );
};
