'use client';

import React, { useRef, useState, useCallback } from 'react';
import { Star, StarHalf, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { reviews } from '../../lib/reviews';

export const ProductMiniReviews: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = useCallback(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollPosition = container.scrollLeft;
            const firstChild = container.firstElementChild as HTMLElement;
            if (firstChild) {
                const itemWidth = firstChild.offsetWidth;
                const gap = 24; // gap-6
                const snapWidth = itemWidth + gap;
                const newIndex = Math.round(scrollPosition / snapWidth);
                setActiveIndex(newIndex);
            }
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.offsetWidth;
            container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="mt-4 pb-4 border-b border-gray-100 relative group">

            {/* Navigation Buttons for Desktop */}
            <button
                onClick={() => scroll('left')}
                className="hidden sm:flex absolute -left-4 top-[45%] -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-white border border-gray-200 shadow-sm rounded-full text-gray-500 hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Anterior reseña"
            >
                <CaretLeft size={16} weight="bold" />
            </button>
            <button
                onClick={() => scroll('right')}
                className="hidden sm:flex absolute -right-4 top-[45%] -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-white border border-gray-200 shadow-sm rounded-full text-gray-500 hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Siguiente reseña"
            >
                <CaretRight size={16} weight="bold" />
            </button>

            <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-2 hide-scrollbar scroll-smooth"
            >
                {reviews.map((review) => (
                    <div key={review.id} className="w-[85vw] sm:w-[350px] shrink-0 flex-none snap-center flex flex-row items-center gap-4 text-left border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <img
                            src={review.image || review.avatar}
                            alt={review.author}
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0"
                        />
                        <div className="flex flex-col pt-1 flex-1 min-w-0 pr-2">
                            <p className="text-[14px] sm:text-[15px] text-gray-900 font-bold mb-1 leading-snug whitespace-normal break-words">
                                {review.quote}
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-sm italic text-gray-500 whitespace-nowrap">
                                    {review.author}
                                </span>
                                <div className="flex text-[#FFD700] whitespace-nowrap">
                                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                                        <Star key={i} size={14} weight="fill" />
                                    ))}
                                    {review.rating % 1 !== 0 && (
                                        <StarHalf size={14} weight="fill" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-1.5 mt-4">
                {reviews.map((_, i) => (
                    <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeIndex === i ? 'bg-gray-800' : 'bg-gray-300'}`}
                    ></div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </div>
    );
};
