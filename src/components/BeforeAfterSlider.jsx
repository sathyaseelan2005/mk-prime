import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="section-padding py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center uppercase tracking-tight">
          Project <span className="text-secondary">Transformation</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none border-4 border-white"
          ref={containerRef}
          onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
          onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Full width background) */}
          <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 transition-transform duration-75"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-secondary hover:scale-110 transition-transform">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-secondary rounded-full" />
            </div>
          </div>
          
          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm md:text-base font-bold pointer-events-none z-10 shadow-lg tracking-wider uppercase">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm md:text-base font-bold pointer-events-none z-10 shadow-lg tracking-wider uppercase">
            After
          </div>
        </motion.div>
      </div>
    </div>
  );
}
