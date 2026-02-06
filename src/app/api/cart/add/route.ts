import { NextRequest, NextResponse } from 'next/server';
import { addToCart } from '@/lib/shopify';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { cartId, merchandiseId, quantity } = body;

        if (!cartId || !merchandiseId) {
            return NextResponse.json(
                { error: 'Invalid request: cartId and merchandiseId are required' },
                { status: 400 }
            );
        }

        const cart = await addToCart(cartId, [
            {
                merchandiseId,
                quantity: quantity || 1,
            },
        ]);

        if (!cart) {
            return NextResponse.json(
                { error: 'Failed to add to cart' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            cartId: cart.id,
            checkoutUrl: cart.checkoutUrl,
        });
    } catch (error) {
        console.error('Error in cart/add:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
