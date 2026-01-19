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
                    className="flex flex-col h-full justify-center"
                >
                    {/* Header */}
                    <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
                        <div>
                            <h2 className="text-core-orange text-xs md:text-sm font-bold tracking-widest mb-4">SELECTED WORKS</h2>
                            <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white">IMPACT<br />STORIES</h3>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base max-w-sm mb-2 text-right hidden md:block">
                            Delivering measurable results through technical excellence and design innovation.
                        </p>
                    </div>

                    {/* Interactive List */}
                    <div className="flex flex-col border-t border-white/10 pointer-events-auto">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative border-b border-white/10 transition-colors duration-500 hover:border-white/20"
                            >
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />

                                <div className="relative flex flex-col md:flex-row items-start md:items-center py-8 md:py-12 gap-6 md:gap-12 px-2 md:px-4">
                                    {/* Number */}
                                    <span className="text-xs md:text-sm font-mono text-gray-600 group-hover:text-core-orange transition-colors duration-300">
                                        0{index + 1}
                                    </span>

                                    {/* Client Name */}
                                    <h4 className="text-2xl md:text-4xl font-bold text-white group-hover:text-core-orange transition-colors duration-300 flex-shrink-0 w-full md:w-1/4">
                                        {client.name}
                                    </h4>

                                    {/* Type Tag - Mobile Only */}
                                    <span className="md:hidden text-[10px] font-bold tracking-widest text-core-orange bg-core-orange/10 px-2 py-1 rounded w-fit">
                                        {client.type}
                                    </span>

                                    {/* Impact Text */}
                                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl group-hover:text-gray-300 transition-colors duration-300">
                                        {client.impact}
                                    </p>

                                    {/* Type Tag - Desktop & Arrow */}
                                    <div className="hidden md:flex ml-auto items-center gap-6">
                                        <span className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300">
                                            {client.type}
                                        </span>
                                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-core-orange group-hover:bg-core-orange/10 transition-all duration-300">
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-core-orange transform group-hover:rotate-45 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
