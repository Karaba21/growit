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
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 relative group">
                <img
                    src={selectedImage}
                    alt={title}
                    className="w-full h-full object-contain"
                />

                {images.length > 1 && (
                    <>
                        <button
                            onClick={() => {
                                const currentIndex = images.findIndex(img => img.url === selectedImage);
                                const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
                                setSelectedImage(images[newIndex].url);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-200"
                            aria-label="Imagen anterior"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={() => {
                                const currentIndex = images.findIndex(img => img.url === selectedImage);
                                const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
                                setSelectedImage(images[newIndex].url);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-200"
                            aria-label="Siguiente imagen"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
            </div>

            <div className="grid grid-cols-6 gap-2">
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
