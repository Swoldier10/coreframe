'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring } from 'framer-motion';

const FRAME_COUNT = 120;

export default function CanvasEngine() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, stiffness: 100, damping: 20 });

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Preload Images (Placeholder logic included)
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    // In real app: `/sequence/sequence_${i.toString().padStart(3, '0')}.webp`
                    // For now, we will fail to load and use fallback rendering
                    img.src = `/sequence/sequence_${i.toString().padStart(3, '0')}.webp`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        // Mark as null or handle missing
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setImagesLoaded(true);
        };

        loadImages();
    }, []);

    // Render Loop
    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Set canvas size (handling retina displays)
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);

            // Clear
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Determine Frame
            const progress = smoothProgress.get();
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(progress * FRAME_COUNT)
            );

            // Render Image or Fallback
            if (images[frameIndex]) {
                const img = images[frameIndex];
                // Draw image covering canvas while maintaining aspect ratio
                const scale = Math.max(rect.width / img.width, rect.height / img.height);
                const x = (rect.width / 2) - (img.width / 2) * scale;
                const y = (rect.height / 2) - (img.height / 2) * scale;
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            } else {
                // Fallback Placeholder Rendering
                drawFallback(ctx, rect.width, rect.height, progress);
            }

            requestAnimationFrame(render);
        };

        const animationId = requestAnimationFrame(render);
        return () => cancelAnimationFrame(animationId);
    }, [smoothProgress, images, imagesLoaded]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            aria-hidden="true"
            role="presentation"
        />
    );
}

// Fallback Drawing Logic (Zoom Through -> Reveal Core)
function drawFallback(ctx: CanvasRenderingContext2D, width: number, height: number, progress: number) {
    const cx = width / 2;
    const cy = height / 2;
    const baseSize = Math.min(width, height) * 0.3;

    ctx.save();
    ctx.translate(cx, cy);

    // Rotation mainly affects the wireframe
    const rotation = progress * Math.PI * 2;

    // Phase 1: Wireframe Zoom (0 - 0.4)
    // We scale the wireframe significantly to simulate flying *into* it.
    if (progress < 0.6) {
        ctx.save();
        ctx.rotate(rotation);

        // Zoom effect: Scale from 1 to 5
        const zoomProgress = Math.min(1, progress / 0.5);
        const scale = 1 + (zoomProgress * 4);
        const wireOpacity = Math.max(0, 0.4 - (zoomProgress * 0.4)); // Fade out as we get closer

        if (wireOpacity > 0) {
            ctx.lineWidth = 2 / scale; // Keep line width constant relative to screen
            // Reduced opacity for better text legibility (0.4 -> 0.15 max)
            ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(0.15, wireOpacity)})`;

            const s = baseSize * scale;
            ctx.beginPath();
            ctx.rect(-s / 2, -s / 2, s, s);
            ctx.stroke();

            // Corner dots with slightly higher opacity but still subtle
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.3, wireOpacity)})`;
            const d = 4 / scale;
            ctx.beginPath();
            ctx.arc(-s / 2, -s / 2, d, 0, Math.PI * 2);
            ctx.arc(s / 2, -s / 2, d, 0, Math.PI * 2);
            ctx.arc(s / 2, s / 2, d, 0, Math.PI * 2);
            ctx.arc(-s / 2, s / 2, d, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    // Phase 2: Core Emergence (0.3 - 0.65)
    // The orange core grows from within as we zoom in
    if (progress > 0.3) {
        // Stop rendering if fully exited
        if (progress > 0.65) {
            ctx.restore();
            return;
        }

        const coreProgress = (progress - 0.3) / 0.7; // 0 to 1

        // Ambient Exit (0.6 - 0.65)
        // Fade out rapidly before Team Section appears
        const isExit = progress > 0.6;
        const exitProgress = isExit ? (progress - 0.6) / 0.05 : 0;

        // Core rotation is slower/different to create depth
        ctx.rotate(-rotation * 0.5);

        // Core Animation: Expands and transforms
        let coreScale = Math.min(1, coreProgress * 1.2);
        let alpha = 1;

        if (isExit) {
            coreScale += exitProgress * 4; // Expand massive
            alpha = 1 - exitProgress; // Fade out slightly
            ctx.filter = `blur(${exitProgress * 50}px)`; // Heavily blur
        }

        const coreSize = baseSize * 0.8 * coreScale;

        // Glow
        ctx.shadowBlur = 30 * coreProgress + (isExit ? 100 : 0);
        ctx.shadowColor = '#FF5500';
        ctx.fillStyle = `rgba(255, 85, 0, ${alpha})`;

        // Always render as a Circle (Pulse slightly)
        const pulse = Math.sin(progress * 10) * 0.05 + 1;
        const finalSize = coreSize * pulse;

        ctx.beginPath();
        ctx.arc(0, 0, finalSize / 2, 0, Math.PI * 2);
        ctx.fill();

        if (!isExit) {
            // Specular highlight
            ctx.shadowBlur = 0;
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.beginPath();
            ctx.arc(-finalSize * 0.15, -finalSize * 0.15, finalSize * 0.1, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.filter = 'none';
    }

    ctx.restore();
}
