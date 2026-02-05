import React from 'react';
import type { Feature } from '../../types/product';

interface FeatureCardProps {
    feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
    return (
        <div className="bg-surface p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-primary-100">
            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 border border-primary-100">
                <span className="text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-lg font-bold font-display text-primary mb-2">
                {feature.title}
            </h3>
            <p className="text-text-main font-body text-sm opacity-90">
                {feature.description}
            </p>
        </div>
    );
};
