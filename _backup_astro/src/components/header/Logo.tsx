import React from 'react';

export const Logo: React.FC = () => {
    return (
        <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Growit</span>
        </a>
    );
};
