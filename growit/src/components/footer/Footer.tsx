import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Growit</h3>
                        <p className="text-sm">
                            Cultiva tu propio alimento en casa de forma fácil y sostenible.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">Enlaces</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-sm hover:text-primary-400 transition-colors">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="/catalogo" className="text-sm hover:text-primary-400 transition-colors">
                                    Catálogo
                                </a>
                            </li>
                            <li>
                                <a href="#sobre-nosotros" className="text-sm hover:text-primary-400 transition-colors">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#contacto" className="text-sm hover:text-primary-400 transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">Soporte</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#faq" className="text-sm hover:text-primary-400 transition-colors">
                                    Preguntas Frecuentes
                                </a>
                            </li>
                            <li>
                                <a href="#envios" className="text-sm hover:text-primary-400 transition-colors">
                                    Envíos
                                </a>
                            </li>
                            <li>
                                <a href="#garantia" className="text-sm hover:text-primary-400 transition-colors">
                                    Garantía
                                </a>
                            </li>
                            <li>
                                <a href="#devoluciones" className="text-sm hover:text-primary-400 transition-colors">
                                    Devoluciones
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">Métodos de Pago</h4>
                        <div className="flex flex-wrap gap-2">
                            <div className="bg-white rounded px-2 py-1 text-xs text-gray-900 font-medium">
                                Visa
                            </div>
                            <div className="bg-white rounded px-2 py-1 text-xs text-gray-900 font-medium">
                                Mastercard
                            </div>
                            <div className="bg-white rounded px-2 py-1 text-xs text-gray-900 font-medium">
                                PayPal
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Growit. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#privacidad" className="text-sm hover:text-primary-400 transition-colors">
                            Privacidad
                        </a>
                        <a href="#terminos" className="text-sm hover:text-primary-400 transition-colors">
                            Términos
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
