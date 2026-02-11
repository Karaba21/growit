import React, { useState, useRef, useEffect } from 'react';
import type { FilterState } from '../../types/product';
import { CaretDown, X } from '@phosphor-icons/react/dist/ssr';

interface CatalogFiltersProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    availablePlantCounts: number[];
}

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({ filters, onFilterChange, availablePlantCounts }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const hasActiveFilters =
        filters.plantCounts.length > 0 ||
        filters.priceRange.min > 0 ||
        filters.priceRange.max < 100000;

    const clearFilters = () => {
        onFilterChange({
            ...filters,
            plantCounts: [],
            priceRange: { min: 0, max: 100000 },
        });
        setOpenDropdown(null);
    };

    return (
        <div className="flex items-center gap-6" ref={dropdownRef}>
            <span className="text-sm font-medium text-gray-500">Filtrar:</span>

            {/* Plants Count Filter */}
            {availablePlantCounts.length > 0 && (
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('plants')}
                        className={`flex items-center gap-2 text-sm font-medium ${openDropdown === 'plants' || filters.plantCounts.length > 0
                            ? 'text-gray-900'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        Cantidad de plantas
                        <CaretDown className={`w-4 h-4 transition-transform ${openDropdown === 'plants' ? 'rotate-180' : ''}`} />
                    </button>

                    {openDropdown === 'plants' && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50 p-4 animate-in fade-in zoom-in-95 duration-200">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    {filters.plantCounts.length} seleccionados
                                </span>
                                {filters.plantCounts.length > 0 && (
                                    <button
                                        onClick={() => onFilterChange({ ...filters, plantCounts: [] })}
                                        className="text-xs text-gray-500 hover:text-gray-900 underline"
                                    >
                                        Limpiar
                                    </button>
                                )}
                            </div>
                            <div className="space-y-2 max-h-60 overflow-y-auto">
                                {availablePlantCounts.map((count) => (
                                    <label key={count} className="flex items-center cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={filters.plantCounts.includes(count)}
                                                onChange={(e) => {
                                                    const newPlantCounts = e.target.checked
                                                        ? [...filters.plantCounts, count]
                                                        : filters.plantCounts.filter((c) => c !== count);

                                                    const newFilters = { ...filters, plantCounts: newPlantCounts };
                                                    onFilterChange(newFilters);
                                                }}
                                                className="peer h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                                            />
                                        </div>
                                        <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
                                            {count} {count === 1 ? 'planta' : 'plantas'}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Price Range Filter */}
            <div className="relative">
                <button
                    onClick={() => toggleDropdown('price')}
                    className={`flex items-center gap-2 text-sm font-medium ${openDropdown === 'price' || (filters.priceRange.min > 0 || filters.priceRange.max < 100000)
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    Precio
                    <CaretDown className={`w-4 h-4 transition-transform ${openDropdown === 'price' ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === 'price' && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 z-50 p-4 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Rango de precio
                            </span>
                            {(filters.priceRange.min > 0 || filters.priceRange.max < 100000) && (
                                <button
                                    onClick={() => onFilterChange({ ...filters, priceRange: { min: 0, max: 100000 } })}
                                    className="text-xs text-gray-500 hover:text-gray-900 underline"
                                >
                                    Limpiar
                                </button>
                            )}
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        value={filters.priceRange.min || ''}
                                        onChange={(e) => {
                                            const newFilters = {
                                                ...filters,
                                                priceRange: { ...filters.priceRange, min: Number(e.target.value) },
                                            };
                                            onFilterChange(newFilters);
                                        }}
                                        className="w-full pl-6 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">Min</span>
                                </div>
                                <span className="text-gray-300">-</span>
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        value={filters.priceRange.max === 100000 ? '' : filters.priceRange.max}
                                        onChange={(e) => {
                                            const newFilters = {
                                                ...filters,
                                                priceRange: { ...filters.priceRange, max: Number(e.target.value) },
                                            };
                                            onFilterChange(newFilters);
                                        }}
                                        className="w-full pl-6 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">Max</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {hasActiveFilters && (
                <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 transition-colors ml-2"
                >
                    <X className="w-3 h-3" />
                    Limpiar todos
                </button>
            )}
        </div>
    );
};
