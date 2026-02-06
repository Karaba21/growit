import { NextRequest, NextResponse } from 'next/server';
import { createCart } from '@/lib/shopify';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { lines } = body;

        if (!lines || !Array.isArray(lines)) {
            return NextResponse.json(
                { error: 'Invalid request: lines array is required' },
                { status: 400 }
            );
        }

        const cart = await createCart(lines);

        if (!cart) {
            return NextResponse.json(
                { error: 'Failed to create cart' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            cartId: cart.id,
            checkoutUrl: cart.checkoutUrl,
        });
    } catch (error) {
        console.error('Error in cart/create:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
