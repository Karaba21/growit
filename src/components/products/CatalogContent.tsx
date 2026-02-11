"use client";

import React, { useState, useMemo } from 'react';
import { CatalogFilters } from '../../components/products/CatalogFilters';
import { CatalogSort } from '../../components/products/CatalogSort';
import { ProductGrid } from '../../components/products/ProductGrid';
import type { FilterState, SortOption, Product } from '../../types/product';

interface CatalogContentProps {
    initialProducts: Product[];
}

export default function CatalogContent({ initialProducts }: CatalogContentProps) {
    const [filters, setFilters] = useState<FilterState>({
        availability: 'all',
        priceRange: { min: 0, max: 100000 },
        productType: [],
        tags: [],
        plantCounts: [],
    });

    const [sort, setSort] = useState<SortOption>('title-asc');
    const [category, setCategory] = useState<string | null>(null);

    const availablePlantCounts = useMemo(() => {
        const counts = new Set<number>();
        initialProducts.forEach((p) => {
            if (p.plantsCount !== null) {
                counts.add(p.plantsCount);
            }
        });
        return Array.from(counts).sort((a, b) => a - b);
    }, [initialProducts]);

    const filteredProducts = useMemo(() => {
        let result = [...initialProducts];

        // Filter by category (Indoor, Outdoor, Insumos)
        if (category) {
            result = result.filter((p) => {
                const cat = category.toLowerCase();
                return p.collections?.some(c =>
                    c.handle.toLowerCase() === cat ||
                    c.title.toLowerCase().includes(cat)
                );
            });
        }

        // Filter by availability
        if (filters.availability !== 'all') {
            result = result.filter((p) => {
                if (filters.availability === 'available') return p.availableForSale;
                if (filters.availability === 'soldout') return !p.availableForSale;
                return true;
            });
        }

        // Filter by plant counts
        if (filters.plantCounts.length > 0) {
            result = result.filter((p) => p.plantsCount !== null && filters.plantCounts.includes(p.plantsCount));
        }

        // Filter by price
        result = result.filter((p) => {
            const price = parseFloat(p.priceRange.minVariantPrice);
            return price >= filters.priceRange.min && price <= filters.priceRange.max;
        });

        // Sort
        result.sort((a, b) => {
            switch (sort) {
                case 'title-asc':
                    return a.title.localeCompare(b.title);
                case 'title-desc':
                    return b.title.localeCompare(a.title);
                case 'price-asc':
                    return parseFloat(a.priceRange.minVariantPrice) - parseFloat(b.priceRange.minVariantPrice);
                case 'price-desc':
                    return parseFloat(b.priceRange.minVariantPrice) - parseFloat(a.priceRange.minVariantPrice);
                case 'created-asc':
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                case 'created-desc':
                default:
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }
        });

        return result;
    }, [filters, sort, category, initialProducts]);

    const categories = [
        { id: 'indoor', label: 'Indoor' },
        { id: 'outdoor', label: 'Outdoor' },
        { id: 'insumos', label: 'Insumos' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Catálogo de Productos
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Explora nuestra selección completa de kits y accesorios
                    </p>

                    {/* Category Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setCategory(null)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${category === null
                                ? 'bg-gray-900 text-white'
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-900 hover:text-gray-900'
                                }`}
                        >
                            Todos
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setCategory(category === cat.id ? null : cat.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${category === cat.id
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-900 hover:text-gray-900'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filters and Sort Bar */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <CatalogFilters
                            filters={filters}
                            onFilterChange={setFilters}
                            availablePlantCounts={availablePlantCounts}
                        />
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">
                                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
                            </span>
                            <CatalogSort onSortChange={setSort} />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div>
                    {/* Product Grid */}
                    <div className="w-full">
                        <ProductGrid products={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
    );
}
