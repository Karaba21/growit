"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../contexts/CartContext';
import { Product } from '../../types/product';

interface ProductShowcaseProps {
    title: string;
    price: string;
    description?: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
    bgColor?: string;
    subtitle?: string;
    variantId?: string;
    product?: Product;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
    title,
    price,
    image,
    imageAlt,
    reverse = false,
    bgColor = 'bg-[#F9F7F2]',
    subtitle = "GROW HYDROPONIC",
    variantId,
    product
}) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = async () => {
        if (!product || !product.availableForSale || isAdding) return;

        setIsAdding(true);
        try {
            await addToCart(product);
        } catch (error) {
            console.error('Failed to add to cart:', error);
        } finally {
            setIsAdding(false);
        }
    };

    const handleBuyNow = () => {
        if (!variantId) return;
        const numericId = variantId.split("/").pop();
        const checkoutUrl = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/cart/${numericId}:1`;
        window.location.href = checkoutUrl;
    };

    return (
        <section className={`py-8 ${bgColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-2">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-500 font-body mb-8">
                            {price}
                        </p>

                        <div className="flex flex-col gap-3 max-w-sm">
                            <button
                                onClick={handleAddToCart}
                                disabled={!product || !product.availableForSale || isAdding}
                                className="w-full py-3 px-6 border border-gray-300 text-gray-800 font-body text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isAdding ? 'AGREGANDO...' : (!product || product.availableForSale) ? 'AÑADIR AL CARRITO' : 'AGOTADO'}
                            </button>
                            <button
                                onClick={handleBuyNow}
                                disabled={!variantId}
                                className="w-full py-3 px-6 bg-[#D9704F] text-white font-body text-xs font-bold uppercase tracking-wider hover:bg-[#c56040] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                COMPRAR AHORA
                            </button>
                        </div>

                        <div className="mt-6">
                            <Link href="/catalogo" className="text-xs font-bold text-gray-800 uppercase tracking-widest hover:text-primary transition-colors">
                                VER MÁS &gt;
                            </Link>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 max-w-lg mx-auto">
                        <div className="aspect-square relative flex items-center justify-center bg-[#EAE5D6] p-8">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="object-contain mix-blend-multiply p-8"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
