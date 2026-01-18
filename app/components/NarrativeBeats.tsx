'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function NarrativeBeats() {
    const { scrollYProgress } = useScroll();

    // Beat 1: Foundations (20-35%)
    const opacity1 = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
    const x1 = useTransform(scrollYProgress, [0.15, 0.25], [-50, 0]);

    // Beat 2: Expansion (50-65%)
    const opacity2 = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.7], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.45, 0.55], [50, 0]);

    // Beat 3: Perfection (75-90%)
    const opacity3 = useTransform(scrollYProgress, [0.7, 0.75, 0.9, 0.95], [0, 1, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.7, 0.75], [-50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-30 w-full h-full max-w-7xl mx-auto px-4 md:px-6">
            {/* Beat 1: Premium Websites */}
            <motion.div
                className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 max-w-[80vw] md:max-w-lg"
                style={{ opacity: opacity1, x: x1 }}
            >
                <h2 className="text-core-orange text-xs md:text-sm font-bold tracking-widest mb-2">01. WEBSITES</h2>
                <h3 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 leading-tight">DIGITAL<br />FLAGSHIPS</h3>
                <p className="text-gray-400 text-sm md:text-xl leading-relaxed">
                    Immersive, award-winning marketing sites that define brands. We blend motion, aesthetics, and performance to create memorable first impressions.
                </p>
            </motion.div>

            {/* Beat 2: Web Platforms */}
            <motion.div
                className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 max-w-[80vw] md:max-w-lg text-right"
                style={{ opacity: opacity2, x: x2 }}
            >
                <h2 className="text-core-orange text-xs md:text-sm font-bold tracking-widest mb-2">02. PLATFORMS</h2>
                <h3 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 leading-tight">SYSTEMS<br />AT SCALE</h3>
                <p className="text-gray-400 text-sm md:text-xl leading-relaxed">
                    Complex web applications engineered for growth. From SaaS dashboards to enterprise tools, we build the infrastructure that powers business.
                </p>
            </motion.div>

            {/* Beat 3: Mobile Apps */}
            <motion.div
                className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 max-w-[80vw] md:max-w-lg"
                style={{ opacity: opacity3, x: x3 }}
            >
                <h2 className="text-core-orange text-xs md:text-sm font-bold tracking-widest mb-2">03. MOBILE APPS</h2>
                <h3 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 leading-tight">NATIVE<br />PERFECTION</h3>
                <p className="text-gray-400 text-sm md:text-xl leading-relaxed">
                    Fluid, intuitive mobile experiences for iOS and Android. React Native development that feels indistinguishable from native code.
                </p>
            </motion.div>
        </div>
    );
}
