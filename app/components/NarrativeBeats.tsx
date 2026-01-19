'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { narrativeBeats } from '@/app/data/content';

export default function NarrativeBeats() {
    const { scrollYProgress } = useScroll();

    // Beat 1: Foundations (5-15%)
    const opacity1 = useTransform(scrollYProgress, [0.05, 0.1, 0.15, 0.2], [0, 1, 1, 0]);
    const x1 = useTransform(scrollYProgress, [0.05, 0.15], [-50, 0]);

    // Beat 2: Expansion (20-30%)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.3, 0.35], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.2, 0.3], [50, 0]);

    // Beat 3: Perfection (35-45%)
    const opacity3 = useTransform(scrollYProgress, [0.35, 0.4, 0.45, 0.5], [0, 1, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.35, 0.45], [-50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-30 w-full h-full max-w-7xl mx-auto px-4 md:px-6">
            {/* Beat 1: Premium Websites */}
            <motion.div
                className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 max-w-[80vw] md:max-w-lg"
                style={{ opacity: opacity1, x: x1 }}
            >
                <h2 className="text-core-orange text-xs md:text-sm font-bold tracking-widest mb-2">01. {narrativeBeats[0].label}</h2>
                <h3 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: narrativeBeats[0].title.replace(' ', '<br />') }} />
                <p className="text-gray-400 text-sm md:text-xl leading-relaxed">
                    {narrativeBeats[0].description}
                </p>
            </motion.div>

            {/* Beat 2: Web Platforms */}
            <motion.div
                className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 max-w-[80vw] md:max-w-lg text-right"
                style={{ opacity: opacity2, x: x2 }}
            >
                <h2 className="text-core-orange text-xs md:text-sm font-bold tracking-widest mb-2">02. {narrativeBeats[1].label}</h2>
                <h3 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: narrativeBeats[1].title.replace(' ', '<br />') }} />
                <p className="text-gray-400 text-sm md:text-xl leading-relaxed">
                    {narrativeBeats[1].description}
                </p>
            </motion.div>

            {/* Beat 3: Mobile Apps */}
            <motion.div
                className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 max-w-[80vw] md:max-w-lg"
                style={{ opacity: opacity3, x: x3 }}
            >
                <h2 className="text-core-orange text-xs md:text-sm font-bold tracking-widest mb-2">03. {narrativeBeats[2].label}</h2>
                <h3 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: narrativeBeats[2].title.replace(' ', '<br />') }} />
                <p className="text-gray-400 text-sm md:text-xl leading-relaxed">
                    {narrativeBeats[2].description}
                </p>
            </motion.div>
        </div>
    );
}
