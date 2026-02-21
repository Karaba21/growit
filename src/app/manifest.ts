import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Growit - Cultiva tu propio alimento en casa',
        short_name: 'Growit',
        description: 'Sistema inteligente de cultivo para tu hogar. Fácil, automático y orgánico.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4B6B4D',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
