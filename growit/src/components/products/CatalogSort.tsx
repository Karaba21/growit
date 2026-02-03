import React, { useState } from 'react';
import type { SortOption, SortConfig } from '../../types/product';

interface CatalogSortProps {
    onSortChange: (sort: SortOption) => void;
}

const sortOptions: SortConfig[] = [
    { value: 'title-asc', label: 'Nombre (A-Z)' },
    { value: 'title-desc', label: 'Nombre (Z-A)' },
    { value: 'price-asc', label: 'Precio (menor a mayor)' },
    { value: 'price-desc', label: 'Precio (mayor a menor)' },
    { value: 'created-desc', label: 'Más recientes' },
    { value: 'created-asc', label: 'Más antiguos' },
];

export const CatalogSort: React.FC<CatalogSortProps> = ({ onSortChange }) => {
    const [selectedSort, setSelectedSort] = useState<SortOption>('created-desc');

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value as SortOption;
        setSelectedSort(newSort);
        onSortChange(newSort);
    };

    return (
        <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                Ordenar por:
            </label>
            <select
                id="sort"
                value={selectedSort}
                onChange={handleSortChange}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
                {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
