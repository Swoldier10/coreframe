'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
    const pointerEvents = useTransform(scrollYProgress, (v) => (v > 0.1 ? 'none' : 'auto'));

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none"
            style={{ opacity, scale, pointerEvents }}
        >
            <div className="text-center space-y-6 max-w-4xl px-6">
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-2">
                    COREFRAME
                </h1>

                <div className="space-y-4 relative z-10">
                    <h2 className="text-xl md:text-3xl font-light tracking-[0.2em] text-core-orange uppercase drop-shadow-lg">
                        Digital Architects
                    </h2>
                    <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                        We build the digital infrastructure that powers the next generation of business.
                        <br className="hidden md:block" />
                        From immersive flagships to complex enterprise systems.
                    </p>
                </div>

                <div className="pt-8 pb-12 relative z-10">
                    <div className="inline-flex items-center gap-4 md:gap-8 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white bg-black/40 px-6 py-3 rounded-full border border-white/20 backdrop-blur-md shadow-2xl">
                        <span>WEBSITES</span>
                        <span className="text-core-orange">•</span>
                        <span>PLATFORMS</span>
                        <span className="text-core-orange">•</span>
                        <span>MOBILE APPS</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 opacity-60 animate-pulse pt-12">
                    <ChevronDown className="w-6 h-6 text-core-orange" />
                    <span className="text-xs uppercase tracking-[0.2em]">Scroll to Initialize</span>
                </div>
            </div>
        </motion.div>
    );
}
