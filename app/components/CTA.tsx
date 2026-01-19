'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { ctaContent } from '@/app/data/content';

export default function CTA() {
    const { scrollYProgress } = useScroll();

    // Beat 6: CTA (90-100%)
    // Fade in start at 0.9, full by 0.95
    const opacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
    const y = useTransform(scrollYProgress, [0.9, 1], [50, 0]);
    const pointerEvents = useTransform(scrollYProgress, (v) => v > 0.92 ? 'auto' : 'none');

    return (
        <motion.section
            className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none"
            style={{ opacity, y, pointerEvents }}
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-core-orange/10 rounded-full blur-[120px] opacity-50 -z-10" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 text-center space-y-12 relative z-10 w-full">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl" dangerouslySetInnerHTML={{ __html: ctaContent.title.replace(' ', '<br />') }} />

                <button className="group relative inline-block px-12 py-6 border-2 border-core-orange text-core-orange font-bold text-xl tracking-wider overflow-hidden hover:text-black transition-colors duration-300">
                    <span className="relative z-10">{ctaContent.buttonText}</span>
                    <div className="absolute inset-0 bg-core-orange transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </button>
            </div>

            <div className="absolute bottom-12 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 gap-6 text-xs text-gray-500 uppercase tracking-widest">
                <div>{ctaContent.copyright}</div>

                <div className="flex gap-8 font-bold text-white/80">
                    <a href="#" className="hover:text-core-orange transition-colors">{ctaContent.links.services}</a>
                    <a href="#" className="hover:text-core-orange transition-colors">{ctaContent.links.about}</a>
                    <a href="#" className="hover:text-core-orange transition-colors">{ctaContent.links.careers}</a>
                </div>

                <div className="flex gap-4 items-center">
                    <a href="/legal/impressum" className="hover:text-white transition-colors">{ctaContent.links.impressum}</a>
                    <a href="/legal/privacy" className="hover:text-white transition-colors">{ctaContent.links.privacy}</a>
                    <span className="text-gray-700">|</span>
                    <a href="#" className="hover:text-white transition-colors">{ctaContent.links.twitter}</a>
                    <a href="#" className="hover:text-white transition-colors">{ctaContent.links.linkedin}</a>
                </div>
            </div>
        </motion.section>
    );
}
