import React, { useState } from 'react';
import type { FAQItem } from '../../types/product';

interface AccordionProps {
    items: FAQItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="space-y-3">
            {items.map((item) => {
                const isOpen = openId === item.id;

                return (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-semibold text-gray-900">
                                {item.question}
                            </span>
                            <svg
                                className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                                }`}
                        >
                            <div className="px-6 pb-4 text-gray-600">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
