"use client";

import React, { useState, useMemo } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
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
                <div className="mb-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Catálogo de Productos
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Explora nuestra selección completa de kits y accesorios
                    </p>

                    {/* Category Selector - Single Item with Arrows */}
                    <div className="flex items-center justify-center gap-2">
                        <button
                            onClick={() => {
                                const allCategories = [{ id: null, label: 'Todos' }, ...categories];
                                const currentIndex = allCategories.findIndex(c => c.id === category);
                                const prevIndex = (currentIndex - 1 + allCategories.length) % allCategories.length;
                                setCategory(allCategories[prevIndex].id);
                            }}
                            className="p-1 text-gray-400 hover:text-gray-900 transition-colors"
                            aria-label="Categoría anterior"
                        >
                            <CaretLeft size={20} />
                        </button>

                        <div className="min-w-[100px] text-center">
                            <span className="text-base font-display font-bold text-gray-900 uppercase tracking-wider">
                                {category ? categories.find(c => c.id === category)?.label : 'Todos'}
                            </span>
                        </div>

                        <button
                            onClick={() => {
                                const allCategories = [{ id: null, label: 'Todos' }, ...categories];
                                const currentIndex = allCategories.findIndex(c => c.id === category);
                                const nextIndex = (currentIndex + 1) % allCategories.length;
                                setCategory(allCategories[nextIndex].id);
                            }}
                            className="p-1 text-gray-400 hover:text-gray-900 transition-colors"
                            aria-label="Siguiente categoría"
                        >
                            <CaretRight size={20} />
                        </button>
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
                            <span className="text-sm text-gray-500 font-accent">
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
