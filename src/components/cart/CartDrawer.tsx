'use client';

import React from 'react';
import { useCart } from '../../contexts/CartContext';
import Link from 'next/link';

export function CartDrawer() {
    const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCheckoutUrl } = useCart();



    const handleCheckout = async () => {
        const checkoutUrl = await getCheckoutUrl();
        if (checkoutUrl) {
            window.location.href = checkoutUrl;
        }
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className={`fixed inset-0 z-50 pointer-events-none`}>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div
                className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out pointer-events-auto flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-900">Carrito</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Cerrar carrito"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="text-center py-12">
                            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-[#D9704F] hover:text-[#c56040] font-semibold"
                            >
                                Continuar comprando
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 pb-4 border-b">
                                    {/* Product Image */}
                                    <Link
                                        href={`/producto/${item.handle}`}
                                        onClick={() => setIsCartOpen(false)}
                                        className="flex-shrink-0"
                                    >
                                        <img
                                            src={item.images[0]?.url}
                                            alt={item.images[0]?.altText || item.title}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                    </Link>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <Link
                                            href={`/producto/${item.handle}`}
                                            onClick={() => setIsCartOpen(false)}
                                            className="font-semibold text-gray-900 hover:text-[#D9704F] transition-colors block mb-1"
                                        >
                                            {item.title}
                                        </Link>

                                        <div className="flex items-center justify-between">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                                    disabled={item.quantity <= 1}
                                                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                    aria-label="Disminuir cantidad"
                                                >
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                    </svg>
                                                </button>
                                                <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                    aria-label="Aumentar cantidad"
                                                >
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <p className="font-bold text-gray-900">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-sm text-red-600 hover:text-red-700 mt-2"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer with Checkout */}
                {items.length > 0 && (
                    <div className="border-t p-6 space-y-4">
                        {/* Subtotal */}
                        <div className="flex justify-between text-lg">
                            <span className="font-semibold">Subtotal:</span>
                            <span className="font-bold">
                                ${subtotal.toFixed(2)}
                            </span>
                        </div>

                        {/* Checkout Button */}
                        <button
                            onClick={handleCheckout}
                            className="w-full py-3 px-6 bg-[#D9704F] text-white font-bold uppercase tracking-wider hover:bg-[#c56040] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Ir al Checkout
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                            Los impuestos y el envío se calcularán en el checkout
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
