import React from 'react';
import Link from 'next/link';

interface ProductSizePickerProps {
    currentHandle: string;
}

const OUTDOOR_PRODUCTS = [
    { size: '20', handle: 'grow-20' },
    { size: '28', handle: 'grow-28-outdoor' },
    { size: '36', handle: 'grow-36-outdoor' },
];

const INDOOR_PRODUCTS = [
    { size: '20', handle: 'grow-20-indoor' },
    { size: '28', handle: 'grow-28-indoor' },
    { size: '36', handle: 'grow-36-indoor' },
];

export function ProductSizePicker({ currentHandle }: ProductSizePickerProps) {
    let options: { size: string; handle: string }[] | null = null;
    let type = '';

    if (OUTDOOR_PRODUCTS.some((p) => p.handle === currentHandle)) {
        options = OUTDOOR_PRODUCTS;
        type = 'Outdoor';
    } else if (INDOOR_PRODUCTS.some((p) => p.handle === currentHandle)) {
        options = INDOOR_PRODUCTS;
        type = 'Indoor';
    }

    if (!options) {
        return null;
    }

    const currentSize = options.find((p) => p.handle === currentHandle)?.size;

    return (
        <div className="mb-8">
            <div className="flex flex-wrap gap-2 md:gap-3">
                {options.map((option) => {
                    const isActive = option.handle === currentHandle;
                    return (
                        <Link
                            key={option.handle}
                            href={`/producto/${option.handle}`}
                            className={`
                                min-w-[4rem] text-center px-5 py-2.5 rounded-full border transition-colors
                                font-sans text-[15px] font-semibold leading-none flex items-center justify-center
                                ${isActive
                                    ? 'bg-[#151515] text-white border-[#151515]'
                                    : 'bg-white text-[#111111] border-[#D1D5DB] hover:border-[#151515]'
                                }
                            `}
                        >
                            {option.size}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
