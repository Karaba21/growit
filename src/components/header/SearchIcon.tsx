import React from 'react';

export const SearchIcon: React.FC = () => {
    return (
        <button
            className="p-2 text-white/90 hover:text-accent transition-colors duration-200"
            aria-label="Buscar"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </button>
    );
};
