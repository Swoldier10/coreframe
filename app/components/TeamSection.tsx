'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const teamMembers = [
    {
        name: "Neculai Raul",
        role: "Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Vlasin Manuela",
        role: "Developer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Alex Pugna",
        role: "Testing",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function TeamSection() {
    const { scrollYProgress } = useScroll();

    // Beat 4: Team Section (70-85%)
    // Fade in at 0.65, fully visible by 0.7
    // Fade out at 0.8, fully invisible by 0.85
    const opacity = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);

    // Enable pointer events only when fully visible
    const pointerEvents = useTransform(scrollYProgress, (v) => (v > 0.68 && v < 0.82 ? 'auto' : 'none'));

    return (
        <motion.section
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
            style={{ opacity, pointerEvents }}
        >
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    style={{ y }}
                    className="mb-12 md:mb-16 text-center md:text-left"
                >
                    <h2 className="text-core-orange text-xs md:text-sm font-bold tracking-widest mb-4">THE SQUAD</h2>
                    <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white">MEET THE<br />ARCHITECTS</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            // Stagger effect is now managed by scroll position slightly implicitly or static delay
                            // Since it's scroll driven, we can just let them all move up together or add small manual transforms if needed
                            // For simplicity in this complex setup, we move them as a block with the parent or keep static relative to parent
                            className="group"
                        >
                            <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500 ease-out">
                                <div className="absolute inset-0 bg-core-orange/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay z-10" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl font-bold mb-1 text-white group-hover:text-core-orange transition-colors duration-300">{member.name}</h4>
                                <p className="text-gray-400 text-sm tracking-wide uppercase">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
