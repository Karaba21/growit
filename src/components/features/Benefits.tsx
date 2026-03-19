import React from "react";
import Link from "next/link";

const CircleProgress = ({ percentage }: { percentage: number }) => {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const filledLength = (percentage / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center w-[4.5rem] h-[4.5rem] shrink-0">
            <svg className="w-full h-full transform rotate-180" viewBox="0 0 48 48">
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke="#013D3B"
                    strokeWidth="4"
                    strokeLinecap="square"
                    strokeDasharray={`${filledLength} ${circumference}`}
                    strokeDashoffset={0}
                />
            </svg>
            <span className="absolute text-[1.15rem] font-bold text-[#233f3e] tracking-tight">
                {percentage}%
            </span>
        </div>
    );
};

export const Benefits = () => {
    return (
        <section id="benefits" className="pt-12 pb-6 bg-white flex flex-col items-center">
            <div className="w-full max-w-3xl px-4 sm:px-6">
                <h2 className="text-[1.75rem] md:text-4xl text-center font-display text-primary font-bold mb-8 leading-tight uppercase tracking-wide">
                    Esta huerta es para vos si querés...
                </h2>

                <div className="flex flex-col">
                    {/* Item 1 */}
                    <div className="flex items-center gap-6 py-4 border-t border-gray-100">
                        <CircleProgress percentage={87} />
                        <p className="text-[#333333] text-lg font-body flex-1">
                            Menos <strong className="font-bold">químicos</strong> en lo que <strong className="font-bold">comés</strong>
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-6 py-4 border-t border-gray-100">
                        <CircleProgress percentage={90} />
                        <p className="text-[#333333] text-lg font-body flex-1">
                            Menos <strong className="font-bold">gastos</strong> en compras chicas del súper!
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-6 py-4 border-t border-gray-100">
                        <CircleProgress percentage={75} />
                        <p className="text-[#333333] text-lg font-body flex-1">
                            Más constancia en <strong className="font-bold">comer saludable</strong> (porque lo tenés a mano)
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center gap-6 py-4 border-t border-gray-100">
                        <CircleProgress percentage={60} />
                        <p className="text-[#333333] text-lg font-body flex-1">
                            Menos <strong className="font-bold">desperdicio</strong>, Cosechando lo que vas a <strong className="font-bold">usar</strong>!
                        </p>
                    </div>

                    {/* Item 5 */}
                    <div className="flex items-center gap-6 py-4 border-t border-gray-100">
                        <CircleProgress percentage={90} />
                        <p className="text-[#333333] text-lg font-body flex-1">
                            <strong className="font-bold">Ahorro</strong> de agua vs. cultivar en tierra.
                        </p>
                    </div>

                    <div className="border-t border-gray-100 pt-6 pb-2 text-left">
                        <p className="text-gray-600 text-sm font-body">
                            <strong className="font-bold text-[#333333]">Comer bien</strong> deja de ser difícil..
                        </p>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <Link
                        href="/catalogo?category=huertas"
                        className="inline-block py-3 px-8 bg-primary text-white font-accent font-bold text-sm uppercase tracking-wider hover:bg-[#254040] transition-colors rounded-lg shadow-sm"
                    >
                        ¡Ver cuál elegir!
                    </Link>
                </div>
            </div>
        </section>
    );
};
