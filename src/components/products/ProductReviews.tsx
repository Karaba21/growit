'use client';

import React, { useMemo } from 'react';
import { Star } from '@phosphor-icons/react';

export function ProductReviews() {
    // Generate random rating between 4.5 and 4.9
    const rating = useMemo(() => {
        return (Math.random() * (4.9 - 4.5) + 4.5).toFixed(1);
    }, []);

    // Generate random review count between 1000 and 3000
    const reviewCount = useMemo(() => {
        return Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
    }, []);

    return (
        <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        weight="fill"
                        className="w-4 h-4"
                    />
                ))}
            </div>
            <span className="text-sm text-gray-600 font-medium" suppressHydrationWarning>
                {rating} ({reviewCount})
            </span>
        </div>
    );
}
