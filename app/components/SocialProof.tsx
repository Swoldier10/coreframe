'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { clients } from '@/app/data/content';

export default function SocialProof() {
    const { scrollYProgress } = useScroll();

    // Beat 5: Social Proof (70-85%)
    // Fade in 0.7-0.75
    // Fade out 0.85-0.9
    const opacity = useTransform(scrollYProgress, [0.7, 0.75, 0.85, 0.9], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);
    const pointerEvents = useTransform(scrollYProgress, (v) => (v > 0.72 && v < 0.88 ? 'auto' : 'none'));

    return (
        <motion.section
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
            style={{ opacity, pointerEvents }}
        >
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    style={{ y }}
                    className="mb-12 md:mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-core-orange text-xs md:text-sm font-bold tracking-widest mb-4">SELECTED WORKS</h2>
                        <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white">IMPACT<br />STORIES</h3>
                    </div>
                    <div className="hidden md:block h-px flex-grow bg-white/10 mx-12 mb-8" />
                    <p className="text-gray-400 text-sm md:text-base max-w-sm mb-2 text-right hidden md:block">
                        Delivering measurable results through technical excellence and design innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="group relative bg-core-black border border-white/10 rounded-sm p-6 hover:border-core-orange/50 transition-colors duration-500 flex flex-col h-full pointer-events-auto"
                        >
                            {/* Header: Type & Spec */}
                            <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                                <span className="text-[10px] font-bold tracking-widest text-core-orange bg-core-orange/10 px-2 py-1 rounded">
                                    {client.type}
                                </span>
                                <span className="text-[10px] text-gray-600 font-mono">0{index + 1}</span>
                            </div>

                            {/* Logo Area - White Background Gradient */}
                            <div className="h-24 -mx-6 -mt-6 mb-6 bg-gradient-to-b from-white via-white to-black/0 p-6 flex items-center justify-center relative">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-12 w-auto object-contain relative z-10 mix-blend-multiply opacity-100"
                                />
                                {/* Soft fade overlay to smooth the transition */}
                                <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-core-black to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="mt-auto">
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-core-orange transition-colors duration-300">{client.name}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-3 group-hover:border-core-orange/50 transition-colors duration-300">
                                    {client.impact}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
