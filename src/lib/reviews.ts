export interface Review {
    id: string;
    author: string;
    avatar: string;
    rating: number;
    title?: string;
    quote: string;
    image?: string;
}

export const reviews: Review[] = [
    {
        id: "1",
        author: "Romina Vega",
        avatar: "https://ui-avatars.com/api/?name=Romina+Vega&background=D9704F&color=fff",
        rating: 5,
        title: "MI HUERTA!",
        quote: "Empecé el 30/11/26...rúculas, lechuga crespa y achicoria. mucho sabor y color 😍",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "2",
        author: "GISELA VILLEGA",
        avatar: "https://ui-avatars.com/api/?name=Gisela+Villega&background=D9704F&color=fff",
        rating: 5,
        title: "Primera Cosecha",
        quote: "Hola es mi primera experiencia con huerta hidroponica estoy feliz por el resultado. Realmente resultó más fácil de lo que creía vamos a ver cómo nos va con otras plantas.",
        image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "3",
        author: "Mariano Michel",
        avatar: "https://ui-avatars.com/api/?name=Mariano+Michel&background=D9704F&color=fff",
        rating: 5,
        title: "Llegó mi cosecha de cherrys",
        quote: "Tengo 4 plantas en la huerta vertical que no paran de dar Tomates Cherrys!",
        image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "4",
        author: "Catalina",
        avatar: "https://ui-avatars.com/api/?name=Catalina&background=D9704F&color=fff",
        rating: 5,
        quote: "Cultivando rúcula por primera vez!! Del balcón de mi Depto a mi plato",
        image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "5",
        author: "Julieta",
        avatar: "https://ui-avatars.com/api/?name=Julieta&background=D9704F&color=fff",
        rating: 5,
        quote: "En unos dias ya voy a probar mis primeros tomates! 😍",
        image: "https://images.unsplash.com/photo-1562050850-9bbcf1b6a715?q=80&w=800&auto=format&fit=crop"
    }
];
