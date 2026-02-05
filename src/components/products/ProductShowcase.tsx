import React, { useState } from 'react';
import Link from 'next/link';

interface ProductShowcaseProps {
    title: string;
    price: string;
    description?: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
    bgColor?: string;
    subtitle?: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
    title,
    price,
    image,
    imageAlt,
    reverse = false,
    bgColor = 'bg-[#F9F7F2]',
    subtitle = "GROW HYDROPONIC"
}) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <section className={`py-20 ${bgColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-xs font-body tracking-widest text-gray-500 uppercase mb-4">
                            {subtitle}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-2">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-500 font-body mb-8">
                            {price}
                        </p>

                        <div className="mb-8">
                            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">QUANTITY</p>
                            <div className="flex items-center border border-gray-200 w-32 bg-white">
                                <button
                                    onClick={handleDecrease}
                                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                    -
                                </button>
                                <div className="flex-1 text-center text-sm font-body">
                                    {quantity}
                                </div>
                                <button
                                    onClick={handleIncrease}
                                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 max-w-sm">
                            <button className="w-full py-3 px-6 border border-gray-300 text-gray-800 font-body text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                                ADD TO CART
                            </button>
                            <button className="w-full py-3 px-6 bg-[#D9704F] text-white font-body text-xs font-bold uppercase tracking-wider hover:bg-[#c56040] transition-colors shadow-sm">
                                BUY NOW
                            </button>
                        </div>

                        <div className="mt-6">
                            <Link href="/catalogo" className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">
                                VIEW FULL DETAILS &gt;
                            </Link>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-square relative flex items-center justify-center bg-[#EAE5D6] p-12">
                            <img
                                src={image}
                                alt={imageAlt}
                                className="w-full h-full object-contain mix-blend-multiply"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
