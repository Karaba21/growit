
import { getProducts } from '../../lib/shopify';
import CatalogContent from '../../components/products/CatalogContent';

export const revalidate = 3600; // Revalidate every hour

export default async function CatalogPage() {
    const products = await getProducts();

    return <CatalogContent initialProducts={products} />;
}
