'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '../../types/product';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../lib/utils';
// import { Button } from '../ui/Button'; // Assuming basic button or local styled button for now if Button component not found or complex. 
// Actually let's just use standard button with className to match request "tal cual" and ensure it works.

interface StickyProductBarProps {
    product: Product;
}

export function StickyProductBar({ product }: StickyProductBarProps) {
    const [isVisible, setIsVisible] = useState(false);
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);
    const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0]?.id || '');

    useEffect(() => {
        const handleScroll = () => {
            const mainButton = document.getElementById('main-add-to-cart');
            if (mainButton) {
                const rect = mainButton.getBoundingClientRect();
                const shouldShow = rect.bottom < 0;
                setIsVisible(shouldShow);

                if (shouldShow) {
                    document.body.classList.add('sticky-bar-visible');
                } else {
                    document.body.classList.remove('sticky-bar-visible');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Check initially
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove('sticky-bar-visible');
        };
    }, []);

    const handleAddToCart = async () => {
        if (!product.availableForSale) return;
        setIsAdding(true);
        try {
            await addToCart(product, 1);
            // Optionally open cart or show toast
        } catch (error) {
            console.error('Failed to add to cart', error);
        } finally {
            setIsAdding(false);
        }
    };

    if (!isVisible) return null;

    const currentVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0];
    const price = currentVariant ? parseFloat(currentVariant.price) : parseFloat(product.priceRange.minVariantPrice);
    const compareAtPrice = currentVariant?.compareAtPrice ? parseFloat(currentVariant.compareAtPrice) : null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 transform transition-transform duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">

                {/* Product Info */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="flex flex-col min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 truncate pr-2">{product.title}</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-base font-bold text-[#2F4F4F] font-accent">
                                ${formatPrice(price)}
                            </span>
                            {compareAtPrice && compareAtPrice > price && (
                                <span className="text-xs text-gray-500 line-through">
                                    ${formatPrice(compareAtPrice)}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    {product.variants.length > 1 && (
                        <div className="hidden md:block">
                            <select
                                value={selectedVariantId}
                                onChange={(e) => setSelectedVariantId(e.target.value)}
                                className="block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-[#2F4F4F] focus:border-[#2F4F4F] rounded-md bg-gray-50"
                            >
                                {product.variants.map((variant) => (
                                    <option key={variant.id} value={variant.id}>
                                        {variant.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <button
                        onClick={handleAddToCart}
                        disabled={!product.availableForSale || isAdding}
                        className="whitespace-nowrap bg-[#2F4F4F] hover:bg-[#254040] text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-accent"
                    >
                        {isAdding ? 'Agregando...' : 'AGREGAR AL CARRITO'}
                    </button>
                </div>
            </div>
        </div>
    );
}
