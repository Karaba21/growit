import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '../ui/Badge';
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
        <Link
            href={`/producto/${product.handle}`}
            className="group block bg-surface rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-transparent hover:border-primary-100"
        >
            {/* Image */}
            <div className="relative aspect-square bg-beige overflow-hidden">
                {product.featuredImage && (
                    <Image
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
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
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {product.title}
                </h3>

                <p className="text-sm text-text-main font-body mb-3 line-clamp-2">
                    {product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                    <span className="text-xl font-body font-bold text-primary">
                        ${price.toFixed(2)}
                    </span>
                    {compareAtPrice && compareAtPrice > price && (
                        <span className="text-sm font-body text-text-main opacity-60 line-through">
                            ${compareAtPrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
};
