import React from 'react';
import Link from 'next/link';

interface NavigationProps {
    currentPath?: string;
}

const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/catalogo', label: 'Cátalogo' },
    { href: '/#resenas', label: 'Reseñas' },
    { href: '/#pickup', label: 'Pickup' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentPath = '/' }) => {
    return (
        <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
                const isActive = currentPath === link.href;
                // Use Link for internal routes, a tag for anchors
                const isInternal = link.href.startsWith('/');

                if (isInternal) {
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-base font-medium transition-colors duration-200 ${isActive
                                ? 'text-accent'
                                : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {link.label}
                        </Link>
                    );
                }

                return (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`text-base font-medium transition-colors duration-200 ${isActive
                            ? 'text-accent'
                            : 'text-white/90 hover:text-white'
                            }`}
                    >
                        {link.label}
                    </a>
                );
            })}
        </nav>
    );
};
