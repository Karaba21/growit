import React from 'react';

export const Logo: React.FC = () => {
    return (
        <a href="/" className="flex items-center">
            <div className="relative w-32 h-12">
                <img
                    src="/logopng.png"
                    alt="Growit Logo"
                    className="object-contain w-full h-full object-left"
                />
            </div>
        </a>
    );
};
