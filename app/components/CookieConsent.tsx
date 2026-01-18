'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('coreframe-consent');
        if (consent === null) {
            // Slight delay so it doesn't pop up INSTANTLY upon load, cleaner UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('coreframe-consent', 'true');
        setIsVisible(false);
        // Here you would initialize GA4 / Pixel / etc.
        // window.gtag('consent', 'update', { ... });
    };

    const handleDecline = () => {
        localStorage.setItem('coreframe-consent', 'false');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-[100] p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
                >
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-white font-bold tracking-wide text-sm">COOKIE CONSENT</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                We use cookies to enhance the user experience and analyze traffic.
                                In compliance with GDPR, tracker scripts are blocked until you click Accept.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-core-orange text-black font-bold text-xs py-3 rounded hover:bg-white transition-colors"
                            >
                                ACCEPT
                            </button>
                            <button
                                onClick={handleDecline}
                                className="flex-1 bg-transparent border border-white/20 text-white font-bold text-xs py-3 rounded hover:bg-white/10 transition-colors"
                            >
                                DECLINE
                            </button>
                        </div>
                        <div className="text-[10px] text-gray-600">
                            <a href="/legal/privacy" className="hover:text-core-orange transition-colors">Read Privacy Policy</a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
