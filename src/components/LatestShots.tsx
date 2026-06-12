/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import React, { useRef, useEffect, useState } from 'react';

interface Shot {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
}

export default function LatestShots() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isPaused, setIsPaused] = useState(false);

  // Synchronize window size for fully custom responsive calculations
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Premium reference matching shots from the provided portfolio graphics (highly pixel-perfect and vivid)
  const shots: Shot[] = [
    {
      id: 'shot1',
      title: 'Digital Workspace & Brand Interface Sketching',
      category: 'UI/UX Design',
      imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 'shot2',
      title: 'Sleek Tablet Layout & Palette Presentation',
      category: 'Brand Systems',
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 'shot3',
      title: 'Corporate Merchandise & Apparel Design Mockup',
      category: 'Packaging Design',
      imageUrl: 'https://images.unsplash.com/photo-1532630571098-79c3d222b00d?auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 'shot4',
      title: 'Aesthetic Identity System Print Layout',
      category: 'Identity System',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 'shot5',
      title: 'Minimalist Interface Mockup & Palette',
      category: 'Branding Systems',
      imageUrl: 'https://images.unsplash.com/photo-1541462608141-2ff030de4a40?auto=format&fit=crop&w=1200&q=90',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : shots.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < shots.length - 1 ? prev + 1 : 0));
  };

  // Implement auto-rotation intervals
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3500); // Transitions to next card every 3.5 seconds

    return () => clearInterval(timer);
  }, [isPaused]);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024;

  // Exact coverflow dimensions and layout spacing
  const cardWidth = isMobile ? 300 : isTablet ? 460 : 580;
  const cardHeight = isMobile ? 200 : isTablet ? 300 : 380;

  // Responsive perspective shifts
  const baseTranslateX = isMobile ? 140 : isTablet ? 220 : 300;
  const additionalTranslateX = isMobile ? 70 : isTablet ? 110 : 150;

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="relative py-24 select-none bg-[#07090e] overflow-hidden"
    >
      {/* Header Container aligns perfectly with standard page margins */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-12 text-left">
        <span className="text-orange-500 font-bold tracking-[0.2em] text-[11px] uppercase block mb-3 font-display">
          PORTFOLIO
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold font-display text-white tracking-tight leading-tight">
          Our Latest Shots
        </h2>
      </div>

      {/* 3D Container with high-end perspective styling for realistic depth */}
      <div 
        className="relative w-full flex items-center justify-center py-8 overflow-visible"
        style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            const swipeThreshold = 55;
            if (info.offset.x > swipeThreshold) {
              handlePrev();
            } else if (info.offset.x < -swipeThreshold) {
              handleNext();
            }
          }}
          className="relative flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing"
          style={{ 
            width: cardWidth, 
            height: cardHeight,
            transformStyle: 'preserve-3d' 
          }}
        >
          {shots.map((shot, idx) => {
            const N = shots.length;
            let offset = idx - activeIndex;

            // Circular wrap for infinite loop effect
            if (offset > N / 2) offset -= N;
            if (offset < -N / 2) offset += N;

            const absOffset = Math.abs(offset);

            // Compute exact positioning for coverflow 3D transformation
            const rotateY = offset === 0 ? 0 : offset > 0 ? -38 : 38;
            
            let translateX = 0;
            if (offset !== 0) {
              const direction = offset > 0 ? 1 : -1;
              translateX = direction * (baseTranslateX + (absOffset - 1) * additionalTranslateX);
            }

            const scale = offset === 0 ? 1 : Math.max(0.72, 0.92 - absOffset * 0.08);
            const translateZ = offset === 0 ? 30 : -140 - absOffset * 60;
            
            // Set opacity to 0 for standby/warping cards (absOffset >= 2) to prevent visual jumps through center
            const opacity = offset === 0 ? 1 : absOffset === 1 ? 0.65 : 0;
            const zIndex = 100 - absOffset;

            // Highlight border on active card
            const borderStyle = offset === 0 
              ? 'border-gray-700/80 shadow-orange-500/10' 
              : 'border-transparent shadow-black/80';

            return (
              <motion.div
                key={shot.id}
                animate={{
                  x: translateX,
                  scale: scale,
                  rotateY: rotateY,
                  z: translateZ,
                  opacity: opacity,
                }}
                transition={{
                  type: 'spring',
                  damping: 18,
                  stiffness: 85,
                }}
                onClick={() => {
                  if (offset !== 0) {
                    setActiveIndex(idx);
                  }
                }}
                className={`absolute inset-0 rounded-[42px] overflow-hidden border bg-[#0e111a] shadow-2xl transition-shadow duration-300 pointer-events-auto ${borderStyle}`}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  zIndex: zIndex,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Visual Design Image Component */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={shot.imageUrl}
                    alt={shot.title}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                    draggable="false"
                  />
                  {/* Subtle light/dark gradient matching the cosmic look */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 ${offset === 0 ? 'opacity-80' : 'opacity-40'}`} />
                </div>

                {/* Coverflow slide information overlay (beautiful slide titles) */}
                <motion.div 
                  animate={{
                    opacity: offset === 0 ? 1 : 0,
                    y: offset === 0 ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-left z-20 pointer-events-none"
                >
                  <span className="text-orange-500 text-[11px] font-bold uppercase tracking-[0.16em] block mb-2 font-display">
                    {shot.category}
                  </span>
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold leading-tight font-display tracking-tight text-balance">
                    {shot.title}
                  </h3>
                </motion.div>

                {/* Hover highlights */}
                <div className="absolute inset-x-0 inset-y-0 cursor-pointer pointer-events-none hover:bg-white/5 duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Guide/Controller controls */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-12 flex justify-between items-center text-xs text-gray-500">
        <span className="flex items-center gap-1.5 font-sans font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          Drag, swipe or click cards to browse
        </span>
        
        {/* Navigation Dot Indicators */}
        <div className="hidden sm:flex items-center gap-2">
          {shots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                idx === activeIndex ? 'w-6 bg-orange-500' : 'w-1.5 bg-gray-800 hover:bg-gray-700'
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gray-900 bg-black/40 hover:bg-orange-500/10 hover:border-orange-500/30 flex items-center justify-center transition-all cursor-pointer text-white text-base active:scale-95"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gray-900 bg-black/40 hover:bg-orange-500/10 hover:border-orange-500/30 flex items-center justify-center transition-all cursor-pointer text-white text-base active:scale-95"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
