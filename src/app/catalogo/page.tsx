"use client";

import React, { useState, useMemo } from 'react';
import { CatalogFilters } from '../../components/products/CatalogFilters';
import { CatalogSort } from '../../components/products/CatalogSort';
import { ProductGrid } from '../../components/products/ProductGrid';
import { mockProducts } from '../../data/mockProducts';
import type { FilterState, SortOption } from '../../types/product';

export default function CatalogPage() {
    const [filters, setFilters] = useState<FilterState>({
        availability: 'all',
        priceRange: { min: 0, max: 2000 }, // Adjusted max to likely encompass products
        productType: [],
        tags: [],
    });

    const [sort, setSort] = useState<SortOption>('created-desc');

    const filteredProducts = useMemo(() => {
        let result = [...mockProducts];

        // Filter by availability
        if (filters.availability !== 'all') {
            result = result.filter((p) => {
                if (filters.availability === 'available') return p.availableForSale;
                if (filters.availability === 'soldout') return !p.availableForSale;
                return true;
            });
        }

        // Filter by price
        result = result.filter((p) => {
            const price = parseFloat(p.priceRange.minVariantPrice);
            return price >= filters.priceRange.min && price <= filters.priceRange.max;
        });

        // TODO: Implement other filters (productType, tags) if logic requires

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
    }, [filters, sort]);

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Catálogo de Productos
                    </h1>
                    <p className="text-lg text-gray-600">
                        Explora nuestra selección completa de kits y accesorios
                    </p>
                </div>

                {/* Filters and Sort Bar */}
                <div className="mb-6 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                    <div className="w-full lg:w-auto">
                        <CatalogSort
                            onSortChange={setSort}
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar Filters */}
                    <aside className="lg:col-span-1">
                        <CatalogFilters
                            onFilterChange={setFilters}
                        />
                    </aside>

                    {/* Product Grid */}
                    <div className="lg:col-span-3">
                        <ProductGrid products={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
    );
}
