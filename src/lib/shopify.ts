
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch<T>({
    query,
    variables,
}: {
    query: string;
    variables?: Record<string, any>;
}): Promise<{ status: number; body: T } | never> {
    try {
        const result = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
            },
            body: JSON.stringify({ query, variables }),
            cache: 'force-cache', // Allow static generation with revalidation
        });

        const body = await result.json();

        if (body.errors) {
            throw body.errors[0];
        }

        return {
            status: result.status,
            body,
        };
    } catch (e) {
        throw {
            error: e,
            query,
        };
    }
}

export async function getProducts() {
    const query = `
    query Products {
      products(first: 20) {
        edges {
          node {
            id
            handle
            title
            description
            descriptionHtml
            vendor
            productType
            tags
            availableForSale
            createdAt
            updatedAt
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  id
                  url
                  altText
                  width
                  height
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  compareAtPrice {
                    amount
                    currencyCode
                  }
                  sku
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            featuredImage {
              id
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  `;

    const response = await shopifyFetch<{
        data: {
            products: {
                edges: {
                    node: any;
                }[];
            };
        };
    }>({
        query,
    });

    return response.body.data.products.edges.map((edge) => reshapeProduct(edge.node));
}

// Helper to reshape Shopify GQL response to our Product type
const reshapeProduct = (product: any) => {
    const firstVariant = product.variants.edges[0]?.node;
    return {
        ...product,
        priceRange: {
            minVariantPrice: product.priceRange.minVariantPrice.amount,
            maxVariantPrice: product.priceRange.maxVariantPrice.amount,
        },
        images: product.images.edges.map((img: any) => img.node),
        variants: product.variants.edges.map((v: any) => ({
            ...v.node,
            price: v.node.price.amount,
            compareAtPrice: v.node.compareAtPrice?.amount || null,
        })),
        variantId: firstVariant?.id,
    };
};

export async function getProduct(handle: string) {
    const query = `
    query Product($handle: String!) {
      product(handle: $handle) {
        id
        handle
        title
        description
        descriptionHtml
        vendor
        productType
        tags
        availableForSale
        createdAt
        updatedAt
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 20) {
          edges {
            node {
              id
              url
              altText
              width
              height
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
              sku
              availableForSale
              selectedOptions {
                name
                value
              }
            }
          }
        }
        featuredImage {
          id
          url
          altText
          width
          height
        }
      }
    }
  `;

    const response = await shopifyFetch<{
        data: {
            product: any;
        };
    }>({
        query,
        variables: { handle },
    });

    if (!response.body.data.product) {
        return null;
    }

    return reshapeProduct(response.body.data.product);
}

// Cart Functions

const cartFragment = `
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                id
                handle
                title
                featuredImage {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
`;

export async function createCart(lines?: { merchandiseId: string; quantity: number }[]) {
    const query = `
    mutation createCart($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          ...cart
        }
      }
    }
    ${cartFragment}
  `;

    const response = await shopifyFetch<{
        data: {
            cartCreate: {
                cart: any;
            };
        };
    }>({
        query,
        variables: {
            input: lines ? { lines } : {},
        },
    });

    return reshapeCart(response.body.data.cartCreate.cart);
}

export async function addToCart(cartId: string, lines: { merchandiseId: string; quantity: number }[]) {
    const query = `
    mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ...cart
        }
      }
    }
    ${cartFragment}
  `;

    const response = await shopifyFetch<{
        data: {
            cartLinesAdd: {
                cart: any;
            };
        };
    }>({
        query,
        variables: {
            cartId,
            lines,
        },
    });

    return reshapeCart(response.body.data.cartLinesAdd.cart);
}

export async function removeFromCart(cartId: string, lineIds: string[]) {
    const query = `
    mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          ...cart
        }
      }
    }
    ${cartFragment}
  `;

    const response = await shopifyFetch<{
        data: {
            cartLinesRemove: {
                cart: any;
            };
        };
    }>({
        query,
        variables: {
            cartId,
            lineIds,
        },
    });

    return reshapeCart(response.body.data.cartLinesRemove.cart);
}

export async function updateCart(cartId: string, lines: { id: string; quantity: number }[]) {
    const query = `
    mutation updateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          ...cart
        }
      }
    }
    ${cartFragment}
  `;

    const response = await shopifyFetch<{
        data: {
            cartLinesUpdate: {
                cart: any;
            };
        };
    }>({
        query,
        variables: {
            cartId,
            lines,
        },
    });

    return reshapeCart(response.body.data.cartLinesUpdate.cart);
}

export async function getCart(cartId: string) {
    const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        ...cart
      }
    }
    ${cartFragment}
  `;

    const response = await shopifyFetch<{
        data: {
            cart: any;
        };
    }>({
        query,
        variables: { cartId },
    });

    if (!response.body.data.cart) {
        return null;
    }

    return reshapeCart(response.body.data.cart);
}

const reshapeCart = (cart: any) => {
    return {
        ...cart,
        lines: cart.lines.edges.map((edge: any) => edge.node),
    };
};

