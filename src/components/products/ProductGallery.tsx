'use client';

import React, { useState } from 'react';
import type { ProductImage } from '../../types/product';

interface ProductGalleryProps {
    images: ProductImage[];
    title: string;
    featuredImage?: ProductImage | null;
}

export function ProductGallery({ images, title, featuredImage }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string>(
        featuredImage?.url || images?.[0]?.url || ''
    );

    if (!images || images.length === 0) {
        if (featuredImage) {
            return (
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                        src={featuredImage.url}
                        alt={featuredImage.altText || title}
                        className="w-full h-full object-cover"
                    />
                </div>
            );
        }
        return <div className="aspect-square bg-gray-100 rounded-lg" />;
    }

    return (
        <div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                    src={selectedImage}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                    <button
                        key={image.id || image.url || index}
                        className={`aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity ${selectedImage === image.url ? 'ring-2 ring-primary-600' : ''
                            }`}
                        onClick={() => setSelectedImage(image.url)}
                        type="button"
                        aria-label={`Ver imagen ${index + 1}`}
                    >
                        <img
                            src={image.url}
                            alt={image.altText || `Imagen ${index + 1} de ${title}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
