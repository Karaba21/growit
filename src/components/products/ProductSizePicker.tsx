import React from 'react';
import Link from 'next/link';

interface ProductSizePickerProps {
    currentHandle: string;
}

const OUTDOOR_PRODUCTS = [
    { size: '20', handle: 'grow-20' },
    { size: '28', handle: 'grow-28-outdoor' },
    { size: '36', handle: 'grow-36-outdoor' },
];

const INDOOR_PRODUCTS = [
    { size: '20', handle: 'grow-20-indoor' },
    { size: '28', handle: 'grow-28-indoor' },
    { size: '36', handle: 'grow-36-indoor' },
];

export function ProductSizePicker({ currentHandle }: ProductSizePickerProps) {
    let options: { size: string; handle: string }[] | null = null;
    let type = '';

    if (OUTDOOR_PRODUCTS.some((p) => p.handle === currentHandle)) {
        options = OUTDOOR_PRODUCTS;
        type = 'Exterior';
    } else if (INDOOR_PRODUCTS.some((p) => p.handle === currentHandle)) {
        options = INDOOR_PRODUCTS;
        type = 'Interior';
    }

    if (!options) {
        return null;
    }

    const currentSize = options.find((p) => p.handle === currentHandle)?.size;

    return (
        <div className="mb-8">
            {currentSize && (
                <>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[1px] w-6 bg-gray-300"></div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 font-accent">
                            Colección
                        </h3>
                        <div className="h-[1px] w-6 bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center gap-2 md:gap-3">
                        {INDOOR_PRODUCTS.find(p => p.size === currentSize) && (
                            <Link
                                href={`/producto/${INDOOR_PRODUCTS.find(p => p.size === currentSize)!.handle}`}
                                className={`
                                    min-w-[6rem] text-center px-6 py-2.5 rounded-full border transition-colors
                                    font-sans text-[15px] font-semibold leading-none flex items-center justify-center
                                    ${type === 'Interior'
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white text-[#111111] border-[#D1D5DB] hover:border-[#151515]'
                                    }
                                `}
                            >
                                Interior
                            </Link>
                        )}
                        {OUTDOOR_PRODUCTS.find(p => p.size === currentSize) && (
                            <Link
                                href={`/producto/${OUTDOOR_PRODUCTS.find(p => p.size === currentSize)!.handle}`}
                                className={`
                                    min-w-[6rem] text-center px-6 py-2.5 rounded-full border transition-colors
                                    font-sans text-[15px] font-semibold leading-none flex items-center justify-center
                                    ${type === 'Exterior'
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white text-[#111111] border-[#D1D5DB] hover:border-[#151515]'
                                    }
                                `}
                            >
                                Exterior
                            </Link>
                        )}
                    </div>
                    <div className="mt-4 mb-1 text-center">
                        <span className="text-[10px] md:text-[12px] font-accent font-bold uppercase tracking-[0.15em] text-[#013D3B]/80">
                            {type === 'Exterior' && 'IDEAL CON 6 HORAS DE SOL DIARIAS'}
                            {type === 'Interior' && 'USO EN INTERIOR O BALCÓN TECHADO'}
                        </span>
                    </div>
                </>
            )}

            <div className="flex items-center justify-center gap-3 mt-8 mb-4">
                <div className="h-[1px] w-6 bg-gray-300"></div>
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 font-accent">
                    Cantidad de Plantas
                </h3>
                <div className="h-[1px] w-6 bg-gray-300"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {options.map((option) => {
                    const isActive = option.handle === currentHandle;
                    return (
                        <Link
                            key={option.handle}
                            href={`/producto/${option.handle}`}
                            className={`
                                min-w-[4rem] text-center px-5 py-2.5 rounded-full border transition-colors
                                font-sans text-[15px] font-semibold leading-none flex items-center justify-center
                                ${isActive
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-white text-[#111111] border-[#D1D5DB] hover:border-primary'
                                }
                            `}
                        >
                            {option.size}
                        </Link>
                    );
                })}
            </div>

            {/* Banner de Regalo Sorpresa - Solo para Interior/Exterior */}
            {(type === 'Interior' || type === 'Exterior') && (
                <div className="mt-8 relative bg-[#F4F1EA] rounded-xl py-5 px-6 text-center border border-[#013D3B]/10 overflow-hidden flex flex-col items-center">
                    {/* Lazo/Bow Decorativo diagonal en esquina superior izquierda */}
                    <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none rounded-tl-xl overflow-hidden">
                        {/* Cintas diagonales */}
                        <div className="absolute top-8 -left-8 w-32 h-3 bg-[#013D3B] opacity-10 -rotate-45"></div>
                        <div className="absolute top-5 -left-10 w-32 h-1 bg-[#013D3B] opacity-10 -rotate-45"></div>

                        {/* Icono de Lazo / Ribbon */}
                        <div className="absolute top-2 left-2 text-[#013D3B] opacity-80 -rotate-12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M239.59,42.53A36.4,36.4,0,0,0,192.69,32c-29.8,11.53-53.76,37.37-64.69,51.81C117.07,69.41,93.11,43.57,63.31,32a36.4,36.4,0,0,0-46.9,10.49,36.19,36.19,0,0,0,7.18,50.18C44,113,83.13,119.5,108.38,121c-5.83,16.51-17.76,43.79-37.49,63.53A8,8,0,0,0,82.2,198c.2,0,.39,0,.59,0a8.05,8.05,0,0,0,5.66-2.34c18.59-18.59,31.76-43.08,39.55-58,7.79,14.88,21,39.37,39.55,58a8.05,8.05,0,0,0,5.66,2.34c.2,0,.4,0,.59,0a8,8,0,0,0,11.31-13.43c-19.72-19.74-31.65-47-37.48-63.53C172.87,119.5,212,113,232.41,92.71A36.19,36.19,0,0,0,239.59,42.53ZM69.34,47a20.44,20.44,0,0,1,26.33-5.88c22.84,8.82,41.48,30,50.93,42.55-23.77-.3-60.08-4.32-79.67-20C55.76,53.47,56.84,48.25,69.34,47Zm153.73,34.41c-19.59,15.71-55.9,19.73-79.67,20,9.45-12.55,28.09-33.73,50.93-42.55a20.45,20.45,0,0,1,26.34,5.88C224.27,51,225.86,59.93,223.07,81.44Z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="relative z-10 w-full flex flex-col items-center justify-center">
                        <h4 className="text-[#013D3B] text-[20px] md:text-[22px] font-extrabold font-accent uppercase tracking-wide mb-2 leading-none">
                            Curso como empezar a cultivar incluido
                        </h4>

                        <div className="text-gray-900 font-accent flex flex-col items-center w-full">
                            <span className="text-[14px] md:text-[15px] mb-1 opacity-90 text-center w-[80%] mx-auto">
                                Aprendé a cultivar desde cero, aunque nunca hayas plantado nada. Te guiamos desde el armado hasta la primera cosecha.
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
