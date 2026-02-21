import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { getProducts, getProduct } from '../../../lib/shopify';
import type { Product } from '../../../types/product';
import { formatPrice } from '../../../lib/utils';
import { AddToCartButton } from '../../../components/cart/AddToCartButton';
import { ProductGallery } from '../../../components/products/ProductGallery';
import { ProductFAQ } from '../../../components/products/ProductFAQ';
import { ProductReviews } from '../../../components/products/ProductReviews';
import { PeopleWatching } from '../../../components/products/PeopleWatching';
import { ShippingTimeline } from '../../../components/products/ShippingTimeline';
import { StickyProductBar } from '../../../components/products/StickyProductBar';

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

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { handle } = await params;
    const product = (await getProduct(handle)) as Product | null;

    if (!product) {
        return {
            title: 'Producto no encontrado',
            description: 'El producto que buscas no existe.',
        };
    }

    const price = product.priceRange?.minVariantPrice
        ? `$${formatPrice(parseFloat(product.priceRange.minVariantPrice))} UYU`
        : '';

    const description = product.description?.slice(0, 160) || `Comprá ${product.title} ${price ? `por ${price}` : ''} en Growit. Sistema inteligente de cultivo.`;

    const images = product.featuredImage ? [{ url: product.featuredImage.url }] : [];

    return {
        title: product.title,
        description,
        openGraph: {
            title: product.title,
            description,
            images,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: product.title,
            description,
            images: product.featuredImage ? [product.featuredImage.url] : [],
        },
    };
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
                <nav className="hidden md:block mb-8">
                    <ol className="flex items-center space-x-2 text-sm text-gray-600">
                        <li><Link href="/" className="hover:text-primary-600">Inicio</Link></li>
                        <li>/</li>
                        <li><Link href="/catalogo" className="hover:text-primary-600">Catálogo</Link></li>
                        <li>/</li>
                        <li className="text-gray-900 font-medium">{product.title}</li>
                    </ol>
                </nav>

                <h1 className="md:hidden text-3xl font-bold text-gray-900 mb-6">
                    {product.title}
                </h1>

                <div className="md:hidden">
                    <ProductReviews />
                </div>

                {/* Product Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
                    {/* Image Gallery */}
                    <ProductGallery
                        images={product.images}
                        title={product.title}
                        featuredImage={product.featuredImage}
                    />

                    {/* Product Info */}
                    <div>
                        <h1 className="hidden md:block text-4xl font-bold text-gray-900 mb-2 font-display">
                            {product.title}
                        </h1>
                        <div className="hidden md:block">
                            <ProductReviews />
                        </div>
                        {/* Badges */}
                        {(!product.availableForSale || (compareAtPrice && compareAtPrice > price)) && (
                            <div className="flex gap-2 mb-4">
                                {!product.availableForSale && (
                                    <Badge variant="error">Agotado</Badge>
                                )}
                                {compareAtPrice && compareAtPrice > price && (
                                    <Badge variant="warning">Oferta</Badge>
                                )}
                            </div>
                        )}

                        {/* Price */}
                        <div className="mb-6">
                            <div className="flex items-baseline gap-3 mb-2 font-accent">
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
                            <div className="flex items-center gap-3 text-[#2F4F4F] mb-4 font-accent">
                                <div className="p-1.5 rounded-full border border-[#2F4F4F] flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-[#2F4F4F]"
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
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-80 leading-none mb-0.5">Financiación</span>
                                    <div className="font-semibold text-lg leading-none">
                                        HASTA <span className="font-extrabold">12 CUOTAS</span> DE <span suppressHydrationWarning>${formatPrice(price / 12)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Add to Cart */}
                        <div className="space-y-4">
                            <PeopleWatching />
                            <div id="main-add-to-cart">
                                <AddToCartButton
                                    product={product}
                                />
                            </div>

                            <ShippingTimeline />


                        </div>

                        {/* FAQ Section */}
                        <ProductFAQ faqs={product.faqs || []} />

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h2>
                            <div
                                className="text-gray-600 prose prose-sm"
                                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                            />
                        </div>

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
            <StickyProductBar product={product} />
        </div>
    );
}
