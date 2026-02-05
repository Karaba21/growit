import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { mockProducts } from '../../../data/mockProducts';

// Generate static params for all products (optional but good for SSG)
export async function generateStaticParams() {
    return mockProducts.map((product) => ({
        handle: product.handle,
    }));
}

interface ProductPageProps {
    params: Promise<{ handle: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { handle } = await params;
    const product = mockProducts.find((p) => p.handle === handle);

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
                    <div>
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                            {product.featuredImage && (
                                <img
                                    src={product.featuredImage.url}
                                    alt={product.featuredImage.altText || product.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>

                        {/* Thumbnail Gallery (placeholder) */}
                        <div className="grid grid-cols-4 gap-2">
                            {product.images?.slice(0, 4).map((image) => (
                                <div key={image.url} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                                    <img
                                        src={image.url}
                                        alt={image.altText || ''}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

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
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl font-bold text-gray-900">
                                    ${price.toFixed(2)}
                                </span>
                                {compareAtPrice && compareAtPrice > price && (
                                    <span className="text-xl text-gray-500 line-through">
                                        ${compareAtPrice.toFixed(2)}
                                    </span>
                                )}
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

                        {/* Product Details */}
                        <div className="mb-8 space-y-2">
                            <div className="flex items-center text-sm">
                                <span className="text-gray-600 w-24">SKU:</span>
                                <span className="text-gray-900 font-medium">{product.variants[0]?.sku || 'N/A'}</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="text-gray-600 w-24">Categoría:</span>
                                <span className="text-gray-900 font-medium">{product.productType}</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="text-gray-600 w-24">Marca:</span>
                                <span className="text-gray-900 font-medium">{product.vendor}</span>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="space-y-4">
                            {/* Note: Button might need 'use client' wrapper if we add onClick logic here without creating a separate Client Component */}
                            {/* Client logic (e.g., adding to context) should move to a Client Component like <AddToCartButton />. 
                   For migration, we'll keep it simple or wrap Button if needed. 
                   Wait, Button is 'use client' ? No, Button.tsx didn't have 'use client'.
                   If I add onClick, I need 'use client' in the PARENT (this page) or in the Button.
                   I'll mark this page as 'use client' OR make a client component for the actions.
                   Making the whole page client is easiest for migration unless I want strict SC behavior.
                   Actually, let's keep it Server Component effectively and use a Client Component for the buttons.
                   Wait, I don't want to overengineer. The user just wants it working. 
                   If passing onClick e.g. console.log, I need client.
                   The original code had `client:load`. 
                   Let's make a specialized `ProductActions.tsx` if needed, OR just make this page `use client` if interactivity is high.
                   But `generateStaticParams` works with Server Components.
                   Let's make this page SERVER component, and inline the buttons as is. 
                   Button component is standard. If I add onClick={() => {}} it fails on server.
                   For now, no onClick handlers are defined in my code above, so it renders fine. 
                   But I should probably add interactivity later. 
                   For now, I'll just render the buttons.
               */}
                            <Button
                                size="lg"
                                disabled={!product.availableForSale}
                                className="w-full"
                            >
                                {product.availableForSale ? 'Agregar al carrito' : 'Agotado'}
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full"
                            >
                                Agregar a favoritos
                            </Button>
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
        </div>
    );
}
