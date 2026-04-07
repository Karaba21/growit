
import Link from "next/link";
import { Users, House, Buildings, Plant, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const products = [
    {
        title: "Growit 36 Plantas",
        subtitle: "Maximo Cultivo",
        image: "/mujer1.webp",
        imagePosition: "object-[center_5%]", // Lowers the image to avoid text covering the face
        link: "/catalogo?category=huertas", // Adjust link if needed
        features: [
            { icon: Users, label: "3-4 personas" },
            { icon: House, label: "Hogar" },
            { icon: Plant, label: "36 plantas" },
        ],
    },
    {
        title: "Growit 20 Plantas",
        subtitle: "El más Elegido",
        image: "/mujer2.webp",
        imagePosition: "object-[center_5%]", // Lowers the image relative to center
        link: "/catalogo?category=huertas", // Adjust link if needed
        features: [
            { icon: Users, label: "1-2 personas" },
            { icon: Buildings, label: "Departamento" },
            { icon: Plant, label: "20 plantas" },
        ],
    },
];

export function ProductSelection() {
    return (
        <section className="pt-2 pb-8 md:pt-4 md:pb-8 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-4 md:mb-6">
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-center text-primary uppercase tracking-wide">
                        ¡Elegí cómo querés alimentarte!
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {products.map((product, index) => (
                        <Link href={product.link} key={index} className="group block" prefetch={false}>
                            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 transition-transform duration-300 group-hover:-translate-y-1">
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] w-full bg-surface">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        loading="lazy"
                                        className={`absolute inset-0 w-full h-full object-cover ${product.imagePosition || "object-center"}`}
                                    />

                                    {/* Top Gradient for text legibility */}
                                    <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/90 via-white/50 to-transparent z-10 pointer-events-none" />

                                    {/* Bottom Gradient for icons legibility */}
                                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

                                    {/* Top Text */}
                                    <div className="absolute top-0 inset-x-0 text-center pt-8 md:pt-10 z-20">
                                        <h3 className="text-4xl md:text-5xl font-display font-bold text-[#2A4B46] mb-2 tracking-tight">
                                            {product.title}
                                        </h3>
                                        <p className="text-lg md:text-xl font-medium text-[#2A4B46]/80">
                                            {product.subtitle}
                                        </p>
                                    </div>

                                    {/* Bottom Icons */}
                                    <div className="absolute bottom-0 inset-x-0 pb-8 z-20">
                                        <div className="flex justify-center items-end gap-4 sm:gap-8 px-4">
                                            {product.features.map((feature, fIndex) => {
                                                const Icon = feature.icon;
                                                return (
                                                    <div key={fIndex} className="flex flex-col items-center gap-3">
                                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F5F2EB] rounded-full flex items-center justify-center shadow-md">
                                                            <Icon size={32} weight="regular" className="text-[#2A4B46] sm:hidden" />
                                                            <Icon size={40} weight="regular" className="text-[#2A4B46] hidden sm:block" />
                                                        </div>
                                                        <span className="text-white font-medium text-sm sm:text-base font-accent tracking-wide whitespace-nowrap">
                                                            {feature.label}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom CTA Bar */}
                                <div className="bg-white py-6 flex items-center justify-center">
                                    <span className="text-[#2A4B46] font-accent text-sm md:text-base font-semibold tracking-[0.2em] flex items-center gap-2 group-hover:text-[#1e3632] transition-colors uppercase">
                                        {product.title} <ArrowRight size={20} weight="bold" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
