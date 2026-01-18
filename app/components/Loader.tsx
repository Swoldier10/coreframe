'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
    const [percent, setPercent] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsVisible(false);
                        onComplete();
                    }, 500);
                    return 100;
                }
                return prev + 1; // Adjust speed here
            });
        }, 20); // 20ms * 100 = 2000ms total load time approx

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="font-mono text-xl sm:text-2xl tracking-widest">
                        CORE INTEGRITY: [ <span className="text-core-orange">{percent.toString().padStart(3, '0')}%</span> ]
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
