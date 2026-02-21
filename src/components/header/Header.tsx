"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Navigation, navLinks } from './Navigation';

import { CartIcon } from './CartIcon';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [expandedLink, setExpandedLink] = React.useState<string | null>(null);
    const pathname = usePathname();

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsMenuOpen(false);
        setExpandedLink(null);

        if (href.startsWith('/#')) {
            const targetId = href.replace('/#', '');
            const elem = document.getElementById(targetId);

            if (pathname === '/' && elem) {
                e.preventDefault();
                elem.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState({}, '', href);
            }
        }
    };

    return (
        <header className="bg-primary shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Left */}
                    <div className="flex-shrink-0 flex items-center justify-start w-[200px]">
                        <Logo />
                    </div>

                    {/* Navigation - Center (Desktop) */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <Navigation />
                    </div>

                    {/* Actions - Right */}
                    <div className="flex items-center justify-end w-[200px] space-x-4 text-white">

                        <CartIcon />

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 -mr-2 text-white hover:text-accent transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menu"
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-20 left-0 w-full bg-primary z-40 overflow-y-auto max-h-[calc(100vh-5rem)] border-t border-white/10 shadow-xl">
                    <div className="flex flex-col px-4 py-8 space-y-6">
                        {navLinks.map((link) => {
                            const isActive = link.href === '/'
                                ? pathname === '/'
                                : link.href.startsWith('/#')
                                    ? false
                                    : pathname.startsWith(link.href);

                            const isExpanded = expandedLink === link.href;

                            return (
                                <div key={link.href} className="flex flex-col items-center w-full">
                                    <Link
                                        href={link.subLinks ? '#' : link.href}
                                        onClick={(e) => {
                                            if (link.subLinks) {
                                                e.preventDefault();
                                                setExpandedLink(isExpanded ? null : link.href);
                                            } else {
                                                handleLinkClick(e, link.href);
                                            }
                                        }}
                                        className={`text-2xl font-medium text-center py-2 transition-colors flex items-center justify-center gap-2 ${isActive ? 'text-accent' : 'text-white'
                                            }`}
                                    >
                                        {link.label}
                                        {link.subLinks && (
                                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </Link>

                                    {link.subLinks && isExpanded && (
                                        <div className="flex flex-col space-y-4 mt-4 items-center w-full">
                                            {link.subLinks.map(subLink => (
                                                <Link
                                                    key={subLink.href}
                                                    href={subLink.href}
                                                    onClick={(e) => handleLinkClick(e, subLink.href)}
                                                    className="text-2xl font-medium text-white/90 hover:text-accent transition-colors block w-full text-center"
                                                >
                                                    {subLink.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
};
