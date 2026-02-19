export interface CartLine {
    id: string;
    quantity: number;
    merchandise: {
        id: string;
        title: string;
        selectedOptions: {
            name: string;
            value: string;
        }[];
        product: {
            id: string;
            handle: string;
            title: string;
            featuredImage: {
                url: string;
                altText: string | null;
            };
        };
    };
    cost: {
        totalAmount: {
            amount: string;
            currencyCode: string;
        };
    };
}

export interface Cart {
    id: string;
    checkoutUrl: string;
    cost: {
        subtotalAmount: {
            amount: string;
            currencyCode: string;
        };
        totalAmount: {
            amount: string;
            currencyCode: string;
        };
        totalTaxAmount: {
            amount: string;
            currencyCode: string;
        } | null;
    };
    lines: CartLine[];
    totalQuantity: number;
}

export interface CartItem {
    id: string;
    handle: string;
    title: string;
    price: number;
    compareAtPrice?: number;
    images: {
        url: string;
        altText: string;
    }[];
    variantId: string;
    quantity: number;
    collections?: {
        id: string;
        title: string;
        handle: string;
    }[];
}
