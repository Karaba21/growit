import React from 'react';

export const Logo: React.FC = () => {
    return (
        <a href="/" className="flex items-center">
            <div className="relative w-40 h-14 md:w-52 md:h-16">
                <img
                    src="/growituylogoblanco.png"
                    alt="Growit Logo"
                    className="object-contain w-full h-full object-left"
                />
            </div>
        </a>
    );
};
