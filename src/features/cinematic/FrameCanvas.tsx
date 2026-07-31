'use client';
import React, { useRef, useEffect } from 'react';

export const FrameCanvas = ({ 
  frame, 
  className = '' 
}: { 
  frame: HTMLImageElement | null; 
  className?: string; 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // Dynamically match internal resolution to the actual window viewport
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      draw();
    };

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas || !frame) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Calculate scale to cover the canvas perfectly (CSS object-cover style)
      const scale = Math.max(canvas.width / frame.width, canvas.height / frame.height);
      
      // Calculate centering offsets
      const drawWidth = frame.width * scale;
      const drawHeight = frame.height * scale;
      const x = (canvas.width - drawWidth) / 2;
      const y = (canvas.height - drawHeight) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(frame, 0, 0, frame.width, frame.height, x, y, drawWidth, drawHeight);
    };

    window.addEventListener('resize', handleResize);
    // Initial size setup and draw
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [frame]);

  return <canvas ref={canvasRef} className={`w-full h-full block ${className}`} />;
};
