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
        quote: "Encantada con Growit! Cosechando rúculas, lechuga crespa y achicoria. Mucho sabor 😍",
        image: "/review1.png"
    },
    {
        id: "2",
        author: "GISELA VILLEGA",
        avatar: "https://ui-avatars.com/api/?name=Gisela+Villega&background=D9704F&color=fff",
        rating: 5,
        title: "Primera Cosecha",
        quote: "Mi primera experiencia con huerta hidroponica y estoy fascinada con el resultado.",
        image: "/review2.png"
    },
    {
        id: "3",
        author: "Mariano Michel",
        avatar: "https://ui-avatars.com/api/?name=Mariano+Michel&background=D9704F&color=fff",
        rating: 5,
        title: "Llegó mi hidroponia",
        quote: "Además de verse hermosa los cultivos son riquísimos!!",
        image: "/review3.png"
    },
    {
        id: "4",
        author: "Julieta Aguerre",
        avatar: "https://ui-avatars.com/api/?name=Julieta+Aguerre&background=D9704F&color=fff",
        rating: 5,
        title: "Del balcón a mi plato",
        quote: "Cultivando rúcula por primera vez!!",
        image: "/review4.png"
    }
];
