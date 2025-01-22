import React, { useState, useEffect, useRef } from 'react';

const LampEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="h-screen w-full bg-gray-950 flex items-center justify-center overflow-hidden">
      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto p-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,0.1), transparent 40%)`,
          }}
        />

        {/* Content Container */}
        <div className="relative z-20 bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-800">
          <div className="h-96 p-8 overflow-hidden rounded-lg">
            {/* Top Lamp Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1">
              <div className="w-full h-full bg-gradient-to-b from-purple-500/20 to-transparent" />
              <div className="w-32 h-32 absolute -top-16 left-1/2 -translate-x-1/2 rounded-full bg-purple-500/10 blur-2xl" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Events
              </h2>
              <p className="mt-4 text-gray-400">
                
              </p>
            </div>

            {/* Bottom Shadow */}
            <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-gray-950 to-transparent" />
          </div>
        </div>

        {/* Ambient Background Glow */}
        <div className="absolute -top-1 inset-x-0 h-40 bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl" />
        <div className="absolute -bottom-1 inset-x-0 h-40 bg-gradient-to-t from-purple-500/20 to-transparent blur-2xl" />
      </div>
    </div>
  );
};

export default LampEffect;