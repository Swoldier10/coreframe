'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function CTA() {
    const { scrollYProgress } = useScroll();

    // Fade in at the very end
    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0.9, 1], [50, 0]);
    const pointerEvents = useTransform(scrollYProgress, (v) => v > 0.95 ? 'auto' : 'none');

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
            style={{ opacity, y, pointerEvents }}
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-core-orange/20 rounded-full blur-[120px] -z-10" />

            <div className="text-center space-y-12 relative z-10">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                    READY TO<br />BUILD?
                </h2>

                <button className="group relative px-12 py-6 border-2 border-core-orange text-core-orange font-bold text-xl tracking-wider overflow-hidden pointer-events-auto hover:text-black transition-colors duration-300">
                    <span className="relative z-10">START PROJECT</span>
                    <div className="absolute inset-0 bg-core-orange transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </button>
            </div>

            <div className="absolute bottom-12 w-full flex flex-col md:flex-row items-center justify-between px-12 gap-6 text-xs text-gray-500 uppercase tracking-widest pointer-events-auto">
                <div>© 2026 Coreframe</div>

                <div className="flex gap-8 font-bold text-white/80">
                    <a href="#" className="hover:text-core-orange transition-colors">Services</a>
                    <a href="#" className="hover:text-core-orange transition-colors">About</a>
                    <a href="#" className="hover:text-core-orange transition-colors">Careers</a>
                </div>

                <div className="flex gap-4 items-center">
                    <a href="/legal/impressum" className="hover:text-white transition-colors">Impressum</a>
                    <a href="/legal/privacy" className="hover:text-white transition-colors">Privacy</a>
                    <span className="text-gray-700">|</span>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </motion.div>
    );
}
