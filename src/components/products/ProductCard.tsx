import React from 'react';
import { formatPrice } from '../../lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '../ui/Badge';
import { AddToCartButton } from '../cart/AddToCartButton';
import type { Product } from '../../types/product';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const price = parseFloat(product.priceRange.minVariantPrice);
    const compareAtPrice = product.variants[0]?.compareAtPrice
        ? parseFloat(product.variants[0].compareAtPrice)
        : null;

    return (
        <div className="group block bg-surface rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-transparent hover:border-primary-100 flex flex-col h-full">
            {/* Image */}
            <Link href={`/producto/${product.handle}`} className="relative block aspect-square bg-white overflow-hidden p-4">
                {product.featuredImage && (
                    <Image
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product.title}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}

                {/* Badges */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                    {!product.availableForSale && (
                        <Badge variant="error" className="font-body">Agotado</Badge>
                    )}
                    {compareAtPrice && compareAtPrice > price && (
                        <Badge variant="warning" className="font-body">Oferta</Badge>
                    )}
                </div>
            </Link>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <Link href={`/producto/${product.handle}`}>
                    <h3 className="text-lg font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {product.title}
                    </h3>
                </Link>

                {/* Price */}
                <div className="flex flex-col gap-1 mb-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-accent font-bold text-primary">
                            ${formatPrice(price)}
                        </span>
                        {compareAtPrice && compareAtPrice > price && (
                            <span className="text-sm font-accent text-text-main opacity-60 line-through">
                                ${formatPrice(compareAtPrice)}
                            </span>
                        )}
                    </div>

                    {/* Installments */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                        </svg>
                        <span className="font-accent">
                            Hasta <span className="font-semibold">12 cuotas</span> de ${formatPrice(price / 12)}
                        </span>
                    </div>
                </div>

                {/* Add to Cart Button */}
                <div className="mt-auto">
                    <AddToCartButton product={product} className="w-full" showQuantitySelector={false} />
                </div>
            </div>
        </div>
    );
};
