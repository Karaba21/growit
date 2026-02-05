import Link from 'next/link';
import { Button } from '../components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Página no encontrada
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
                Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>

            <Link href="/">
                <Button>Volver al inicio</Button>
            </Link>
        </div>
    );
}
