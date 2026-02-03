import React from 'react';
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
        <a
            href={`/producto/${product.handle}`}
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
        >
            {/* Image */}
            <div className="relative aspect-square bg-gray-100 overflow-hidden">
                {product.featuredImage && (
                    <img
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                )}

                {/* Badges */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                    {!product.availableForSale && (
                        <Badge variant="error">Agotado</Badge>
                    )}
                    {compareAtPrice && compareAtPrice > price && (
                        <Badge variant="warning">Oferta</Badge>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {product.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-gray-900">
                        ${price.toFixed(2)}
                    </span>
                    {compareAtPrice && compareAtPrice > price && (
                        <span className="text-sm text-gray-500 line-through">
                            ${compareAtPrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
        </a>
    );
};
