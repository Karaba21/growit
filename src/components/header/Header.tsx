"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
        // If it's a hash link on the CURRENT page, we smoothly scroll to it.
        if (href.startsWith('/#')) {
            const targetId = href.replace('/#', '');
            const elem = document.getElementById(targetId);

            if (pathname === '/' && elem) {
                // We use Next.js link behavior but also scroll
                // Account for the sticky header height (80px)
                const headerOffset = 80;
                const elementPosition = elem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Close menu immediately for ALL links
        // We delay slightly to allow Next.js linker to pickup before component unmounts
        setTimeout(() => {
            setIsMenuOpen(false);
            setExpandedLink(null);
        }, 150);
    };

    return (
        <header className="bg-primary shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 relative">
                    {/* Mobile Menu Button - Left */}
                    <div className="md:hidden flex items-center justify-start w-[80px]">
                        <button
                            className="p-2 -ml-2 text-white hover:text-accent transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menu"
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo - Centered on Mobile, Left on Desktop */}
                    <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-auto md:w-[200px] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                        <Logo />
                    </div>

                    {/* Navigation - Center (Desktop) */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <Navigation />
                    </div>

                    {/* Actions - Right */}
                    <div className="flex items-center justify-end w-[80px] md:w-[200px] space-x-4 text-white ml-auto md:ml-0">
                        <CartIcon />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden fixed top-20 left-0 w-full bg-primary z-40 overflow-y-auto max-h-[calc(100vh-5rem)] border-t border-white/10 shadow-2xl rounded-b-2xl"
                    >
                        <div className="flex flex-col px-6 py-6 space-y-2 pb-8">
                            {navLinks.map((link, i) => {
                                const isActive = link.href === '/'
                                    ? pathname === '/'
                                    : link.href.startsWith('/#')
                                        ? false
                                        : pathname.startsWith(link.href);

                                const isExpanded = expandedLink === link.href;

                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.3 }}
                                        className="flex flex-col w-full border-b border-white/10 last:border-none py-4"
                                    >
                                        <Link
                                            href={link.href}
                                            prefetch={false}
                                            onClick={(e) => {
                                                if (link.subLinks) {
                                                    e.preventDefault();
                                                    setExpandedLink(isExpanded ? null : link.href);
                                                } else {
                                                    setIsMenuOpen(false);
                                                }
                                            }}
                                            className={`text-3xl font-display flex items-center justify-between w-full text-left transition-colors ${isActive ? 'text-white' : 'text-white/80'} hover:text-white`}
                                        >
                                            <span>{link.label}</span>
                                            {link.subLinks && (
                                                <motion.svg
                                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 text-white/60"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </motion.svg>
                                            )}
                                        </Link>

                                        <AnimatePresence>
                                            {link.subLinks && isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="flex flex-col space-y-4 overflow-hidden mt-4 pl-4"
                                                >
                                                    {link.subLinks.map((subLink, subIndex) => (
                                                        <motion.div
                                                            key={subLink.href}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: subIndex * 0.05 + 0.1 }}
                                                        >
                                                            <Link
                                                                href={subLink.href}
                                                                prefetch={false}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className={`text-xl font-body text-white/70 hover:text-white transition-colors block w-full`}
                                                            >
                                                                {subLink.label}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
