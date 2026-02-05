import React from 'react';

const PaymentCarousel = () => {
    const images = [
        { src: '/masterr.webp', alt: 'Mastercard' },
        { src: '/VISA-Logo.png', alt: 'Visa' },
        { src: '/mercadopagoo.png', alt: 'Mercado Pago' },
        { src: '/abitab-removebg-preview.png', alt: 'Abitab' },
    ];

    // Let's make a set of items that is reasonably long.
    const longSet = [...images, ...images, ...images, ...images, ...images, ...images];

    return (
        <div className="w-full bg-beige overflow-hidden py-3 relative z-20 transition-all duration-300">
            {/* Text Overlay */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 z-30 bg-beige px-8 flex items-center justify-center border-x border-primary/5">
                <span className="block md:inline text-primary font-bold text-xs md:text-base text-center uppercase tracking-wider leading-tight whitespace-nowrap">
                    Hasta 12 cuotas <br className="md:hidden" /> sin intereses
                </span>
            </div>

            {/* Container for the scrolling content */}
            <div className="flex w-max animate-scroll-infinite">
                {/* First set */}
                {longSet.map((img, index) => (
                    <div key={`set1-${index}`} className="flex items-center justify-center mx-4 md:mx-10 select-none opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="h-8 md:h-10 w-auto object-contain"
                        />
                    </div>
                ))}
                {/* Second set (duplicate for looping) */}
                {longSet.map((img, index) => (
                    <div key={`set2-${index}`} className="flex items-center justify-center mx-4 md:mx-10 select-none opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="h-8 md:h-10 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentCarousel;
