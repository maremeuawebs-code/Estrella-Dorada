'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useFrameSequence } from './useFrameSequence';
import { FrameCanvas } from './FrameCanvas';
import { LoadingOverlay } from './LoadingOverlay';
import { ContentOverlay } from './ContentOverlay';

export const CinematicSequence = () => {
  const { scene1Frames, scene2Frames, progress } = useFrameSequence();
  const [currentViewport, setCurrentViewport] = useState<1 | 2 | 3 | 'landing'>(1);
  const [activeSequence, setActiveSequence] = useState<'scene1' | 'scene2'>('scene1');
  const [frameIndex, setFrameIndex] = useState(0); // 0 to 95
  const [isPlaying, setIsPlaying] = useState(false);
  const [animProgress, setAnimProgress] = useState(0);
  
  const cooldownRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDev = process.env.NODE_ENV === 'development';
  const SHOW_DEBUG = false;

  // Manage body scroll lock based on cinematic sequence viewport state
  useEffect(() => {
    if (currentViewport !== 'landing') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [currentViewport]);

  // Unified playback animation driver using requestAnimationFrame and smooth ease-in-out
  const playSequence = useCallback((
    sequenceName: 'scene1' | 'scene2',
    direction: 'forward' | 'reverse',
    onComplete: () => void
  ) => {
    setIsPlaying(true);
    cooldownRef.current = true;
    setActiveSequence(sequenceName);

    const startFrame = direction === 'forward' ? 0 : 95;
    const endFrame = direction === 'forward' ? 95 : 0;
    const framesSource = sequenceName === 'scene1' ? scene1Frames : scene2Frames;

    if (framesSource.length === 0) {
      setIsPlaying(false);
      onComplete();
      return;
    }

    let startTime: number | null = null;
    const duration = 1600; // 1.6s for premium visual appreciation

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Easing: Cubic Ease-In-Out
      const ease = progressRatio < 0.5
        ? 4 * progressRatio * progressRatio * progressRatio
        : 1 - Math.pow(-2 * progressRatio + 2, 3) / 2;

      const currentIdx = Math.round(startFrame + ease * (endFrame - startFrame));
      const safeIdx = Math.min(Math.max(currentIdx, 0), 95);
      
      setFrameIndex(safeIdx);
      setAnimProgress(progressRatio);

      if (progressRatio < 1) {
        requestAnimationFrame(step);
      } else {
        setIsPlaying(false);
        // Cooldown timer to absorb scroll inertial events
        setTimeout(() => {
          cooldownRef.current = false;
        }, 600);
        onComplete();
      }
    };

    requestAnimationFrame(step);
  }, [scene1Frames, scene2Frames]);

  // Scroll event interceptor driving the State Machine
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isPlaying || cooldownRef.current) {
        e.preventDefault();
        return;
      }

      if (currentViewport === 'landing') {
        // Re-enter the cinematic engine at the top of the page when scrolling up
        if (window.scrollY === 0 && e.deltaY < 0) {
          e.preventDefault();
          setCurrentViewport(3);
          setActiveSequence('scene2');
          setFrameIndex(95);
          setAnimProgress(1);
        }
        return;
      }

      e.preventDefault();

      if (e.deltaY > 0) {
        // Scroll Down
        if (currentViewport === 1) {
          setCurrentViewport(2);
          playSequence('scene1', 'forward', () => {
            setActiveSequence('scene1');
            setFrameIndex(95);
            setAnimProgress(0);
          });
        } else if (currentViewport === 2) {
          setCurrentViewport(3);
          playSequence('scene2', 'forward', () => {
            setActiveSequence('scene2');
            setFrameIndex(95);
            setAnimProgress(0);
          });
        } else if (currentViewport === 3) {
          setCurrentViewport('landing');
        }
      } else if (e.deltaY < 0) {
        // Scroll Up
        if (currentViewport === 2) {
          setCurrentViewport(1);
          playSequence('scene1', 'reverse', () => {
            setActiveSequence('scene1');
            setFrameIndex(0);
            setAnimProgress(0);
          });
        } else if (currentViewport === 3) {
          setCurrentViewport(2);
          playSequence('scene2', 'reverse', () => {
            setActiveSequence('scene1');
            setFrameIndex(95);
            setAnimProgress(0);
          });
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentViewport, isPlaying, playSequence]);

  // Select active frame based on the sequence and frame index
  const activeFrame = activeSequence === 'scene1'
    ? (scene1Frames[frameIndex] || null)
    : (scene2Frames[frameIndex] || null);


  // Print debugging state to developer console
  useEffect(() => {
    if (isDev) {
      console.log('Cinematic State Change:', {
        viewport: currentViewport,
        scene: activeSequence,
        frame: frameIndex + 1,
        rendererMounted: true,
        rendererVisible: currentViewport !== 'landing',
        canvasVisible: true,
        imageLoaded: !!activeFrame
      });
    }
  }, [currentViewport, activeSequence, frameIndex, activeFrame, isDev]);

  return (
    <>
      <LoadingOverlay progress={progress} />

      {/* Debug Overlay - Render only in development mode when SHOW_DEBUG is active */}
      {SHOW_DEBUG && isDev && (
        <div className="fixed top-20 right-6 z-50 bg-black/85 border border-[#d4af37]/35 rounded-xl p-4 text-xs font-mono text-[#d4af37] shadow-2xl backdrop-blur-md space-y-1">
          <div className="font-bold border-b border-[#d4af37]/20 pb-1 mb-1.5 uppercase">Cinematic Debug</div>
          <div>Viewport: <span className="text-white">{currentViewport}</span></div>
          <div>Sequence: <span className="text-white">{activeSequence}</span></div>
          <div>Frame Index: <span className="text-white">{frameIndex + 1} / 96</span></div>
          <div>Progress: <span className="text-white">{Math.round(animProgress * 100)}%</span></div>
          <div>Scroll Locked: <span className="text-white">{currentViewport !== 'landing' ? 'TRUE' : 'FALSE'}</span></div>
          <div className="border-t border-[#d4af37]/20 pt-1 mt-1 space-y-1">
            <div>Renderer Mounted: <span className="text-white">TRUE</span></div>
            <div>Renderer Visible: <span className="text-white">{currentViewport !== 'landing' ? 'TRUE' : 'FALSE'}</span></div>
            <div>Canvas Visible: <span className="text-white">TRUE</span></div>
            <div>Image Loaded: <span className="text-white">{activeFrame ? 'TRUE' : 'FALSE'}</span></div>
          </div>
        </div>
      )}

      <div ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden select-none">
        
        {/* Full-Screen Canvas Layer (image dynamically cover-fit and centered) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-full h-full">
            {activeFrame ? (
              <FrameCanvas frame={activeFrame} className="opacity-90" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black">
                <span className="w-4 h-4 rounded-full bg-[#d4af37] animate-pulse" />
              </div>
            )}
          </div>
        </div>

        {/* Shading Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-45 pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

        {/* Cinematic Content Overlays */}
        <ContentOverlay 
          currentViewport={currentViewport} 
          onExitCinematic={() => setCurrentViewport('landing')}
        />
      </div>
    </>
  );
};
