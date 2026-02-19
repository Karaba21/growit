'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../lib/utils';
import Link from 'next/link';

export function CartDrawer() {
    const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCheckoutUrl } = useCart();
    const [timeLeft, setTimeLeft] = useState({ minutes: 1, seconds: 21 });

    // Countdown timer effect
    useEffect(() => {
        if (!isCartOpen) {
            setTimeLeft({ minutes: 1, seconds: 21 });
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                } else {
                    return prev; // Stop at 00:00
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isCartOpen]);

    const handleCheckout = async () => {
        const checkoutUrl = await getCheckoutUrl();
        if (checkoutUrl) {
            window.location.href = checkoutUrl;
        }
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalDiscount = items.reduce((acc, item) => {
        if (item.compareAtPrice && item.compareAtPrice > item.price) {
            return acc + ((item.compareAtPrice - item.price) * item.quantity);
        }
        return acc;
    }, 0);

    const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className={`fixed inset-0 z-50 pointer-events-none`}>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div
                className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out pointer-events-auto flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header Section */}
                <div className="flex flex-col">
                    {/* Top Bar with Title and Close */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <h2 className="text-xl font-serif text-gray-900">
                            Carrito con {totalCount} producto{totalCount !== 1 ? 's' : ''}
                        </h2>
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="text-gray-500 hover:text-gray-700 p-2"
                            aria-label="Cerrar carrito"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Reservation Timer Banner */}
                    <div className="bg-[#1a1a1a] text-white text-center py-2 text-sm font-medium tracking-wide">
                        Carrito reservado por {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                    </div>

                    {/* Free Shipping Progress */}
                    {/* Free Shipping Progress */}
                    <div className="p-4 bg-white">
                        {(() => {
                            const hasQualifyingItem = items.some(item =>
                                item.collections?.some(c =>
                                    ['indoor', 'outdoor'].includes(c.handle.toLowerCase()) ||
                                    c.title.toLowerCase().includes('indoor') ||
                                    c.title.toLowerCase().includes('outdoor')
                                )
                            );

                            return (
                                <>
                                    <p className="text-center text-sm font-bold text-gray-900 mb-2">
                                        {hasQualifyingItem ? '¡Tenés envío GRATIS!!' : '¡Envío GRATIS llevando una hidroponía!'}
                                    </p>
                                    <div className="relative mt-2 mb-4">
                                        <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-[#3C5946] opacity-90 transition-all duration-500 ease-out"
                                                style={{
                                                    width: hasQualifyingItem ? '100%' : '0%',
                                                    backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
                                                    backgroundSize: '1rem 1rem'
                                                }}
                                            />
                                        </div>
                                        <div className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 border border-gray-200 z-10 transition-colors duration-300 ${hasQualifyingItem ? 'text-[#3C5946]' : 'text-gray-300'}`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                            </svg>
                                        </div>
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {items.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-[#D9704F] hover:text-[#c56040] font-semibold"
                            >
                                Continuar comprando
                            </button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                {/* Product Image */}
                                <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden relative">
                                    <img
                                        src={item.images[0]?.url}
                                        alt={item.images[0]?.altText || item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900 leading-snug">{item.title}</h3>
                                            {/* Info variant if available, purely cosmetic for now if data missing */}
                                            {/* <p className="text-xs text-gray-500 mt-1">Variant Name</p> */}
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 p-1"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-end mt-2">
                                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                            <button
                                                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                                className="px-2 py-1 text-gray-600 hover:bg-gray-50"
                                            >
                                                -
                                            </button>
                                            <span className="px-2 py-1 text-sm text-gray-900 min-w-[2rem] text-center font-accent">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-2 py-1 text-gray-600 hover:bg-gray-50"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <div className="text-right">
                                            {item.compareAtPrice && item.compareAtPrice > item.price && (
                                                <div className="text-xs text-gray-400 line-through font-accent">
                                                    ${formatPrice(item.compareAtPrice * item.quantity)}
                                                </div>
                                            )}
                                            <div className="font-bold text-gray-900 font-accent">
                                                ${formatPrice(item.price * item.quantity)}
                                            </div>
                                            {item.compareAtPrice && item.compareAtPrice > item.price && (
                                                <div className="text-[10px] font-bold text-green-600 font-accent">
                                                    (Descuento de ${formatPrice((item.compareAtPrice - item.price) * item.quantity)})
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer Section */}
                <div className="border-t border-gray-100 p-4 bg-white">

                    <div className="space-y-2 mb-4">
                        {totalDiscount > 0 && (
                            <div className="flex justify-between text-sm">
                                <span className="font-semibold text-[#2C4F38]">Descuento</span>
                                <span className="font-semibold text-[#2C4F38] font-accent">-${formatPrice(totalDiscount)}</span>
                            </div>
                        )}
                        <div className="flex justify-between text-lg font-bold text-gray-900">
                            <span>Subtotal</span>
                            <span className="font-accent">${formatPrice(subtotal)}</span>
                        </div>
                    </div>

                    <button
                        onClick={handleCheckout}
                        disabled={items.length === 0}
                        className="w-full py-3 bg-primary text-white font-bold rounded hover:bg-[#1e3626] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4 font-accent"
                    >
                        PAGAR PEDIDO
                    </button>

                    {/* Payment Icons Placeholder */}
                    <div className="flex justify-center gap-2">
                        {/* Simple SVG/CSS representations for payment icons */}
                        <div className="h-6 w-10 bg-blue-600 rounded flex items-center justify-center text-[8px] text-white font-bold">AMEX</div>
                        <div className="h-6 w-10 bg-blue-400 rounded flex items-center justify-center text-[8px] text-white font-bold">DINERS</div>
                        <div className="h-6 w-10 bg-red-500 rounded flex items-center justify-center text-[8px] text-white font-bold">MASTER</div>
                        <div className="h-6 w-10 bg-blue-800 rounded flex items-center justify-center text-[8px] text-white font-bold">VISA</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper for truck icon or similar if needed, already embedded above.
