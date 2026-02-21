'use client';

import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Product } from '../../types/product';

interface AddToCartButtonProps {
    product: Product;
    className?: string;
    showQuantitySelector?: boolean;
}

export function AddToCartButton({ product, className = '', showQuantitySelector = true }: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = async () => {
        if (!product.availableForSale || isAdding) return;

        setIsAdding(true);
        try {
            await addToCart(product, quantity);
        } catch (error) {
            console.error('Failed to add to cart:', error);
            alert('Error al agregar al carrito. Por favor intenta de nuevo.');
        } finally {
            setIsAdding(false);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className={`flex gap-3 ${className}`}>
            {/* Quantity Selector */}
            {showQuantitySelector && (
                <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg w-32 px-3">
                    <button
                        onClick={decreaseQuantity}
                        className="text-gray-500 hover:text-gray-700 p-2 focus:outline-none"
                        disabled={quantity <= 1}
                    >
                        &minus;
                    </button>
                    <span className="text-gray-900 font-medium text-lg font-accent">{quantity}</span>
                    <button
                        onClick={increaseQuantity}
                        className="text-gray-500 hover:text-gray-700 p-2 focus:outline-none"
                    >
                        +
                    </button>
                </div>
            )}

            {/* Add to Cart Button */}
            <button
                onClick={handleAddToCart}
                disabled={!product.availableForSale || isAdding}
                className="flex-1 py-2.5 px-3 md:py-3 md:px-4 bg-[#2F4F4F] text-white font-accent font-bold text-[11px] sm:text-xs md:text-sm uppercase tracking-wider hover:bg-[#254040] transition-colors rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isAdding ? 'AGREGANDO...' : product.availableForSale ? 'AGREGAR AL CARRITO' : 'AGOTADO'}
            </button>
        </div>
    );
}
