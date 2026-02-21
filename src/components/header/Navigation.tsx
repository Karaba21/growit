"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navLinks = [
    { href: '/', label: 'Inicio' },
    {
        href: '/catalogo',
        label: 'Catálogo',
        subLinks: [
            { href: '/catalogo?category=indoor', label: 'Indoor' },
            { href: '/catalogo?category=outdoor', label: 'Outdoor' },
            { href: '/catalogo?category=insumos', label: 'Insumos' }
        ]
    },
    { href: '/#beneficios', label: 'Beneficios' },
    { href: '/#resenas', label: 'Reseñas' },
    { href: '/#pickup', label: 'Pickup' },
];

export const Navigation: React.FC = () => {
    const pathname = usePathname();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        // Only handle scrolling for hash links on the home page
        if (href.startsWith('/#')) {
            const targetId = href.replace('/#', '');
            const elem = document.getElementById(targetId);

            if (pathname === '/' && elem) {
                e.preventDefault();
                elem.scrollIntoView({ behavior: 'smooth' });
                // Update URL without full reload
                window.history.pushState({}, '', href);
            }
        }
    };

    return (
        <nav className="hidden md:flex items-center space-x-8 h-full">
            {navLinks.map((link) => {
                // Determine if link is active
                const isActive = link.href === '/'
                    ? pathname === '/'
                    : link.href.startsWith('/#')
                        ? false
                        : pathname.startsWith(link.href);

                return (
                    <div key={link.href} className="relative group h-full flex items-center">
                        <Link
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className={`text-base font-medium transition-colors duration-200 py-2 ${isActive
                                ? 'text-accent'
                                : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {link.label}
                            {link.subLinks && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </Link>

                        {link.subLinks && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                                <div className="py-2">
                                    {link.subLinks.map(subLink => (
                                        <Link
                                            key={subLink.href}
                                            href={subLink.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent font-medium transition-colors"
                                        >
                                            {subLink.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};
