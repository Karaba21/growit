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
        author: "Rossana V.",
        avatar: "/avatars_reviews/rosa.webp",
        rating: 5,
        title: "¡Súper fácil y gratificante!",
        quote: "Pensaba que iba a ser complicado, pero con los videos y toda la ayuda que te dan me resultó súper fácil. En poco tiempo ya estaba viendo crecer las primeras plantas y la verdad que es muy gratificante.",
        image: "/review1.webp"
    },
    {
        id: "2",
        author: "Mirta",
        avatar: "/avatars_reviews/mirta.webp",
        rating: 5,
        title: "Atención excelente",
        quote: "Excelente atención, explican muy claro, súper dedicados al bienestar del usuario.",
        image: "/review2.webp"
    },
    {
        id: "3",
        author: "Carlos M.",
        avatar: "/avatars_reviews/carlos.webp",
        rating: 5,
        title: "Fácil, práctico y sin esfuerzo",
        quote: "La verdad pensé que iba a ser más complicado, pero es súper fácil de usar y requiere muy poco mantenimiento. En unos minutos a la semana reviso el agua y listo. Ahora tengo verduras frescas en casa sin esfuerzo.",
        image: "/review3.webp"
    },
    {
        id: "4",
        author: "Julieta Aguerre",
        avatar: "/avatars_reviews/julieta.webp",
        rating: 5,
        title: "Decorativo e increíble",
        quote: "Además de funcionar increíble, queda espectacular en la cocina. Las plantas creciendo le dan una estética divina al espacio y siempre llama la atención cuando viene gente a casa. Es práctico y decorativo al mismo tiempo.",
        image: "/review4.webp"
    }
];
