import React from 'react';

export function Safebuy() {
    return (
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center items-center gap-3 md:gap-4 mb-3 pb-2 w-full">
            <div className="flex items-center gap-2 md:gap-4 bg-gray-50 px-3 py-3 md:px-5 md:py-3 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-105 justify-center md:justify-start">
                <div className="w-8 h-8 md:w-10 md:h-10 flex flex-shrink-0 items-center justify-center bg-white rounded-full shadow-sm">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#2F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs text-gray-500 font-semibold tracking-wider uppercase whitespace-nowrap">6 meses de</span>
                    <span className="text-xs md:text-sm font-bold text-gray-900 leading-none">GARANTÍA</span>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 bg-gray-50 px-3 py-3 md:px-5 md:py-3 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-105 justify-center md:justify-start">
                <div className="w-8 h-8 md:w-10 md:h-10 flex flex-shrink-0 items-center justify-center bg-white rounded-full shadow-sm">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#2F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs text-gray-500 font-semibold tracking-wider uppercase whitespace-nowrap">Compra</span>
                    <span className="text-xs md:text-sm font-bold text-gray-900 leading-none">PROTEGIDA</span>
                </div>
            </div>
        </div>

    )
}
