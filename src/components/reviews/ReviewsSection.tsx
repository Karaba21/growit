import React from 'react';
import { Quotes, Star } from '@phosphor-icons/react/dist/ssr';

const reviews = [
    {
        id: 1,
        quote: "Growbit le ha devuelto la vida a mi habitación... súper fácil de usar y muy limpio.",
        author: "María Fernández",
        role: "Influencer",
        avatar: "/images/avatars/avatar-maria.png"
    },
    {
        id: 2,
        quote: "El sistema es perfecto para el apartamento, no ocupa espacio y siempre tengo mis hierbas frescas.",
        author: "Carlos Ruiz",
        role: "Arquitecto",
        avatar: "/images/avatars/avatar-carlos.png"
    },
    {
        id: 3,
        quote: "Nunca había tenido éxito con mis plantas de interior hasta que probé Growit. Altamente recomendado.",
        author: "Sofía Méndez",
        role: "Diseñadora",
        avatar: "/images/avatars/avatar-sofia.png"
    }
];

export const ReviewsSection: React.FC = () => {
    return (
        <section className="py-20 bg-[#F9F7F2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
                        Reseñas de Clientes
                    </h2>
                    <p className="text-gray-600 font-body max-w-2xl mx-auto">
                        Lo que dicen quienes ya están cultivando con Growit
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm relative flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-[#D9704F] rounded-full flex items-center justify-center text-white mb-6 absolute -top-6">
                                <Quotes size={24} weight="fill" />
                            </div>

                            <div className="flex gap-1 text-yellow-400 mb-6 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} weight="fill" />
                                ))}
                            </div>

                            <p className="text-gray-600 font-body italic mb-8 leading-relaxed">
                                "{review.quote}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img
                                        src={review.avatar}
                                        alt={review.author}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold font-display text-gray-900 text-sm">
                                        {review.author}
                                    </h4>
                                    <p className="text-xs text-gray-500 font-body uppercase tracking-wider">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
