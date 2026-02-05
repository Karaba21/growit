// TypeScript types designed to match Shopify Storefront API schema
// Ready for future integration with Shopify

export interface ProductImage {
    id: string;
    url: string;
    altText: string | null;
    width: number;
    height: number;
}

export interface ProductVariant {
    id: string;
    title: string;
    price: string;
    compareAtPrice: string | null;
    availableForSale: boolean;
    sku: string | null;
    selectedOptions: {
        name: string;
        value: string;
    }[];
}

export interface Product {
    id: string;
    handle: string; // slug for URL
    title: string;
    description: string;
    descriptionHtml: string;
    vendor: string;
    productType: string;
    tags: string[];
    priceRange: {
        minVariantPrice: string;
        maxVariantPrice: string;
    };
    images: ProductImage[];
    variants: ProductVariant[];
    availableForSale: boolean;
    featuredImage: ProductImage | null;
    createdAt: string;
    updatedAt: string;
}

// Filter types
export interface FilterState {
    availability: 'all' | 'available' | 'soldout';
    priceRange: {
        min: number;
        max: number;
    };
    productType: string[];
    tags: string[];
}

// Sort options
export type SortOption =
    | 'title-asc'
    | 'title-desc'
    | 'price-asc'
    | 'price-desc'
    | 'created-asc'
    | 'created-desc';

export interface SortConfig {
    value: SortOption;
    label: string;
}

// FAQ types
export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

// Feature card types
export interface Feature {
    id: string;
    icon: string; // Icon name or component
    title: string;
    description: string;
}

// How it works step types
export interface HowItWorksStep {
    id: string;
    stepNumber: number;
    title: string;
    description: string;
}
