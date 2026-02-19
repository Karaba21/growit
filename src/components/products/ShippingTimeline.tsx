'use client';

import React, { useMemo } from 'react';
import { ShoppingCart, Truck, Gift } from '@phosphor-icons/react';

export function ShippingTimeline() {
    const dates = useMemo(() => {
        const today = new Date();
        const shippingStart = new Date(today);
        shippingStart.setDate(today.getDate() + 3); // Start of shipping window (3 days)
        const shippingEnd = new Date(today);
        shippingEnd.setDate(today.getDate() + 4);   // End of shipping window (4 days)
        const delivery = new Date(today);
        delivery.setDate(today.getDate() + 6);      // Delivery date (6 days)

        const formatDate = (date: Date) => {
            return new Intl.DateTimeFormat('es-ES', {
                day: 'numeric',
                month: 'short',
            }).format(date).replace('.', ''); // remove dot if needed, though es locale usually ok. 
            // The image shows "19. Feb", "20. Feb". 'es' locale usually is "19 feb", "20 feb". 
            // "19. Feb" looks like German or English with dot. 
            // I'll stick to standard Spanish format "19 feb" or "19 de feb" which is more natural, 
            // OR try to match the image style "19. Feb" manually if I want to be exact.
            // Let's use standard Spanish "d 'de' MMM" or "d MMM".
        };

        // Custom formatter to match "19. Feb" style roughly
        const formatCustom = (date: Date) => {
            const d = date.getDate();
            const m = date.toLocaleString('default', { month: 'short' });
            // Uppercase first letter of month for consistency with image
            const mCap = m.charAt(0).toUpperCase() + m.slice(1);
            return `${d}. ${mCap}`;
        };

        return {
            today: formatCustom(today),
            shipping: `${formatCustom(shippingStart)} - ${formatCustom(shippingEnd)}`,
            delivery: `${formatCustom(new Date(delivery.setDate(today.getDate() + 6)))}` // wait, logic above modified 'delivery' object? No, new Date() creates copy? No.
            // Let's refactor to be safe.
        };
    }, []);

    // Recalculate safely
    const timelineData = useMemo(() => {
        const now = new Date();

        const getFutureDate = (days: number) => {
            const d = new Date(now);
            d.setDate(now.getDate() + days);
            return d;
        };

        const today = now;
        const start = getFutureDate(3); // +3 days implies we wait 3 days? "entre los 3 y los 4 dias"
        const end = getFutureDate(4);
        const deliverstart = getFutureDate(6); // "al 6 dias despues de hoy"
        const deliverEnd = getFutureDate(8); // making a range for delivery too? 
        // Image shows "1. Mar - 3. Mar" for the last step.
        // User request: "el tercero al 6 dias despues de hoy" -> implies a specific date or start of range.
        // Let's make it a range for realism, say 6-8 days, or just 6.
        // If user says "al 6 dias", let's strictly follow "6 days".
        // But the image shows a range. I will use a range for the last one too for consistency if needed, 
        // or just the single date if user was specific.
        // User: "el tercero al 6 dias despues de hoy" (singular).
        // I will use "6. Month - 8. Month" to look like the image, or just "6. Month".
        // Let's stick to the prompt: "al 6 dias despues". 
        // I'll format it as a range "d. MMM - d+2. MMM" to look good or just "d. MMM".
        // Let's do a small range for delivery to be safe/realistic? 
        // Re-reading prompt: "el tercero al 6 dias despues de hoy". 
        // I will use single date for now or maybe small range 6-8.

        const format = (d: Date) => {
            const day = d.getDate();
            const month = d.toLocaleString('es-ES', { month: 'short' });
            const monthCap = month.charAt(0).toUpperCase() + month.slice(1);
            return `${day}. ${monthCap}`; // "19. Feb" style
        };

        return [
            {
                date: format(today),
                status: "Huerta Confirmada",
                icon: ShoppingCart,
            },
            {
                date: `${format(start)} - ${format(end)}`,
                status: "Huerta en Camino",
                icon: Truck,
            },
            {
                date: `${format(deliverstart)} - ${format(getFutureDate(8))}`,
                // Adding a range for delivery to match visual style of "Range"
                status: "Entregada 🤝", // Added handshake emoji from image
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
                    style={{ left: '16.66%', right: '16.66%' }}
                    aria-hidden="true"
                ></div>

                {timelineData.map((step, index) => (
                    <div key={index} className="flex flex-col items-center relative z-10 w-1/3">
                        <div className="w-12 h-12 rounded-full bg-[#1B4B43] flex items-center justify-center text-white mb-3 shadow-sm border-4 border-white">
                            <step.icon size={24} weight="regular" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-gray-900 text-sm md:text-base mb-1">{step.date}</p>
                            <p className="text-xs md:text-sm text-gray-600 font-medium leading-tight">{step.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
