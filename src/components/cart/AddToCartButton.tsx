'use client';

import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Product } from '../../types/product';

interface AddToCartButtonProps {
    product: Product;
    className?: string;
}

export function AddToCartButton({ product, className = '' }: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = async () => {
        if (!product.availableForSale || isAdding) return;

        setIsAdding(true);
        try {
            await addToCart(product);
        } catch (error) {
            console.error('Failed to add to cart:', error);
            alert('Error al agregar al carrito. Por favor intenta de nuevo.');
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <button
            onClick={handleAddToCart}
            disabled={!product.availableForSale || isAdding}
            className={className || "w-full py-3 px-6 bg-[#D9704F] text-white font-body text-xs font-bold uppercase tracking-wider hover:bg-[#c56040] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"}
        >
            {isAdding ? 'AGREGANDO...' : product.availableForSale ? 'AGREGAR AL CARRITO' : 'AGOTADO'}
        </button>
    );
}
