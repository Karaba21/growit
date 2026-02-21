'use client';

import React, { useRef, useState, useCallback } from 'react';
import { Quotes, Star, StarHalf, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { reviews } from '../../lib/reviews';

export const ReviewsSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstChild = container.firstElementChild as HTMLElement;
            if (firstChild) {
                // width + gap (24px for gap-6)
                const scrollAmount = firstChild.offsetWidth + 24;
                container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleScroll = useCallback(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollPosition = container.scrollLeft;
            const firstChild = container.firstElementChild as HTMLElement;
            if (firstChild) {
                const itemWidth = firstChild.offsetWidth;
                const gap = 24;
                const snapWidth = itemWidth + gap;
                const newIndex = Math.round(scrollPosition / snapWidth);
                setActiveIndex(newIndex);
            }
        }
    }, []);

    return (
        <section id="resenas" className="py-12 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-12 relative">

                {/* Navigation Buttons */}
                <button
                    onClick={() => scroll('left')}
                    className="hidden sm:flex absolute left-0 top-[55%] -translate-y-1/2 z-10 w-10 h-10 items-center justify-center text-gray-400 hover:text-gray-800 transition-colors"
                    aria-label="Ver reseñas anteriores"
                >
                    <CaretLeft size={28} weight="bold" />
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="hidden sm:flex absolute right-0 top-[55%] -translate-y-1/2 z-10 w-10 h-10 items-center justify-center text-gray-400 hover:text-gray-800 transition-colors"
                    aria-label="Ver reseñas siguientes"
                >
                    <CaretRight size={28} weight="bold" />
                </button>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-primary mb-4 uppercase tracking-widest">
                        +1000 cultivadores
                    </h2>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar scroll-smooth"
                >
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-none snap-start bg-[#F9F9F9] rounded-2xl flex flex-col items-center pb-8 border border-gray-100 shadow-sm"
                        >

                            {/* Image Header with Quote Icon */}
                            <div className="relative w-full h-80 mb-8">
                                <img
                                    src={review.image}
                                    alt={review.title || review.quote}
                                    className="w-full h-full object-cover rounded-t-2xl"
                                />
                                <div className="absolute -bottom-5 right-6 w-11 h-11 bg-[#b7e360] text-white rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                                    <Quotes size={22} weight="fill" />
                                </div>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 text-[#FFD700] mb-3">
                                {[...Array(Math.floor(review.rating))].map((_, i) => (
                                    <Star key={i} size={18} weight="fill" />
                                ))}
                                {review.rating % 1 !== 0 && (
                                    <StarHalf size={18} weight="fill" />
                                )}
                            </div>

                            {/* Title */}
                            {review.title && (
                                <h4 className="font-serif text-lg text-gray-900 mb-3 tracking-wide">
                                    {review.title}
                                </h4>
                            )}

                            {/* Quote */}
                            <p className="text-gray-700 font-body text-center px-6 mb-8 text-sm leading-relaxed">
                                {review.quote}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 mt-auto">
                                <img
                                    src={review.avatar}
                                    alt={review.author}
                                    className="w-8 h-8 rounded-full object-cover shadow-sm"
                                />
                                <span className="font-bold text-gray-900 text-sm italic">
                                    {review.author}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-2">
                    {/* On Desktop/Tablet: Show 3 dots assuming ~3 items per slide block */}
                    <div className="hidden sm:flex justify-center gap-2">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${Math.floor(activeIndex / 3) === i ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                        ))}
                    </div>
                    {/* On Mobile: Show 1 dot per review */}
                    <div className="flex sm:hidden justify-center gap-2">
                        {reviews.map((_, i) => (
                            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeIndex === i ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                        ))}
                    </div>
                </div>
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
        </section>
    );
};
