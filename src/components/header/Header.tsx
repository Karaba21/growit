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
        <header className="bg-primary shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Left */}
                    <div className="flex-shrink-0 flex items-center justify-start w-[200px]">
                        <Logo />
                    </div>

                    {/* Navigation - Center */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <Navigation currentPath={currentPath} />
                    </div>

                    {/* Actions - Right */}
                    <div className="flex items-center justify-end w-[200px] space-x-4 text-white">
                        <SearchIcon />
                        <CartIcon itemCount={0} />
                    </div>
                </div>
            </div>
        </header>
    );
};
