"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const ScrollToTop = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Handle hash navigation manually
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If element is not found immediately, retry after a short delay
                // This handles cases where content might be dynamically loading
                setTimeout(() => {
                    const retryElement = document.getElementById(id);
                    if (retryElement) {
                        retryElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } else {
            // Only scroll to top if there is no hash
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};
