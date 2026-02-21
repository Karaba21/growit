"use client";

import React, { useState, useEffect } from 'react';
import { Faders, X, CaretDown, CaretRight } from '@phosphor-icons/react/dist/ssr';
import type { FilterState, SortOption, SortConfig } from '../../types/product';

interface MobileFilterDrawerProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    availablePlantCounts: number[];
    sort: SortOption;
    onSortChange: (sort: SortOption) => void;
    productsCount: number;
}

const sortOptions: SortConfig[] = [
    { value: 'title-asc', label: 'Alfabéticamente, A-Z' },
    { value: 'title-desc', label: 'Alfabéticamente, Z-A' },
    { value: 'price-asc', label: 'Precio, menor a mayor' },
    { value: 'price-desc', label: 'Precio, mayor a menor' },
    { value: 'created-desc', label: 'Más recientes' },
    { value: 'created-asc', label: 'Más antiguos' },
];

export const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = ({
    filters,
    onFilterChange,
    availablePlantCounts,
    sort,
    onSortChange,
    productsCount,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSection, setOpenSection] = useState<string | null>(null);

    // Local state for filters so we only apply on "Aplicar"
    const [localFilters, setLocalFilters] = useState<FilterState>(filters);
    const [localSort, setLocalSort] = useState<SortOption>(sort);

    // Sync local state when opened
    useEffect(() => {
        if (isOpen) {
            setLocalFilters(filters);
            setLocalSort(sort);
            document.body.style.overflow = 'hidden';
            document.body.classList.add('filter-drawer-open');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('filter-drawer-open');
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('filter-drawer-open');
        };
    }, [isOpen, filters, sort]);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleApply = () => {
        onFilterChange(localFilters);
        onSortChange(localSort);
        setIsOpen(false);
    };

    const handleClearAll = () => {
        const clearedFilters = {
            ...localFilters,
            availability: 'all' as const,
            plantCounts: [],
            priceRange: { min: 0, max: 100000 },
        };
        setLocalFilters(clearedFilters);
    };

    return (
        <div className="md:hidden w-full mb-6">
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-between w-full py-3 px-4 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium"
            >
                <div className="flex items-center gap-2">
                    <Faders className="w-5 h-5 text-gray-500" />
                    Filtrar y ordenar
                </div>
                <span className="text-gray-500 font-normal">
                    {productsCount} {productsCount === 1 ? 'producto' : 'productos'}
                </span>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-white animate-in slide-in-from-bottom duration-300">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
                        <div className="flex-1 text-center pl-8">
                            <h2 className="text-base font-medium font-display text-gray-900">Filtrar y ordenar</h2>
                            <p className="text-xs text-gray-500 mt-1">{productsCount} {productsCount === 1 ? 'producto' : 'productos'}</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-gray-400 hover:text-gray-900"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="divide-y divide-gray-100">

                            {/* Disponibilidad */}
                            <div>
                                <button
                                    onClick={() => toggleSection('availability')}
                                    className="flex w-full items-center justify-between px-6 py-4 text-sm font-medium text-gray-900"
                                >
                                    Disponibilidad
                                    {openSection === 'availability' ? <CaretDown className="w-4 h-4 text-gray-400" /> : <CaretRight className="w-4 h-4 text-gray-400" />}
                                </button>
                                {openSection === 'availability' && (
                                    <div className="px-6 pb-4 space-y-3">
                                        {['all', 'available', 'soldout'].map((opt) => (
                                            <label key={opt} className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    checked={localFilters.availability === opt}
                                                    onChange={() => setLocalFilters({ ...localFilters, availability: opt as any })}
                                                    className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                                                />
                                                <span className="text-sm text-gray-600">
                                                    {opt === 'all' ? 'Todos' : opt === 'available' ? 'Disponibles' : 'Agotados'}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Precio */}
                            <div>
                                <button
                                    onClick={() => toggleSection('price')}
                                    className="flex w-full items-center justify-between px-6 py-4 text-sm font-medium text-gray-900"
                                >
                                    Precio
                                    {openSection === 'price' ? <CaretDown className="w-4 h-4 text-gray-400" /> : <CaretRight className="w-4 h-4 text-gray-400" />}
                                </button>
                                {openSection === 'price' && (
                                    <div className="px-6 pb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1">
                                                <label className="text-xs text-gray-500 mb-1 block">Mínimo</label>
                                                <div className="relative">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                    <input
                                                        type="number"
                                                        value={localFilters.priceRange.min || ''}
                                                        onChange={(e) => setLocalFilters({
                                                            ...localFilters,
                                                            priceRange: { ...localFilters.priceRange, min: Number(e.target.value) }
                                                        })}
                                                        className="w-full pl-6 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-900"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-xs text-gray-500 mb-1 block">Máximo</label>
                                                <div className="relative">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                    <input
                                                        type="number"
                                                        value={localFilters.priceRange.max === 100000 ? '' : localFilters.priceRange.max}
                                                        onChange={(e) => setLocalFilters({
                                                            ...localFilters,
                                                            priceRange: { ...localFilters.priceRange, max: Number(e.target.value) }
                                                        })}
                                                        className="w-full pl-6 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-900"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Cantidad de plantas */}
                            {availablePlantCounts.length > 0 && (
                                <div>
                                    <button
                                        onClick={() => toggleSection('plants')}
                                        className="flex w-full items-center justify-between px-6 py-4 text-sm font-medium text-gray-900"
                                    >
                                        Cantidad de plantas
                                        {openSection === 'plants' ? <CaretDown className="w-4 h-4 text-gray-400" /> : <CaretRight className="w-4 h-4 text-gray-400" />}
                                    </button>
                                    {openSection === 'plants' && (
                                        <div className="px-6 pb-4 space-y-3">
                                            {availablePlantCounts.map((count) => (
                                                <label key={count} className="flex items-center gap-3">
                                                    <input
                                                        type="checkbox"
                                                        checked={localFilters.plantCounts.includes(count)}
                                                        onChange={(e) => {
                                                            const newCounts = e.target.checked
                                                                ? [...localFilters.plantCounts, count]
                                                                : localFilters.plantCounts.filter(c => c !== count);
                                                            setLocalFilters({ ...localFilters, plantCounts: newCounts });
                                                        }}
                                                        className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                                                    />
                                                    <span className="text-sm text-gray-600">
                                                        {count} {count === 1 ? 'planta' : 'plantas'}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Ordenar por */}
                            <div>
                                <button
                                    onClick={() => toggleSection('sort')}
                                    className="flex w-full items-center justify-between px-6 py-4 text-sm font-medium text-gray-900"
                                >
                                    <span className="flex items-center gap-2">
                                        Ordenar por:
                                        <span className="text-gray-500 font-normal">
                                            {sortOptions.find(o => o.value === localSort)?.label.split(',')[0] || ''}
                                        </span>
                                    </span>
                                    {openSection === 'sort' ? <CaretDown className="w-4 h-4 text-gray-400" /> : <CaretRight className="w-4 h-4 text-gray-400" />}
                                </button>
                                {openSection === 'sort' && (
                                    <div className="px-6 pb-4 space-y-3">
                                        {sortOptions.map((opt) => (
                                            <label key={opt.value} className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    checked={localSort === opt.value}
                                                    onChange={() => setLocalSort(opt.value)}
                                                    className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                                                />
                                                <span className="text-sm text-gray-600">{opt.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="border-t border-gray-100 p-4 pb-8 flex items-center justify-between gap-4 bg-white">
                        <button
                            onClick={handleClearAll}
                            className="text-sm font-medium text-gray-600 hover:text-gray-900"
                        >
                            Eliminar todos
                        </button>
                        <button
                            onClick={handleApply}
                            className="bg-[#1f4037] text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-[#1f4037]/90 transition-colors"
                        >
                            Aplicar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
