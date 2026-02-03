import React, { useState } from 'react';
import type { FilterState } from '../../types/product';

interface CatalogFiltersProps {
    onFilterChange: (filters: FilterState) => void;
}

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({ onFilterChange }) => {
    const [filters, setFilters] = useState<FilterState>({
        availability: 'all',
        priceRange: { min: 0, max: 200 },
        productType: [],
        tags: [],
    });

    const handleAvailabilityChange = (availability: FilterState['availability']) => {
        const newFilters = { ...filters, availability };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtros</h3>

            {/* Availability Filter */}
            <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Disponibilidad</h4>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="availability"
                            value="all"
                            checked={filters.availability === 'all'}
                            onChange={() => handleAvailabilityChange('all')}
                            className="mr-2"
                        />
                        <span className="text-sm text-gray-600">Todos</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="availability"
                            value="available"
                            checked={filters.availability === 'available'}
                            onChange={() => handleAvailabilityChange('available')}
                            className="mr-2"
                        />
                        <span className="text-sm text-gray-600">Disponibles</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="availability"
                            value="soldout"
                            checked={filters.availability === 'soldout'}
                            onChange={() => handleAvailabilityChange('soldout')}
                            className="mr-2"
                        />
                        <span className="text-sm text-gray-600">Agotados</span>
                    </label>
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Rango de precio</h4>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        placeholder="Min"
                        value={filters.priceRange.min}
                        onChange={(e) => {
                            const newFilters = {
                                ...filters,
                                priceRange: { ...filters.priceRange, min: Number(e.target.value) },
                            };
                            setFilters(newFilters);
                            onFilterChange(newFilters);
                        }}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                        type="number"
                        placeholder="Max"
                        value={filters.priceRange.max}
                        onChange={(e) => {
                            const newFilters = {
                                ...filters,
                                priceRange: { ...filters.priceRange, max: Number(e.target.value) },
                            };
                            setFilters(newFilters);
                            onFilterChange(newFilters);
                        }}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                </div>
            </div>
        </div>
    );
};
