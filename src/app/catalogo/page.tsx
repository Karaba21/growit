
import { Suspense } from 'react';
import { getProducts } from '../../lib/shopify';
import CatalogContent from '../../components/products/CatalogContent';

export const revalidate = 3600; // Revalidate every hour

export default async function CatalogPage() {
    const products = await getProducts();

    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center py-20">Cargando catálogo...</div>}>
            <CatalogContent initialProducts={products} />
        </Suspense>
    );
}
