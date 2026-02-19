import Link from "next/link";

export const WhatsAppButton = () => {
    return (
        <Link
            href="https://wa.me/59893474177" // Placeholder number, user should update or provide
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20bd5a] transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
            aria-label="Contactar por WhatsApp"
        >
            <svg
                viewBox="0 0 32 32"
                className="w-9 h-9 fill-current"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.603 4.8 1.658 6.845L2.01 29.98l7.258-1.92C11.16 28.98 13.51 29.61 16 29.61c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.26c-2.22 0-4.32-.58-6.17-1.59l-.44-.24-4.57 1.2 1.21-4.47-.29-.46C4.66 20.02 4.02 18.06 4.02 16 4.02 9.38 9.38 4.02 16 4.02s11.98 5.36 11.98 11.98-5.36 11.98-11.98 11.98zm6.57-8.96c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-1.89-.96-3.13-2.18-4.38-4.34-.33-.57-.03-.88.15-1.06.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.61-.81-.62h-.69c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s.96 3.48 2.01 4.89c.12.15 2.58 4.14 6.39 5.62 2.58 1 3.51.81 4.14.75.95-.09 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
            </svg>
        </Link>
    );
};
