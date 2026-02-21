import { MetadataRoute } from 'next';
import { getProducts } from '../lib/shopify';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://growituruguay.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products = await getProducts();

    const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/producto/${product.handle}`,
        lastModified: new Date(product.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/catalogo`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        ...productEntries,
    ];
}
