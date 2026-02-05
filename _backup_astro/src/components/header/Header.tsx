import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SearchIcon } from './SearchIcon';
import { CartIcon } from './CartIcon';

interface HeaderProps {
    currentPath?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPath }) => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Logo />

                    {/* Navigation */}
                    <Navigation currentPath={currentPath} />

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                        <SearchIcon />
                        <CartIcon itemCount={0} />
                    </div>
                </div>
            </div>
        </header>
    );
};
