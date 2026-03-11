export function AnnouncementBanner() {
    const items = [
        "Envio gratis con la compra de tu huerta",
        "Hasta 12 Cuotas sin Interés",
    ];

    // Un "row" con suficientes repeticiones para llenar el ancho de pantalla
    const singleRow = Array(8).fill(items).flat();

    return (
        <div
            className="w-full overflow-hidden"
            style={{ backgroundColor: "#f5f5f5ff" }}
            aria-label="Anuncio"
        >
            {/* 
              Dos grupos idénticos lado a lado.
              La animación mueve el wrapper -50% (exactamente un grupo),
              lo que crea un loop perfecto sin cortes.
            */}
            <div className="flex animate-scroll-infinite" style={{ width: "max-content" }}>
                {/* Grupo A */}
                <div className="flex shrink-0">
                    {singleRow.map((item, i) => (
                        <span
                            key={`a-${i}`}
                            className="inline-flex items-center px-10 py-2 text-primary font-accent text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                {/* Grupo B — idéntico al A */}
                <div className="flex shrink-0">
                    {singleRow.map((item, i) => (
                        <span
                            key={`b-${i}`}
                            className="inline-flex items-center px-10 py-2 text-primary font-accent text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
