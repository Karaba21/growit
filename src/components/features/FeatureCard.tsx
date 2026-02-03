import React from 'react';
import type { Feature } from '../../types/product';

interface FeatureCardProps {
    feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">
                {feature.description}
            </p>
        </div>
    );
};
