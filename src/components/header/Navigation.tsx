"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/catalogo', label: 'Cátalogo' },
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
        <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
                // Determine if link is active
                // For hash links, strictly they are only "active" if we are on home and that section is visible, 
                // but for simplicity we can just check if pathname matches for non-hash links.
                // For the "Inicio" link, it's active if pathname is exactly '/'
                const isActive = link.href === '/'
                    ? pathname === '/'
                    : link.href.startsWith('/#')
                        ? false // Hash links don't get active state styling usually unless highly sophisticated spy
                        : pathname.startsWith(link.href);

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className={`text-base font-medium transition-colors duration-200 ${isActive
                            ? 'text-accent'
                            : 'text-white/90 hover:text-white'
                            }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
};
