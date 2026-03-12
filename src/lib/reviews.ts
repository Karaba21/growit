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
        author: "Rosa",
        avatar: "/avatars_reviews/rosa.jpeg",
        rating: 5,
        title: "MI HUERTA!",
        quote: "Encantada con Growit! Cosechando rúculas, lechuga crespa y achicoria. Mucho sabor 😍",
        image: "/review1.png"
    },
    {
        id: "2",
        author: "Mirta",
        avatar: "/avatars_reviews/mirta.jpeg",
        rating: 5,
        title: "Primera Cosecha",
        quote: "Mi primera experiencia con huerta hidroponica y estoy fascinada con el resultado.",
        image: "/review2.png"
    },
    {
        id: "3",
        author: "Carlos",
        avatar: "/avatars_reviews/carlos.jpg",
        rating: 5,
        title: "Llegó mi hidroponia",
        quote: "Además de verse hermosa los cultivos son riquísimos!!",
        image: "/review3.png"
    },
    {
        id: "4",
        author: "Julieta",
        avatar: "/avatars_reviews/julieta.jpeg",
        rating: 5,
        title: "Del balcón a mi plato",
        quote: "Cultivando rúcula por primera vez!!",
        image: "/review4.png"
    }
];
