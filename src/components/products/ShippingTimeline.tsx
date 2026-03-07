'use client';

import React, { useMemo } from 'react';
import { ShoppingCart, Gift } from '@phosphor-icons/react';

export function ShippingTimeline() {
    const timelineData = useMemo(() => {
        const now = new Date();

        const getFutureDate = (days: number) => {
            const d = new Date(now);
            d.setDate(now.getDate() + days);
            return d;
        };

        const today = now;
        const deliverstart = getFutureDate(1);
        const deliverEnd = getFutureDate(2);

        const format = (d: Date) => {
            const day = d.getDate();
            const month = d.toLocaleString('es-ES', { month: 'short' });
            const monthCap = month.charAt(0).toUpperCase() + month.slice(1);
            return `${day} ${monthCap}`; // "19. Feb" style
        };

        return [
            {
                date: format(today),
                status: "Lo pedís",
                icon: ShoppingCart,
            },
            {
                date: `${format(deliverstart)} - ${format(deliverEnd)}`,
                status: "Te llega 🤝",
                icon: Gift,
            }
        ];
    }, []);

    return (
        <div className="w-full py-6">
            <div className="flex items-start justify-between relative px-2">
                {/* Connecting Line - Absolute absolute behind */}
                <div
                    className="absolute top-6 h-1 bg-[#1B4B43]"
                    style={{ left: '25%', right: '25%' }}
                    aria-hidden="true"
                ></div>

                {timelineData.map((step, index) => (
                    <div key={index} className="flex flex-col items-center relative z-10 w-1/2">
                        <div className="w-12 h-12 rounded-full bg-[#1B4B43] flex items-center justify-center text-white mb-3 shadow-sm">
                            <step.icon size={24} weight="regular" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-gray-900 text-base md:text-lg mb-1">{step.date}</p>
                            <p className="text-sm md:text-base text-gray-600 font-medium leading-tight">{step.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
