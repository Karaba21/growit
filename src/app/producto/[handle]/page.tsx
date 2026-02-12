import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { getProducts, getProduct } from '../../../lib/shopify';
import type { Product } from '../../../types/product';
import { formatPrice } from '../../../lib/utils';
import { AddToCartButton } from '../../../components/cart/AddToCartButton';
import { ProductGallery } from '../../../components/products/ProductGallery';
import { ProductFAQ } from '../../../components/products/ProductFAQ';

// Generate static params for all products (optional but good for SSG)
export async function generateStaticParams() {
    const products = await getProducts();
    return products.map((product: any) => ({
        handle: product.handle,
    }));
}

interface ProductPageProps {
    params: Promise<{ handle: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { handle } = await params;
    const product = (await getProduct(handle)) as Product | null;

    if (!product) {
        notFound();
    }

    const price = parseFloat(product.priceRange.minVariantPrice);
    const compareAtPrice = product.variants[0]?.compareAtPrice
        ? parseFloat(product.variants[0].compareAtPrice)
        : null;

    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <ol className="flex items-center space-x-2 text-sm text-gray-600">
                        <li><Link href="/" className="hover:text-primary-600">Inicio</Link></li>
                        <li>/</li>
                        <li><Link href="/catalogo" className="hover:text-primary-600">Catálogo</Link></li>
                        <li>/</li>
                        <li className="text-gray-900 font-medium">{product.title}</li>
                    </ol>
                </nav>

                {/* Product Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <ProductGallery
                        images={product.images}
                        title={product.title}
                        featuredImage={product.featuredImage}
                    />

                    {/* Product Info */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {product.title}
                        </h1>

                        {/* Badges */}
                        <div className="flex gap-2 mb-4">
                            {!product.availableForSale && (
                                <Badge variant="error">Agotado</Badge>
                            )}
                            {compareAtPrice && compareAtPrice > price && (
                                <Badge variant="warning">Oferta</Badge>
                            )}
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="text-4xl font-bold text-gray-900">
                                    ${formatPrice(price)}
                                </span>
                                {compareAtPrice && compareAtPrice > price && (
                                    <span className="text-xl text-gray-500 line-through">
                                        ${formatPrice(compareAtPrice)}
                                    </span>
                                )}
                            </div>

                            {/* Installments */}
                            <div className="flex items-center gap-2 text-base text-gray-600">
                                <svg
                                    className="w-5 h-5"
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
                                <span>
                                    Hasta <span className="font-semibold">12 cuotas</span> de ${formatPrice(price / 12)}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h2>
                            <div
                                className="text-gray-600 prose prose-sm"
                                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                            />
                        </div>

                        {/* Add to Cart */}
                        <div className="space-y-4">
                            <AddToCartButton
                                product={product}
                            />

                            {/* Shipping Info */}
                            <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                                <svg
                                    className="w-6 h-6 flex-shrink-0 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="text-sm md:text-base font-medium">
                                    Envío rápido de 1 a 3 días hábiles.
                                </span>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <ProductFAQ faqs={product.faqs || []} />

                        {/* Tags */}
                        {product.tags.length > 0 && (
                            <div className="mt-8">
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Etiquetas:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
