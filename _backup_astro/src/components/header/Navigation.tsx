import React from 'react';

interface NavigationProps {
    currentPath?: string;
}

const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '#contacto', label: 'Contacto' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentPath = '/' }) => {
    return (
        <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
                const isActive = currentPath === link.href;
                return (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`text-sm font-medium transition-colors duration-200 ${isActive
                                ? 'text-primary-600'
                                : 'text-gray-700 hover:text-primary-600'
                            }`}
                    >
                        {link.label}
                    </a>
                );
            })}
        </nav>
    );
};
