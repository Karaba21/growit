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
        <section className="py-10 bg-[#F4F1EA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6 leading-tight">
                        <span className="font-bold">Así</span> de fácil <span className="font-bold">es</span> cultivar con{" "}
                        <span className="italic font-normal">Growit</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center group"
                            variants={itemVariants}
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                                <step.icon size={32} weight="duotone" className="text-primary group-hover:text-accent transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                            <p className="text-gray-600 font-body text-sm leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <Link
                        href="/catalogo"
                        className="inline-block bg-accent hover:bg-[#c56040] text-white font-body font-bold py-4 px-12 rounded-full uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        EMPEZÁ AHORA
                    </Link>
                </div>
            </div>
        </section>
    );
};
